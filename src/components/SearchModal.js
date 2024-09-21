import React, { useState } from 'react';

const SearchModal = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mx-auto mt-10">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Enter city"
          className="w-full p-2 border border-gray-300 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-purple-500 text-white rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchModal;
