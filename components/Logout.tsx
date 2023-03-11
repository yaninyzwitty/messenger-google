import { signOut } from "next-auth/react";
import React from "react";

function LogoutButton() {
  return (
    <button
      className="px-2 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white uppercase"
      onClick={() => signOut()}
    >
      SignOUT
    </button>
  );
}

export default LogoutButton;
