import React from "react";
import TrackList from "../TrackList/TrackLists";

const SearchResult = (props) => {
  return (
    <div className="xs:w-[100%] md:w-[50%] rounded-[5px] max-h-[950px] p-[0.88rem] bg-[#010c3fb3] shadow-Jamming-950 bg-opacity-70 overflow-y-auto ">
      <h2 className="text-2xl text-left border-b border-solid">Results</h2>
      <TrackList  onAdd={props.onAdd} isRemoval={false} tracks={props.searchResults} />
    </div>
  );
};

export default SearchResult;
