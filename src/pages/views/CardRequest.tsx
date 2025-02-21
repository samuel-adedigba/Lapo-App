import React, { useCallback, useState } from "react";
import CardRequestHeader from "../card-request/CardRequestHeader";
import CardRequestTable from "../card-request/CardRequestTable";
import SearchBar from "../../components/re-useable/SearchBar";

const CardRequest = () => {
  const [search, setSearchTerm] = useState("");

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div>
      <CardRequestHeader title="Card Request" subTitile="View and attend to card requests here." />
      <SearchBar placeholder="Search by branch" handleSearch={handleSearch} search={search} />
      <CardRequestTable />
    </div>
  );
};

export default CardRequest;
