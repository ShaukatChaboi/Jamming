import React from "react";
import TrackList from "../TrackList/TrackLists";

const SearchResult = (props) => {
  return (
    <div className=" w-[50%] rounded-[5px] h-[950px] p-[0.88rem] bg-[#010c3fb3] shadow-Jamming-950 bg-opacity-70 ">
      <h2 className="text-2xl pe-[70%]">Results</h2>
      <TrackList  onAdd={props.onAdd} isRemoval={false} tracks={props.searchResults} />
    </div>
  );
};

export default SearchResult;
