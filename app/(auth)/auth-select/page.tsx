"use client";

import AuthCard from "@/components/authCard";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

export default function AuthSelect({}: Props) {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!!localStorage.getItem("fire_token")) {
      router.push("/");
    }
    setLoading(false);
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex bg-gray-800 min-h-screen items-center justify-center p-20 overflow-y-auto">
      <div className="max-h-full max-w-full grid sm:grid-cols-3 sm:grid-rows-1 grid-rows-3 gap-10">
        <div className="flex justify-center w-full">
          <AuthCard
            type="admin"
            title="Админ"
            onClick={() => router.push("/admin/auth?role=admin")}
          />
        </div>
        <div className="flex justify-center w-full">
          <AuthCard
            type="teacher"
            title="Багш"
            onClick={() => router.push("/auth?role=teacher")}
          />
        </div>
        <div className="flex justify-center w-full">
          <AuthCard
            type="student"
            title="Сурагч"
            onClick={() => router.push("/auth?role=student")}
          />
        </div>
      </div>
    </div>
  );
}
