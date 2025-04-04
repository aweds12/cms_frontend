import { CourseProps } from "@/app/types/schema";
import React from "react";
import { api } from "@/app/utils/api";

type Props = {
  rows: string[];
  data: CourseProps[];
  fetchCourses: () => void;
};
function CourseTable({ rows, data, fetchCourses }: Props) {
  // const [showCreateModal, setShowCreateModal] = useState(false);

  const deleteCourse = async (row: CourseProps) => {
    const res = await api({
      url: "/courses",
      method: "DELETE",
      body: { _id: row._id },
    });

    if (!!res) {
      fetchCourses();
    }
  };

  return (
    <div className="w-full border border-gray-700 rounded-lg overflow-x-auto">
      <table className="min-w-full w-fit">
        <thead>
          <tr className=" rounded-t-lg bg-gray-900">
            {rows.map((row) => (
              <th key={row} className="text-left px-3 py-1.5">
                {row}
              </th>
            ))}
            <th className="w-20">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cur) => (
            <tr
              key={cur._id}
              className="bg-gray-950 border-b border-gray-800/50 last:border-b-0"
            >
              <td className="px-3 py-1.5">{cur.uid}</td>
              <td className="px-3 py-1.5">{cur.title}</td>
              <td className="px-3 py-1.5">
                <p className="whitespace-nowrap">{cur.description}</p>
              </td>
              <td className="px-3 py-1.5">{cur.teacher?.username}</td>
              <td className="px-3 py-1.5">
                {cur.students.length}{" "}
                {/* <button
                  className="bg-gray-800 p-0.5 rounded hover:bg-gray-900 cursor-pointer size-7"
                  onClick={() => setShowCreateModal(true)}
                >
                  <b>+</b>
                </button>
                {showCreateModal && (
                  <CourseModal closeModal={() => setShowCreateModal(false)} />
                )} */}
              </td>
              <td className="w-20 px-1">
                <button
                  className="bg-gray-800 px-2 py-0.5 rounded w-full hover:bg-gray-900 cursor-pointer"
                  onClick={() => deleteCourse(cur)}
                >
                  Устгах
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;
