import { UserProps } from "@/app/types/schema";
import React from "react";

type Props = {
  rows: string[];
  data: UserProps[];
};

function UserTable({ rows, data }: Props) {
  return (
    <div className="w-full border border-gray-700 rounded-lg overflow-hidden">
      <table className="table-fixed w-full">
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
              <td className="px-3 py-1.5">{cur.username}</td>
              <td className="px-3 py-1.5">{cur.email}</td>
              <td className="w-20 px-1">
                <button className="bg-gray-800 px-2 py-0.5 rounded w-full hover:bg-gray-900 cursor-pointer">Устгах</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
