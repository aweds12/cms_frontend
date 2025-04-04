import React from "react";

type Props = {
  type: "admin" | "teacher" | "student";
  title: string;
  onClick: () => void;
};

function AuthCard({ type, title, onClick }: Props) {
  const AdminIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        className="size-full group-hover:text-blue-500 duration-200"
      >
        {/* Icon from Clarity by VMware - https://github.com/vmware/clarity-assets/blob/master/LICENSE */}
        <path
          fill="currentColor"
          d="M14.68 14.81a6.76 6.76 0 1 1 6.76-6.75a6.77 6.77 0 0 1-6.76 6.75m0-11.51a4.76 4.76 0 1 0 4.76 4.76a4.76 4.76 0 0 0-4.76-4.76"
          className="clr-i-outline clr-i-outline-path-1"
        ></path>
        <path
          fill="currentColor"
          d="M16.42 31.68A2.14 2.14 0 0 1 15.8 30H4v-5.78a14.8 14.8 0 0 1 11.09-4.68h.72a2.2 2.2 0 0 1 .62-1.85l.12-.11c-.47 0-1-.06-1.46-.06A16.47 16.47 0 0 0 2.2 23.26a1 1 0 0 0-.2.6V30a2 2 0 0 0 2 2h12.7Z"
          className="clr-i-outline clr-i-outline-path-2"
        ></path>
        <path
          fill="currentColor"
          d="M26.87 16.29a.4.4 0 0 1 .15 0a.4.4 0 0 0-.15 0"
          className="clr-i-outline clr-i-outline-path-3"
        ></path>
        <path
          fill="currentColor"
          d="m33.68 23.32l-2-.61a7.2 7.2 0 0 0-.58-1.41l1-1.86A.38.38 0 0 0 32 19l-1.45-1.45a.36.36 0 0 0-.44-.07l-1.84 1a7 7 0 0 0-1.43-.61l-.61-2a.36.36 0 0 0-.36-.24h-2.05a.36.36 0 0 0-.35.26l-.61 2a7 7 0 0 0-1.44.6l-1.82-1a.35.35 0 0 0-.43.07L17.69 19a.38.38 0 0 0-.06.44l1 1.82a6.8 6.8 0 0 0-.63 1.43l-2 .6a.36.36 0 0 0-.26.35v2.05A.35.35 0 0 0 16 26l2 .61a7 7 0 0 0 .6 1.41l-1 1.91a.36.36 0 0 0 .06.43l1.45 1.45a.38.38 0 0 0 .44.07l1.87-1a7 7 0 0 0 1.4.57l.6 2a.38.38 0 0 0 .35.26h2.05a.37.37 0 0 0 .35-.26l.61-2.05a7 7 0 0 0 1.38-.57l1.89 1a.36.36 0 0 0 .43-.07L32 30.4a.35.35 0 0 0 0-.4l-1-1.88a7 7 0 0 0 .58-1.39l2-.61a.36.36 0 0 0 .26-.35v-2.1a.36.36 0 0 0-.16-.35M24.85 28a3.34 3.34 0 1 1 3.33-3.33A3.34 3.34 0 0 1 24.85 28"
          className="clr-i-outline clr-i-outline-path-4"
        ></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    );
  };
  const TeacherIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-full group-hover:text-blue-500 duration-200"
      >
        {/* Icon from Huge Icons by Hugeicons - undefined */}
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          color="currentColor"
        >
          <path d="M2 2h14c1.886 0 2.828 0 3.414.586S20 4.114 20 6v6c0 1.886 0 2.828-.586 3.414S17.886 16 16 16H9m1-9.5h6M2 17v-4c0-.943 0-1.414.293-1.707S3.057 11 4 11h2m-4 6h4m-4 0v5m4-5v-6m0 6v5m0-11h6"></path>
          <path d="M6 6.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
        </g>
      </svg>
    );
  };
  const StudentIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="size-full group-hover:text-blue-500 duration-200"
      >
        {/* Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE */}
        <path
          fill="currentColor"
          d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"
        ></path>
      </svg>
    );
  };

  const CardIcon = () => {
    switch (type) {
      case "admin":
        return <AdminIcon />;
      case "teacher":
        return <TeacherIcon />;
      case "student":
        return <StudentIcon />;
      default:
        return <StudentIcon />;
    }
  };
  return (
    <div
      className="size-40 p-10 aspect-square rounded-xl bg-gray-900 ring-1 ring-gray-700 group hover:scale-105 duration-200 hover:shadow-2xl shadow-blue-500/25 cursor-pointer"
      onClick={onClick}
    >
      <CardIcon />
      <p className="text-center w-full text-lg group-hover:text-blue-500 duration-200 -mb-6 flex items-center justify-center gap-2">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 group-hover:translate-x-2 duration-200 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </p>
    </div>
  );
}

export default AuthCard;
