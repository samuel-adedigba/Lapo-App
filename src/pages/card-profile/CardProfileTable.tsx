import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '../../components/re-useable/Table';
import { Icon } from '../../assets/Icon';

const CardProfileTable = () => {
    const cardList = [
        { id: 1, cardName: "Verve-1", curency: "NGN", expiration: "40 months", bin: 50611234, dateCreated: "11/14/2024 10:27:43" },
        { id: 2, cardName: "Verve-1", curency: "NGN", expiration: "40 months", bin: 50611234, dateCreated: "11/14/2024 10:27:43" },
        { id: 3, cardName: "Verve-1", curency: "NGN", expiration: "40 months", bin: 50611234, dateCreated: "11/14/2024 10:27:43" },
      ];

    const navigate = useNavigate()
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
        renderAction={(item) => (
          <span className="text-blue-600 font-semibold cursor-pointer text-sm items-center justify-center flex gap-4"   > <Icon  name='delete' size={6} onClick={()=> navigate(`/card-profile/${item.id}`)}  /> <Icon  name='pen' size={6} onClick={()=> navigate(`/create-card`)} /> </span>
        )}
      />
      </div>
    );
  };

export default CardProfileTable
