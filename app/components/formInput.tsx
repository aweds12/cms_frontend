import React, { InputHTMLAttributes } from "react";

export default function FormInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="ring-1 ring-gray-700 rounded px-3 py-1 focus:outline-0"
    />
  );
}
