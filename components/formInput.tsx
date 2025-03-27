import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function FormInput(props: InputProps) {
  return (
    <input {...props} className="ring-1 ring-gray-700 rounded px-3 py-1 focus:outline-0" />
  );
}
