import React, { useState } from 'react';
import Table from '../../components/re-useable/Table';
import { Icon } from '../../assets/Icon';
import AddFeeModal from './AddFeeModal';

const FeesForm = () => {
  const cardList = [[]]; 
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (values: Record<string, any>) => {
    console.log("Submitted Data:", values);
  };
  return (
    <div className="overflow-x-auto mb-14 mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Fees</h2>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-3 rounded-md mb-4 hover:bg-blue-700 transition"
      >
        <Icon name="plus" size={4} />
        Add Fee
      </button>
      <Table
        columns={[
          { key: "name", label: "Name" },
          { key: "value", label: "Value" },
          { key: "frequency", label: "Frequency" },
          { key: "currency", label: "Currency" },
          { key: "time", label: "Time" },
          { key: "account_pad", label: "Account Pad" },
          { key: "account", label: "Account" },
        ]}
        data={cardList}
      />
      <AddFeeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit}  className="max-w-md sm:max-w-lg md:max-w-xl w-full" />

    </div>
  );
};

export default FeesForm;
