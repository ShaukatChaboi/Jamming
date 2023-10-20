import React, { useState, useCallback } from "react";
function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);
  const handleSearch = useCallback(() => {
    props.onSearch(searchTerm);
  }, [props.onSearch, searchTerm]);
  return (
    <>
      <div className="flex items-center flex-col mb-100  pt-40 mb-8">
        <input
          type="text"
          placeholder="Enter A Song, Album, or Artist .... "
          className="block flex-1 border-0 decoration-black bg-Jamming-textColor pl-1 text-Jamming-bgTextInput   border-white text-lg my-6 py-2 px-0 text-left w-72"
          onChange={handleTermChange}
        />
        <button
          className="bg-Jamming-btn  border-0 text-center w-28
      py-2 px-0 font-medium text-btnfontSize cursor-pointer rounded-full text-white hover:bg-Jamming-btnHover "
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
    </>
  );
}
export default SearchInput;
