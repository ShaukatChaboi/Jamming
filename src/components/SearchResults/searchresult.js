import React from "react";
import TrackList from "../TrackList/TrackLists";

const SearchResult = (props) => {
  return (
    <div className=" w-[50%] rounded-[5px] h-[950px] p-[0.88rem] bg-[#010c3fb3] shadow-Jamming-950 ">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResult;
