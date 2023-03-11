"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function LoginPage() {
  return (
    <div className="">
      <div className="flex flex-col space-y-5 items-center text-center justify-center  h-screen bg-gray-700 pb-20 ">
        <Image
          src="https://links.papareact.com/jne"
          width={200}
          height={100}
          alt="logo"
        />
        <button
          type="button"
          onClick={() => signIn("google")}
          className="uppercase text-white font-bold text-3xl animate-pulse border p-2"
        >
          Login to Messenger
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
