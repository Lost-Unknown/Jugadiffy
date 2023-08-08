import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  try {
    connectToDB();
    const { email, password } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return new Response("User Not exists in the database", { status: 500 });
    }

    if (user.password === password) {
      // Return user data if authentication is successful
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response("Password incorrect", { status: 401 });
    }
  } catch (error) {
    return new Response("Unable to authenticate user", { status: 500 });
  }
};
