"use client";

import LogoutButton from "@/components/logout";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminPage() {
  const router = useRouter();

  if (!localStorage.getItem("fire_token")) {
    router.push("/admin/auth?role=admin");
  }

  const fire_token = localStorage.getItem("fire_token");
  return (
    <div>
      this is admin page
      <p>
        <b>firebase_token</b>: {fire_token}
      </p>
      
      <LogoutButton />
    </div>
  );
}
