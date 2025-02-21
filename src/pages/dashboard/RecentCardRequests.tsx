import React from "react";

const RecentCardRequests = () => {
  const recentCardRequest = [
    {
      id: "1",
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Ready",
    },
    {
      id: "2",
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "In Progress",
    },
    {
      id: "3",
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "Acknowledged",
    },
    {
      id: "4",
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Pending",
    },
  ];

  // Function to return appropriate styles for status badges
  const getStatusStyles = (status:string) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Acknowledged":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Card Requests</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left text-base">
              <th className="px-4 py-3">Branch</th>
              <th className="px-4 py-3">Card Type</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentCardRequest.map((item) => (
              <tr key={item.id} className="border-b last:border-0 text-gray-900">
                <td className="px-4 py-3">{item.branch}</td>
                <td className="px-4 py-3">{item.cardType}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusStyles(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-blue-600 font-semibold cursor-pointer text-base">
                    View
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCardRequests;
