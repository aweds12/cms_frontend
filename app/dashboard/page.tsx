"use client";

import React, { useState } from "react";
import useUsers from "../hooks/users";
import useTeachers from "../hooks/teachers";
import useStudents from "../hooks/students";
import UserTable from "@/app/components/userTable";
import DashboardCard from "@/app/components/dashboardCard";
import useCourses from "../hooks/courses";
import CourseTable from "@/app/components/courseTable";
import CourseModal from "@/app/components/courseModal";

export default function Dashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const users = useUsers();
  const teachers = useTeachers();
  const students = useStudents();
  const { courses, fetchCourses } = useCourses();

  const teachersTableRows = ["Багшын код", "Нэр", "Мэйл хаяг"];
  const studentsTableRows = ["Сурагчын код", "Нэр", "Мэйл хаяг"];
  const coursesTableRows = [
    "Хичээлийн код",
    "Нэр",
    "Тайлбар",
    "Багш",
    "Сурагчид",
  ];
  const cardsData = [
    {
      id: 1,
      name: "Нийт хэрэглэгчид",
      value: users.length ?? 0,
    },
    {
      id: 2,
      name: "Нийт багш нар",
      value: teachers.length ?? 0,
    },
    {
      id: 3,
      name: "Нийт сурагчд",
      value: students.length ?? 0,
    },
    {
      id: 4,
      name: "Нийт курс",
      value: courses.length ?? 0,
    },
  ];

  return (
    <div className="p-4 space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
          <DashboardCard key={card.id} name={card.name} value={card.value} />
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-xl">
          Курс{" "}
          <button
            className="bg-gray-800 p-0.5 rounded hover:bg-gray-900 cursor-pointer size-7"
            onClick={() => setShowCreateModal(true)}
          >
            <b>+</b>
          </button>
        </p>

        {showCreateModal && (
          <CourseModal
            closeModal={() => setShowCreateModal(false)}
            fetchCourses={fetchCourses}
          />
        )}
        <CourseTable
          rows={coursesTableRows}
          data={courses}
          fetchCourses={fetchCourses}
        />
      </div>
      <div className="space-y-2">
        <p className="text-xl">Багш нар</p>
        <UserTable rows={teachersTableRows} data={teachers} />
      </div>
      <div className="space-y-2">
        <p className="text-xl">Сурагчид</p>
        <UserTable rows={studentsTableRows} data={students} />
      </div>
    </div>
  );
}
