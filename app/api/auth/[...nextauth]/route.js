import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";
import { userAgent } from "next/server";

const CustomAuthProvider = {
  name: "custom-auth",

    credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },

  async signIn({ email, password }) {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const user = await response.json();
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Authentication failed");
    }
  },
};

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
    CustomAuthProvider
  ],

  callbacks: {
    async session({ session  }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();

      return session; 
    },

    async signIn({ profile }) {
      try {
        await connectToDB();
        const UserExists = await User.findOne({
          email: profile.email,
        });

        if (!UserExists) {
          const dob = profile.birthday ? profile.birthday : "1970-01-01";
          const newUser = new User({
            email: profile.email,
            username: profile.name,
            image: profile.picture,
            dob: dob,
            password:(Math.random()*10000).toString(),
            mobile:1000000000,
            address:{
              street:"street",
              city:"City",
              state:"State",
              pincode:100000,
            }
          })
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

export { handler as GET, handler as POST }
