"use client";

import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function AdminSignupForm({ regDone }: { regDone: () => void }) {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        creds.email,
        creds.password
      );

      setCreds({
        email: "",
        password: "",
      });
      regDone();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-center p-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <FormInput
        type="email"
        placeholder="И мэйл"
        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
      />
      <FormInput
        type="password"
        placeholder="Нууц үг"
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />

      <input
        type="submit"
        value="Бүртгүүлэх"
        className="bg-blue-500 w-full px-4 py-1.5 rounded hover:bg-blue-600 duration-200"
        disabled={!creds.password || !creds.email}
      />
    </form>
  );
}
