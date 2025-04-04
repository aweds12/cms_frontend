"use client";

import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { api } from "@/app/utils/api";
import toast from "react-hot-toast";

interface Props {
  role: "admin" | "teacher" | "student" | string;
}

export default function SigninForm({ role }: Props) {
  const [creds, setCreds] = useState({
    uid: "",
    password: "",
  });
  const router = useRouter();

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
      const res: { token: string } = await api(
        {
          url: "/auth/signin",
          method: "POST",
          body: creds,
        },
        true
      );

      if (!!res.token) {
        Cookies.set("token", res.token);
        router.push("/");
        setCreds({
          uid: "",
          password: "",
        });
      } else {
        toast.error("Амжилтгүй");
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
        type="password"
        placeholder="Нууц үг"
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />

      <input
        type="submit"
        value="Нэвтрэх"
        className="bg-blue-500 w-full px-4 py-1.5 rounded hover:bg-blue-600 duration-200"
        disabled={!creds.password || !creds.uid}
      />
    </form>
  );
}
