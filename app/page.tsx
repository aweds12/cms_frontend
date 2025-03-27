"use client";

import Loading from "@/components/loading";
import LogoutButton from "@/components/logout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("fire_token")) {
      router.push("/auth-select");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        velit possimus sequi repellendus eum quas voluptates repudiandae dolorem
        quos consequuntur in omnis natus, voluptatum dolores amet atque quam
        libero?
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
      <LogoutButton />
    </div>
  );
}
