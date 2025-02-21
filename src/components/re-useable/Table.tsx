import React from "react";

interface TableProps {
  columns: { key: string; label: string }[];
  data: any[];
  renderAction?: (item: any) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ columns, data, renderAction }) => {
  return (
    <div className="p-4 w-full rounded-2xl shadow-md bg-white">
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-max border-collapse">
          <thead>
            <tr className="bg-[#EAECF0] text-[#475467] text-sm md:text-base font-medium">
              {columns.map((col) => (
                <th key={col.key} className="px-4 md:px-6 py-3 text-left whitespace-nowrap">
                  {col.label}
                </th>
              ))}
              {renderAction && <th className="px-4 md:px-6 py-3 text-center">Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t bg-white border-gray-200 hover:bg-gray-100">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 md:px-6 py-4 border-x text-sm md:text-base text-[#475467] whitespace-nowrap">
                    {col.key === "status" ? (
                      <span className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full ${getStatusStyles(item[col.key])}`}>
                        {item[col.key]}
                      </span>
                    ) : (
                      item[col.key]
                    )}
                  </td>
                ))}
                {renderAction && (
                  <td className="px-4 md:px-6 py-4 text-center">
                    <div className="flex justify-center items-center">{renderAction(item)}</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Ready":
      return "bg-green-100 text-green-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-700";
    case "Pending":
      return "bg-gray-100 text-gray-700";
    case "Acknowledged":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export default Table;
