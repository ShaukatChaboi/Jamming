import React, { useCallback, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Playlist from "../../components/playlist/PlayLists";
import Spotify from "../../conn/Spotify";
import SearchResult from "../../components/SearchResults/searchresult";

const HomePage = () => {
  const [searchedTerm, setSearchedTerm] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const search = useCallback((term) => {
    //  const results = Spotify.search(term).then(setSearchedTerm);
    Spotify.search(term).then((results) => {
      setSearchedTerm(results);
      console.log(results); // Log the results to the console
    });
    // Spotify.search(term).then((e)=>{
    //   console.log(e,'ye lo g..')
    // });
  }, []);

  const AddResults = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );
  return (
    <>
      <div className="App">
        <SearchInput onSearch={search} />
        <div className="flex flex-row justify-between mx-auto py-12">
          <SearchResult searchedResults={searchedTerm} onAdd={AddResults} />
          <Playlist />
        </div>
      </div>
    </>
  );
};
export default HomePage;
