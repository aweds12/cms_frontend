"use client";

import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { UserProps } from "../types/schema";

const useUsers = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res: UserProps[] = await api({
          url: "/users",
          method: "GET",
        });

        setUsers(res ?? []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return users;
};

export default useUsers;
