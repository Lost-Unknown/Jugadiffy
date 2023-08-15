"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [post, setPost] = useState({
    username: "",
    email: "",
    password: "",
    dob: new Date(),
  });

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          username: post.username,
          password: post.password,
          email: post.email.toLowerCase(),
          dob: post.dob,
        }),
      });

      if (response.ok) {
        console.log("User Successfully created! \n" + response);
        router.push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight blue_gradient">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        {session?.user ? (
          router.push("/")
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                if (provider.id === "google") {
                  return (
                    <button
                      onClick={() => signIn(provider.id)}
                      className="p-2 flex gap-2 flex-center border border-zinc-700  w-full text-center md:rounded-md rounded-lg"
                    >
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        width={25}
                        height={25}
                      />
                      <p className="text-zinc-700">Sign in with Google</p>
                    </button>
                  );
                }
              })}
            <form className="space-y-6 mt-4" action="#" method="">
              <div className="flex w-full flex-row justify-center items-center">
                <div className="flex w-2/5 border-b-2 border-zinc-700"></div>
                <p className="text-zinc-700 w-1/5 text-center">or</p>
                <div className="flex w-2/5 border-b-2 border-zinc-700"></div>
              </div>
              <div>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    label="Username"
                    variant="bordered"
                    value={post.username}
                    onChange={(e) =>
                      setPost({ ...post, username: e.target.value })
                    }
                    type="text"
                    isRequired
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    variant="bordered"
                    value={post.email}
                    onChange={(e) =>
                      setPost({ ...post, email: e.target.value })
                    }
                    autoComplete="email"
                    isRequired
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <Input
                  id="password"
                    label="Password"
                    name="password"
                    variant="bordered"
                    isRequired
                    
                    value={post.password}
                    onChange={(e) =>
                      setPost({ ...post, password: e.target.value })
                    }
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Image
                            src={"/assets/images/eyeslash.svg"}
                            alt="eyeslash"
                            width={20}
                            height={20}
                            className=" pointer-events-none"
                          />
                        ) : (
                          <Image
                            src={"/assets/images/eye.svg"}
                            alt="eye"
                            width={20}
                            height={20}
                            className=" pointer-events-none"
                          />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <Input
                    id="password"
                    label="Confirm Password"
                    name="password"
                    type="text"
                    isRequired
                    variant="bordered"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    label="Date of Birth"
                    placeholder="dd-mm-yyyy"
                    value={post.date}
                    onChange={(e) => setPost({ ...post, date: e.target.value })}
                    isRequired
                    variant="bordered"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center md:rounded-md rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={SignUp}
                >
                  Create Account
                </button>
              </div>
            </form>
          </>
        )}

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link href="/Signin">
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              SignIn Now
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
