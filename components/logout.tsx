"use client";

import React from "react";

export default function LogoutButton() {
  const logout = () => {
    // localStorage.clear();
    // location.href = "/";
    console.log("logout");
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-50 px-4 py-1.5 rounded bg-gray-900 cursor-pointer"
      onClick={() => logout}
    >
      Logout
    </button>
  );
}
