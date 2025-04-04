"use client";

import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { CourseProps } from "../types/schema";

const useCourses = () => {
  const [courses, setCourses] = useState<CourseProps[]>([]);

  async function fetchCourses() {
    try {
      const res: CourseProps[] = await api({
        url: "/courses",
        method: "GET",
      });

      setCourses(res ?? []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, fetchCourses };
};

export default useCourses;
