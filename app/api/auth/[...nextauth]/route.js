import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scopes: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/user.birthday.read",
      ],
      prompt: "consent",
    }),
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        try {
          await connectToDB();
          const { email, password } = credentials;

          const user = await User.findOne({ email });

          if (user && user.password === password) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error("Authentication error:", error);
          return Promise.resolve(null);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ provider, profile, email}) {
      try {
        await connectToDB();
        let findemail;
    
        if (provider === "google") {
          findemail = profile.email;
        } else {
          findemail = email;
        }
    
        let user = await User.findOne({
          email: findemail,
        });
    
        if (!user) {
          const dob = profile?.birthday || "1970-01-01";
          const newUser = new User({
            email: profile ? profile.email : email,
            username: profile?.name || "Unknown",
            image: profile?.picture || "",
            dob: dob,
            password: (Math.random() * 10000).toString(),
            mobile: 1000000000,
            address: {
              street: "street",
              city: "City",
              state: "State",
              pincode: 100000,
            },
          });
          newUser.save();
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export {handler as GET, handler as POST};
