

"use client"

import SignInWithGoogle from "/app/components/SignInWithGoogle";
import { useAuth } from "/contexts/AuthContext";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function LoginPage() {
  const {user} = useAuth();
  const router = useRouter();

  useEffect(()=>{
    if(user){
      router.push("/dashboard")
    }
  },[user])
  
  return (
    <main className="w-full  flex justify-center bg-gray-300 md:p-24 p-1  min-h-screen items-center">
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 p-20 md:p-10 bg-white rounded-xl  md:min-w-[450px]">
          <div className="flex justify-center mb-3">
            <img src="/logo.webp" className="size-12" alt="" />
          </div>
          <h1 className="font-bold text-center  text-xl">Login With Email</h1>
          <form className="flex flex-col gap-3">
            <input
              className="px-3 py-2 rounded-xl border w-full focus:outline-none"
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Email"
            />
            <input
              className="px-3 py-2 rounded-xl border w-full focus:outline-none"
              type="password"
              name="user-password"
              id="user-password"
              placeholder="Enter your password"
            />
            <Button color="success" className="w-full text-white">
              Login
            </Button>
          </form>
          <div className="flex items-center justify-between">
            <Link
              href="/forget-password"
              className="text-green-500 font-semibold text-sm"
            >
              <button>New ? Sign Up</button>
            </Link>
            <Link
              href="/forget-password"
              className="text-green-500 font-semibold text-sm"
            >
              <button>Forget Password?</button>
            </Link>
          </div>
          <hr />
          <SignInWithGoogle/>
        </div>
      </section>
    </main>
  );
}


