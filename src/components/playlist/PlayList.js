// import React from "react";
import React, { useCallback } from "react";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className="Playlist flex flex-col items-center overflow-y-scroll w-2/5 max-h-96 p-6 bg-opacity-70 bg-blue-900 shadow-md">
      <input
        onChange={handleNameChange}
        defaultValue={"New Playlist"}
        className="w-full border-0 outline-none bg-transparent border-b border-gray-400 text-white text-xl"
      />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button
        className="Playlist-save cursor-pointer w-40 py-2 rounded-full border-0 mt-5 bg-purple-600 text-center text-sm transition duration-250 bg-white font-semibold hover:bg-purple-700 text-white"
        onClick={props.onSave}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
