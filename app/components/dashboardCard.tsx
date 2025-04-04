import React from "react";

type Props = {
  name: string;
  value: number;
};

function DashboardCard({ name, value }: Props) {
  return (
    <div className="bg-gray-800 px-3 py-2 rounded-md border border-gray-700">
      <p>{name}</p>
      <p className="font-medium text-lg">{value}</p>
    </div>
  );
}

export default DashboardCard;
