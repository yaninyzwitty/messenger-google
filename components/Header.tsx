"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import LogoutButton from "./Logout";

function Header() {
  const { data: session } = useSession();
  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-slate-800 flex justify-between items-center p-10 shadow-sm">
        {/* <div className="flex items-center "> */}
        <div className="mx-0 md:mx-2 object-contain h-14 w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w:20 ">
          <Image
            className="rounded-full"
            src={"https://links.papareact.com/jne"}
            width={50}
            height={10}
            alt=""
          />
        </div>
        <div className="mx-2">
          <h3 className="text-white tracking-widest">Logged in as: </h3>
          <h2 className="font-bold text-white mt-2">{session?.user?.name}</h2>
        </div>

        <div className="flex space-x-5 items-center mx-5">
          <LogoutButton />

          <Image
            className="rounded-full mx-2 h-10 w-10 xl:h-14 xl:w-14 object-cover 2xl:h-16 2xl:w-16 hidden md:inline-flex"
            src={
              "https://images.unsplash.com/photo-1676824438505-cb0927790b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            }
            width={100}
            height={100}
            alt=""
          />
        </div>
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 bg-slate-800 flex justify-center items-center p-10 shadow-sm">
      <div className="flex items-center flex-col space-x-5 ">
        <div className="flex space-x-2 items-center">
          <Image
            className="mx-2 w-14 h-14 md:w-16 md:h-16 rounded-full cursor-pointer object-contain"
            src={"https://links.papareact.com/jne"}
            width={50}
            height={10}
            alt=""
          />
          <p className="text-blue-400 font-semibold">
            Welcome to the MESSENGER
          </p>
        </div>
        <button
          className="bg-blue-400 hover:bg-blue-600 px-3 py-4 rounded-lg font-bold text-white uppercase mt-10"
          onClick={() => signIn("google")}
        >
          sign in to MESSENGER
        </button>
      </div>
    </header>
  );
}

export default Header;
