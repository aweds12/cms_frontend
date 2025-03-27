"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-50 px-4 py-1.5 rounded bg-gray-900 cursor-pointer"
      onClick={() => handleLogout()}
    >
      Logout
    </button>
  );
}
