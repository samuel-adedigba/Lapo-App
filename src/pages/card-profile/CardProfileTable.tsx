import React from 'react'
import Table from '../../components/re-useable/Table';
import { Icon } from '../../assets/Icon';

const CardProfileTable = () => {
    const cardList = [
        { id: 1, cardName: "Verve-1", curency: "NGN", expiration: "40 months", bin: 50611234, dateCreated: "11/14/2024 10:27:43" },
        { id: 2, cardName: "Verve-1", curency: "NGN", expiration: "40 months", bin: 50611234, dateCreated: "11/14/2024 10:27:43" },
        { id: 3, cardName: "Verve-1", curency: "NGN", expiration: "40 months", bin: 50611234, dateCreated: "11/14/2024 10:27:43" },
      ];
    return (
      <div className="overflow-x-auto">
      <Table
        columns={[
          { key: "cardName", label: "Card Name" },
          { key: "curency", label: "Curency" },
          { key: "expiration", label: "Expiration" },
          { key: "bin", label: "Bin" },
          { key: "dateCreated", label: "Date Created" },
        ]}
        data={cardList}
        renderAction={() => (
          <span className="text-blue-600 font-semibold cursor-pointer text-sm items-center justify-center flex gap-4"   > <Icon  name='delete' size={6}  /> <Icon  name='pen' size={6}  /> </span>
        )}
      />
      </div>
    );
  };

export default CardProfileTable
