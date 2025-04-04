"use client";

import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { UserProps } from "../types/schema";

const useStudents = () => {
  const [students, setStudents] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const res: UserProps[] = await api({
          url: "/users/students",
          method: "GET",
        });

        setStudents(res ?? []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStudents();
  }, []);

  return students;
};

export default useStudents;
