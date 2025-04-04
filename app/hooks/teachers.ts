"use client";

import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { UserProps } from "../types/schema";

const useTeachers = () => {
  const [teachers, setTeachers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const res: UserProps[] = await api({
          url: "/users/teachers",
          method: "GET",
        });

        setTeachers(res ?? []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTeachers();
  }, []);

  return teachers;
};

export default useTeachers;
