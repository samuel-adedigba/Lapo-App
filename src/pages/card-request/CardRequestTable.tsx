import React from "react";
import Table from "../../components/re-useable/Table";
import { useNavigate } from "react-router-dom";

const recentCardRequests = [
  { id: 1, branch: "Corporate", initiator: "RootUser", quantity: 10, batch: "847264905", dateRequested: "11/14/2024 10:27:43", status: "Ready" },
  { id: 2, branch: "Corporate", initiator: "RootUser", quantity: 10, batch: "847264905", dateRequested: "11/14/2024 10:27:43", status: "Ready" },
  { id: 3, branch: "Corporate", initiator: "RootUser", quantity: 10, batch: "847264905", dateRequested: "11/14/2024 10:27:43", status: "In Progress" },
  { id: 4, branch: "Corporate", initiator: "RootUser", quantity: 10, batch: "847264905", dateRequested: "11/14/2024 10:27:43", status: "Pending" },
  { id: 5, branch: "Corporate", initiator: "RootUser", quantity: 10, batch: "847264905", dateRequested: "11/14/2024 10:27:43", status: "Acknowledged" },
];

const RecentCardRequests: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="overflow-x-auto">
    <Table
      columns={[
        { key: "branch", label: "Branch" },
        { key: "initiator", label: "Initiator" },
        { key: "quantity", label: "Quantity" },
        { key: "batch", label: "Batch" },
        { key: "dateRequested", label: "Date Requested" },
        { key: "status", label: "Status" },
      ]}
      data={recentCardRequests}
      renderAction={(item) => (
        <span className="text-blue-600 font-semibold cursor-pointer text-sm items-center justify-center"  onClick={()=> navigate(`/card-request/${item.id}`)} >View</span>
      )}
    />
    </div>
  );
};

export default RecentCardRequests;
