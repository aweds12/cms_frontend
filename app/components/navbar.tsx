"use client";

import useUser from "@/app/hooks/useUser";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import LogoutButton from "./logout";

function Navbar() {
  const [user] = useUser();
  const pathname = usePathname();
  const menuItems = [
    { path: "/dashboard", label: "Хянах самбар" },
    { path: "/booking", label: "Төлбөр" },
  ];

  return (
    <div className="flex flex-col w-60 border-r border-gray-800">
      <div className="p-4 border-b border-gray-800">
        <p className="text-xl">CMS</p>
      </div>

      <div className="flex flex-col gap-2 p-2 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.path}
            className={`rounded-md border px-3 py-1 text-left focus:ring-1 duration-200 ${
              pathname.startsWith("path") ? "border-white" : "border-gray-800"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 justify-between p-4 border-t border-gray-800">
        {user ? (
          <Suspense fallback="-">
            <div className="overflow-hidden flex-1">
              <div className="flex gap-1">
                <p className="capitalize truncate">
                  {user?.username}
                  {user?.username}
                  {user?.username}
                </p>
                <p>({user?.uid})</p>
              </div>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </Suspense>
        ) : (
          <>-</>
        )}
        <LogoutButton />
      </div>
    </div>
  );
}

export default Navbar;
