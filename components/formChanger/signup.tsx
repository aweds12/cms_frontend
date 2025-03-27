"use client";

import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useSearchParams } from "next/navigation";

export default function SignupForm({ regDone }: { regDone: () => void }) {
  const params = useSearchParams();
  const [creds, setCreds] = useState({
    uid: "",
    email: "",
    username: "",
    password: "",
    role: params.get("role"),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiurl = `${process.env.NEXT_PUBLIC_API_KEY}/auth/signup`;
    try {
      const res = await fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });

      if (res.status == 201) {
        setCreds({
          uid: "",
          email: "",
          username: "",
          password: "",
          role: params.get("role"),
        });
        regDone();
      }
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
        type="text"
        placeholder={
          params.get("role") == "teacher" ? "Багшийн" : "Сурагчийн код"
        }
        onChange={(e) => setCreds({ ...creds, uid: e.target.value })}
      />
      <FormInput
        type="text"
        placeholder="И мэйл"
        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
      />
      <FormInput
        type="username"
        placeholder="Нэр"
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
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
        disabled={
          !creds.email || !creds.password || !creds.username || !creds.uid
        }
      />
    </form>
  );
}
