"use client";

import FormChanger from "@/components/formChanger/page";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Auth() {
  const params = useSearchParams();
  const router = useRouter();

  const auth_type = params.get("role");

  useEffect(() => {
    if (!auth_type) {
      router.push("/auth-select");
    }
  }, []);

  return (
    <div className="size-full h-screen flex gap-4 items-center justify-center bg-gray-800">
      <div className="w-fit">
        <Link
          href={"/auth-select"}
          className="flex gap-2 items-center hover:underline mb-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Буцах
        </Link>
        <p className="text-2xl mb-4">
          <span className="capitalize">{auth_type}</span> authorization
        </p>
        <FormChanger />
      </div>
    </div>
  );
}
