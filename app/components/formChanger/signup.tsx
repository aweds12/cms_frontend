"use client";

import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import toast from "react-hot-toast";
import { api } from "@/app/utils/api";
import { UserProps } from "@/app/types/schema";

interface Props {
  role: "admin" | "teacher" | "student" | string;
  regDone: () => void;
}

export default function SignupForm({ role, regDone }: Props) {
  const [creds, setCreds] = useState({
    uid: "",
    email: "",
    username: "",
    password: "",
    role: role,
  });

  const getRoleName = () => {
    switch (role) {
      case "admin":
        return "Админы код";
      case "teacher":
        return "Багшийн код";
      case "student":
        return "Сурагчын код";
      default:
        return "Админы код";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res: { message: string; result: UserProps } = await api(
        {
          url: "/auth/signup",
          method: "POST",
          body: creds,
        },
        true
      );

      if (!!res.result) {
        toast.success("Амжилттай бүртгүүллээ");
        setCreds({
          uid: "",
          email: "",
          username: "",
          password: "",
          role: role,
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
        placeholder={getRoleName()}
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
