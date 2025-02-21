import React, { useCallback, useState } from "react";
import CardRequestHeader from "../card-request/CardRequestHeader";
import CardProfileTable from "../card-profile/CardProfileTable";
import SearchBar from "../../components/re-useable/SearchBar";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../assets/Icon";

const CardProfile = () => {
  const [search, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div className="h-screen px-4 md:px-8">
      <CardRequestHeader
        title="Card Profile"
        subTitile="Create, view, and edit card profile here."
      />
      <div className="border-t-2 w-full border-[#98a1b1]"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
        <SearchBar
          placeholder="Search by card name"
          handleSearch={handleSearch}
          search={search}
        />
        <button
          onClick={() => navigate(`/create-card`)}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-1 rounded-md w-full md:w-auto hover:bg-blue-700 transition"
        >
          <Icon name="plus" className="mr-0" />
          <p>Add Profile</p>
        </button>
      </div>

      <div className="border-t-2 w-full border-[#98A2B3] mt-2 mb-4"></div>
      <div className="overflow-x-auto">
        <CardProfileTable />
      </div>
    </div>
  );
};

export default CardProfile;
