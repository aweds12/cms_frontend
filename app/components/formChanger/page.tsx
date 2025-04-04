"use client";

import React, { Suspense, useState } from "react";
import SigninForm from "./signin";
import SignupForm from "./signup";
import { useSearchParams } from "next/navigation";

export default function FormChanger() {
  const [signIn, isSignIn] = useState(true);
  const params = useSearchParams();

  const role = params.get("role");

  if (!role) {
    return;
  }

  return (
    <div className=" rounded-xl overflow-hidden">
      <div className="border-b border-gray-700 grid grid-cols-2">
        <button
          className={`px-4 py-1.5 cursor-pointer duration-200 ${
            signIn ? "bg-gray-900" : "bg-gray-900 opacity-50"
          }`}
          onClick={() => isSignIn(true)}
        >
          Нэвтрэх
        </button>
        <button
          className={`px-4 py-1.5 cursor-pointer duration-200 ${
            signIn ? "bg-gray-900 opacity-50" : "bg-gray-900"
          }`}
          onClick={() => isSignIn(false)}
        >
          Бүртгүүлэх
        </button>
      </div>

      <div className="bg-gray-900">
        {signIn ? (
          <Suspense>
            <SigninForm role={role} />
          </Suspense>
        ) : (
          <Suspense>
            <SignupForm role={role} regDone={() => isSignIn(true)} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
