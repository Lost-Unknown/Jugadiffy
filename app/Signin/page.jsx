"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Input} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signin() {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders ] = useState(null);
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await signIn("credentials",{
      email:email.toLowerCase(),
      password:password,
      redirect:false
    })
  };  

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight blue_gradient">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        {session?.user ? (
          router.push("/")
        ) : (
          <>
            
              {providers &&
                Object.values(providers).map((provider) => {
                  if(provider.id ==="google"){
                  return(
                  <button
                    onClick={()=>signIn(provider.id)}
                    className="p-2 flex gap-2 flex-center border border-zinc-700  w-full text-center md:rounded-md rounded-lg"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      width={25}
                      height={25}
                    />
                    <p className="text-zinc-700">Sign in with Google</p>
                  </button>
                )}})}
                <form className="space-y-6 mt-4" action="#" method="POST">
              <div className="flex w-full flex-row justify-center items-center">
                <div className="flex w-2/5 border-b-2 border-zinc-700"></div>
                <p className="text-zinc-700 w-1/5 text-center">or</p>
                <div className="flex w-2/5 border-b-2 border-zinc-700"></div>
              </div>
              <div>
                <div className="mt-2">
                  <Input
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    variant="bordered"
                    autoComplete="email"
                    required
                    />
                </div>
              </div>

              <div>
                <div className="flex items-end justify-end">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                <Input
                  id="password"
                    label="Password"
                    name="password"
                    variant="bordered"
                    isRequired
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
                <button
                  type="submit"
                  className="flex w-full justify-center md:rounded-md rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={
                    handleSignIn
                  }
                >
                  Sign in
                </button>
              </div>
            </form>
          </>
        )}

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link href="/Signup">
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Signup Now
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
