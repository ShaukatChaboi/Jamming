// import React from "react";
import React, { useState, useCallback } from "react";
import TrackList from "../TrackList/TrackLists";

const Playlist = (props) => {
  const [searchValue, setSearchValue] = useState([]);
  
  const handleNameChange = (event) => {
    const searchedValue = event.target.value;
    setSearchValue(searchedValue);
    console.log(searchedValue, "valueeee");
  };
  //   const handleNameChange = useCallback(
  //     (event) => {
  //       props.onNameChange(event.target.value);
  //     },
  //     [props.onNameChange]
  //   );

  return (
    <div className="flex flex-col items-center  w-[37%] rounded-[5px] max-h-[950px] py-[2.27rem] px-[1.16rem] bg-[#010c3fb3] shadow-Jamming-950">
      <input
        // value={searchValue}
        onChange={handleNameChange}
        defaultValue={"New Playlist"}
        className="w-full border-0 outline-[0] bg-[transparent] border-b border-[#6f6f6f] text-[#fff] text-[1.55rem]"
      />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button
        className="cursor-pointer w-[10rem] py-[0.77rem] px-[0] rounded-full border-0 mt-5 bg-[#6c41ec] text-center text-[0.83rem] transition duration-250 bg-white font-semibold hover:bg-[#6c41e9b3] text-white"
        onClick={props.onSave}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
