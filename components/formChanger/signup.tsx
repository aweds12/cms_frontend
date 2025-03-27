import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useSearchParams } from "next/navigation";

export default function SignupForm() {
  const params = useSearchParams();
  const [creds, setCreds] = useState({
    email: "",
    username: "",
    password: "",
    role: params.get("role"),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://cms-backend-one.vercel.app/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("fire_token")}`,
          },
          body: JSON.stringify({
            email: creds.email,
            username: creds.username,
            password: creds.password,
            role: creds.role,
          }),
        }
      );
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
        disabled={!creds.email || !creds.password || !creds.username}
      />
    </form>
  );
}
