"use client";

import FormChanger from "@/app/components/formChanger/page";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import useToken from "@/app/hooks/useToken";

export default function AuthBody() {
  const params = useSearchParams();
  const router = useRouter();
  const [token] = useToken();

  const auth_type = params.get("role");

  useEffect(() => {
    if (!auth_type || !!token) {
      router.push("/");
    }
  }, [auth_type, token, router]);

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
        <Suspense>
          <FormChanger />
        </Suspense>
      </div>
    </div>
  );
}
