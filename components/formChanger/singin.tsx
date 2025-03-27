import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://cms-backend-one.vercel.app/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("fire_token")}`,
          },
          body: JSON.stringify({
            email: creds.email,
            password: creds.password,
          }),
        }
      );

      if (res.status == 200) {
        console.log(res.formData);

        router.push("/");
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
        type="email"
        placeholder="И Мэйл"
        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
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
        disabled={!creds.password || !creds.email}
      />
    </form>
  );
}
