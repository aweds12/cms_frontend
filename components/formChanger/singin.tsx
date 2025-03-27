import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useRouter, useSearchParams } from "next/navigation";

export default function SigninForm() {
  const params = useSearchParams();
  const [creds, setCreds] = useState({
    uid: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // `https://cms-backend-one.vercel.app/auth/signin`
      const res: { token: string } = await fetch(
        "http://localhost:8080/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
          body: JSON.stringify({
            uid: creds.uid,
            password: creds.password,
          }),
        }
      ).then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      });

      if (!!res.token) {
        router.push("/");
        setCreds({
          uid: "",
          password: "",
        });
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
          params.get("role") == "teacher" ? "Багшийн код" : "Сурагчийн код"
        }
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
