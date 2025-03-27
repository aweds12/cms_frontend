import React, { FormEvent, useState } from "react";
import FormInput from "../formInput";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function AdminSigninForm() {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res: any = await signInWithEmailAndPassword(
        creds.email,
        creds.password
      );
      console.log(res);
      setCreds({
        email: "",
        password: "",
      });

      if (res && res.user.accessToken) {
        localStorage.setItem("admin_token", res?.user.accessToken);
        router.push("/admin");
      }
    } catch (error) {
      console.error(error);
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
        value="Нэвтрэх"
        className="bg-blue-500 w-full px-4 py-1.5 rounded hover:bg-blue-600 duration-200"
        disabled={!creds.password || !creds.email}
      />
    </form>
  );
}
