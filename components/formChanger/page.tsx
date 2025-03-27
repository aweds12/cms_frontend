import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import SigninForm from "./singin";
import SignupForm from "./signup";
import { useSearchParams } from "next/navigation";
import AdminSigninForm from "./adminSignin";
import AdminSignupForm from "./adminSignup";

export default function FormChanger() {
  const [signIn, isSignIn] = useState(false);

  const params = useSearchParams();

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

      {params.get("role") == "admin" ? (
        <div className="bg-gray-900">
          {signIn ? (
            <AdminSigninForm />
          ) : (
            <AdminSignupForm regDone={() => isSignIn(true)} />
          )}
        </div>
      ) : (
        <div className="bg-gray-900">
          {signIn ? (
            <SigninForm />
          ) : (
            <SignupForm regDone={() => isSignIn(true)} />
          )}
        </div>
      )}
    </div>
  );
}
