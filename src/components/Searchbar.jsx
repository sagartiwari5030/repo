import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };
  
  const fromstyle={
  
    '@media (max-width: 640px)': {
      display: 'none',
    },
  }
  return (

    <>
    {/* <form  style={fromstyle}  onSubmit={handleSubmit} autoComplete="on" className="p-2 text-gray-400 focus-within:text-white">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className=" flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 mt-4 mr-2" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="mt-4 w-30 md:w-80 bg-transparent border-2 rounded-full placeholder-gray-500 outline-none text-base text-white p-2 md:p-3 focus:placeholder-transparent"
          placeholder="Search by songs"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
     
    </form> */}
    

    </>
  );
};

export default Searchbar;
