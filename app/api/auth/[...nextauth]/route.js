import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";
import CartItemSchema from "@models/user"
import { userAgent } from "next/server";
import { SYSTEM_ENTRYPOINTS } from "next/dist/shared/lib/constants";
import { data } from "autoprefixer";
import { Router } from "next/navigation";

const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scopes: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/user.birthday.read'],
            prompt: 'consent',
        })
    ],
    callbacks:{

    
    async session({ session}){

        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({ profile}){
        try{

            await connectToDB();
            const UserExists = await User.findOne({
                email: profile.email
            });

            if(!UserExists){
                const dob = profile.birthday ? profile.birthday : "1970-01-01";
                await User.create({
                    email: profile.email,
                    username :profile.name.replace(" ","").toLowerCase(),
                    image:profile.picture,
                    dob:dob, 
                })
                console.log(profile.hasBirthday)
                console.log(profile.birthday)
            }
            return true;
        }
        catch(error){
            console.log(error)
            return false;
        }
    }
}
})

export {handler as GET, handler as POST}; 