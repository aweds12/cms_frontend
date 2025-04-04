import React, { FormEvent, useState } from "react";
import FormInput from "./formInput";
import { CourseProps } from "@/app/types/schema";
import { api } from "@/app/utils/api";
import toast from "react-hot-toast";
import useTeachers from "@/app/hooks/teachers";

type Props = {
  closeModal: () => void;
  fetchCourses: () => void;
};

function CourseModal({ closeModal, fetchCourses }: Props) {
  const [creds, setCreds] = useState<CourseProps>({
    uid: "",
    title: "",
    description: "",
    teacher: undefined,
    students: [],
  });
  const teachers = useTeachers();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res: CourseProps = await api({
        url: "/courses",
        method: "POST",
        body: creds,
      });

      if (!!res) {
        toast.success("Хичээл амжилттай нэмэгдлээ");
        fetchCourses();
        close();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const close = () => {
    setCreds({
      uid: "",
      title: "",
      description: "",
      teacher: undefined,
      students: [],
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 size-full  flex items-center justify-center">
      <div
        className="bg-white/25 size-full absolute inset-0"
        onClick={close}
      ></div>
      <form
        className="relative w-fit max-w-full z-50 max-h-[70vh] overflow-hidden flex flex-col bg-black rounded-lg border border-gray-800"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center border-b border-gray-800 p-4">
          <p className="text-xl">Курс нэмэх</p>
        </div>

        <div className="flex-1 flex flex-col p-4 gap-4">
          <FormInput
            type="text"
            placeholder="код"
            className="w-full"
            onChange={(e) => setCreds({ ...creds, uid: e.target.value })}
          />
          <FormInput
            type="text"
            placeholder="Нэр"
            className="w-full"
            onChange={(e) => setCreds({ ...creds, title: e.target.value })}
          />
          <FormInput
            type="text"
            placeholder="Тайлбар"
            className="w-full"
            onChange={(e) =>
              setCreds({ ...creds, description: e.target.value })
            }
          />
          <select
            className="ring-1 ring-gray-700 rounded px-3 py-1.5 capitalize focus:outline-0"
            onChange={(e) =>
              setCreds({ ...creds, teacher: JSON.parse(e.target.value) })
            }
          >
            <option
              value={undefined}
              className="px-3 py-1 cursor-pointer hover:bg-gray-800 text-black"
            >
              Сонгох
            </option>
            {teachers.map((t) => (
              <option
                key={t._id}
                value={JSON.stringify(t)}
                className="px-3 py-1 cursor-pointer hover:bg-gray-800 text-black"
              >
                {t.uid}: {t.username}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex items-center gap-4 justify-end p-4 border-t border-gray-800">
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={close}
          >
            Хаах
          </button>
          <input
            type="submit"
            value="Нэмэх"
            className="px-4 py-2 bg-blue-500 rounded-md active:hover:bg-blue-600 disabled:grayscale"
            disabled={
              !creds.uid || !creds.title || !creds.description || !creds.teacher
            }
          />
        </div>
      </form>
    </div>
  );
}

export default CourseModal;
