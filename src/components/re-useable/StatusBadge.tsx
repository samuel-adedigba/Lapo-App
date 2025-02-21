import React from "react";

export type Status = "Pending" | "In Progress" | "Ready" | "Dispatched" | "Acknowledged";
interface StatusBadgeProps {
  status: Status;
}

const statusStyles: Record<Status, string> = {
  Pending: "bg-gray-200 text-gray-700",
  "In Progress": "bg-orange-200 text-orange-700",
  Ready: "bg-green-200 text-green-700",
  Dispatched: "bg-purple-200 text-purple-700",
  Acknowledged: "bg-blue-200 text-blue-700",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const badgeStyle = statusStyles[status] || "bg-gray-200 text-gray-700";
  return <span className={`px-4 py-2 rounded-full text-base font-medium ${badgeStyle}`}>{status}</span>;
};

export default StatusBadge;
