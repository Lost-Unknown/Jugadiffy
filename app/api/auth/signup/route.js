import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  try {
    connectToDB();
    const { username, password, dob, email } = await request.json();

    // const user = User.findOne({'email':email})
    // if(user){
    //     return new Response("User already exists", { status: 500})
    // }
    // else{
    await User.create({
        email: email,
        username: username,
        image: "/assets/images/profile.svg",
        dob: dob,
        password:password,
        mobile:1000000000,
        address:{
          street:"street",
          city:"City",
          state:"State",
          pincode:100000,
        }});
    return new Response("User added successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to add user to database", { status: 500 });
  }
};
