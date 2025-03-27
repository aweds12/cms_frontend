"use client";

import LogoutButton from "@/components/logout";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminPage() {
  const router = useRouter();

  if (!localStorage.getItem("admin_token")) {
    router.push("/admin/auth?role=admin");
  }

  const admin_token = localStorage.getItem("admin_token");
  return (
    <div>
      this is admin page
      <p>
        <b>firebase_token</b>: {admin_token}
      </p>
      
      <LogoutButton />
    </div>
  );
}
