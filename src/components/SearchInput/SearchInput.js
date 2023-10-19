import React, { useState } from "react";
function SearchInput() {
  return (
    <>
      <div className="flex items-center flex-col mb-100  pt-40 mb-8">
        <input
         type="text"
         
         placeholder="Enter A Song, Album, or Artist .... "
         className="block flex-1 border-0 decoration-black
     bg-Jamming-textColor py-1.5 
     pl-1 text-Jamming-bgTextInput   border-white text-center text-lg my-6 py-2 px-0  w-72"
        />
        <button
          className="bg-Jamming-btn  border-0 text-center w-28
      py-2 px-0 font-medium text-btnfontSize cursor-pointer rounded-full text-white hover:bg-Jamming-btnHover "
        >
          SEARCH
        </button>
      </div>
      <div className="flex justify-between w-1000 space-x-4 "></div>
    </>
  );
}
export default SearchInput;
