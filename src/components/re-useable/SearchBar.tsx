import React from "react";
import { Icon } from "../../assets/Icon";

interface SearchProps {
  placeholder?: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search?: string;
}

const SearchBar: React.FC<SearchProps> = ({ placeholder, handleSearch, search }) => {
  return (
    <div className="w-full flex ">
      <div className="flex gap-3 my-4 px-4 ml-3 py-4 w-full md:w-1/3 rounded-xl items-center bg-[#FFFFFF] shadow-md">
        <Icon name="search" className="text-gray-500 opacity-60" />
        <input
          type="text"
          name="search"
          value={search || ""}
          onChange={handleSearch}
          placeholder={placeholder || "Search..."}
          className="text-base font-medium outline-none bg-transparent w-full placeholder-opacity-70 focus:bg-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
