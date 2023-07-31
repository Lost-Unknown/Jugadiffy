"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

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
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-300">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        {session?.user ? (
          router.push("/")
        ) : (
          <>
            <form className="space-y-6" action="#" method="">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    onClick={()=>signIn(provider.id)}
                    className="p-2 flex gap-2 flex-center border border-zinc-300  w-full text-center md:rounded-md rounded-lg"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      width={25}
                      height={25}
                    />
                    <p className="text-zinc-300">Sign in with Googel</p>
                  </button>
                ))}
              <div className="flex w-full flex-row justify-center items-center">
                <div className="flex w-2/5 border-b-2 border-zinc-300"></div>
                <p className="text-zinc-300 w-1/5 text-center">or</p>
                <div className="flex w-2/5 border-b-2 border-zinc-300"></div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-zinc-400"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="block w-full md:rounded-md rounded-xl border-0 py-1.5 text-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-600 pl-1 "
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-zinc-400"
                >
                  Your Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full md:rounded-md rounded-xl border-0 py-1.5 text-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-600 pl-1 "
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-zinc-400"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full md:rounded-md rounded-xl border-0 py-1.5 text-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-600 pl-1 "
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-zinc-400"
                  >
                    Comfirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    required
                    className="block w-full md:rounded-md rounded-xl border-0 py-1.5 text-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-600 pl-1 "
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-zinc-400"
                  >
                    Date Of Birth
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="date"
                    required
                    className="block w-full md:rounded-md rounded-xl border-0 py-1.5 text-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholde:text-zinc-200 :ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-600 pl-1 "
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center md:rounded-md rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
