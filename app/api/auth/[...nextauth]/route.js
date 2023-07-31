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
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
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
                await User.create({
                    email: profile.email,
                    username :profile.name.replace(" ","").toLowerCase(),
                    image:profile.picture,
                    dob:"01/01/2000", 
                })
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