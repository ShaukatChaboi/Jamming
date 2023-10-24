import React, { useState, useCallback } from "react";
function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const handleTermChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  
  const search = useCallback(() => {
    props.onSearch(searchTerm);
  }, [props.onSearch, searchTerm]);
  
  const handleKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 13) search();
    },
    [search]
  );
  //   const [searchTerm, setSearchTerm] = useState("");

  // const handleTermChange = useCallback((event) => {
  //   setSearchTerm(event.target.value);
  // }, []);

  // const handleSearch = useCallback(() => {
  //   setSearchTerm((currentSearchTerm) => {
  //     props.onSearch(currentSearchTerm);
  //     return currentSearchTerm; // Return the current value to set it immediately
  //   });
  // }, [props.onSearch]);
  // const search = () => {
  //   props.onSearch(searchTerm);
  // };

  return (
    <>
      <div className="flex flex-col items-center mb-100  pt-30 mb-8">
        <input
          onChange={handleTermChange}
          onKeyUp={handleKeyUp}
          type="text"
          placeholder="Enter A Song, Album, or Artist .... "
          className="block flex-1 border-0 decoration-black bg-Jamming-textColor pl-1 text-Jamming-bgTextInput rounded-lg border-white text-lg my-6 py-2 px-0 text-left w-72"
        />
        <button
          className="bg-Jamming-btn  border-0 text-center w-28
      py-2 px-0 font-medium text-btnfontSize cursor-pointer rounded-full text-white hover:bg-Jamming-btnHover "
          onClick={search}
        >
          SEARCH
        </button>
      </div>
    </>
  );
}
export default SearchInput;
