import React, { useCallback, useState } from 'react'
import CardRequestHeader from '../card-request/CardRequestHeader'
import CardProfileTable from '../card-profile/CardProfileTable'
import SearchBar from '../../components/re-useable/SearchBar'

const CardProfile = () => {
      const [search, setSearchTerm] = useState("");
    
      const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      }, []);
  return (
    <div>
      <CardRequestHeader title='Card Profile' subTitile='Create,view and edit card profile here.' />
      <SearchBar placeholder='Search by card name' handleSearch={handleSearch} search={search} />
      <CardProfileTable />

    </div>
  )
}

export default CardProfile
