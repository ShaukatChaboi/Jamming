import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Playlist from "../../components/playlist/PlayLists";
import Spotify from "../../conn/Spotify";
import SearchResult from "../../components/SearchResults/searchresult";
import Swal from "sweetalert2";

// const HomePage = () => {
//   const [searchedTerm, setSearchedTerm] = useState([]);
//   const [playlistTracks, setPlaylistTracks] = useState([]);
//   const search = useCallback((term) => {
//     //  const results = Spotify.search(term).then(setSearchedTerm);
//     Spotify.search(term).then((results) => {
//       setSearchedTerm(results);
//       console.log(results); // Log the results to the console
//     });
//     // Spotify.search(term).then((e)=>{
//     //   console.log(e,'ye lo g..')
//     // });
//   }, []);

//   const AddResults = useCallback(
//     (track) => {
//       if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
//         return;

//       setPlaylistTracks((prevTracks) => [...prevTracks, track]);
//     },
//     [playlistTracks]
//   );
//   return (
//     <>
//       <div className="App">
//         <SearchInput onSearch={search} />
//         <div className="flex flex-row justify-between mx-auto py-12">
//           <SearchResult searchedResults={searchedTerm} onAdd={AddResults} />
//           <Playlist />
//         </div>
//       </div>
//     </>
//   );
// };

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const popupMessage = (title, message, icon) => {
    Swal.fire(title, message, icon);
  };

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    const newPlaylistTrack = [...playlistTracks];
    newPlaylistTrack.push(track);
    setPlaylistTracks(newPlaylistTrack);
  };

  const removeTrack = (track) => {
    const newPlaylistTrack = playlistTracks.filter(
      (savedTrack) => savedTrack.id !== track.id
    );
    setPlaylistTracks(newPlaylistTrack);
  };

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  };

  const savePlaylist = async () => {
    const tracksUris = playlistTracks.map((track) => track.uri);
    const noTracks = tracksUris.length === 0;
    const noPlaylistName = playlistName.trim() === "";
    if (!noTracks && !noPlaylistName) {
      await Spotify.savePlaylist(playlistName, tracksUris);

      setPlaylistName("Playlist Name");
      setPlaylistTracks([]);
      popupMessage("Saved!", "Playlist saved to your account.", "success");
    } else {
      if (noPlaylistName)
        popupMessage("Warning!", "Choose a name for your playlist.", "warning");
      else if (noTracks)
        popupMessage("Warning!", "Add some tracks first.", "warning");
      else
        popupMessage("Warning!", "Create your playlist first.", "warning");
    }
  };

  const search = async (term) => {
    if (term.trim() === "") {
      popupMessage("Warning!", "Enter a search term.", "warning");
    } else {
      const response = await Spotify.search(term);
      if (response) {
        setSearchResults(response);
      } else {
        popupMessage("Error!", `No results found for: ${term}.`, "error");
      }
    }
  };

  return (
    <div>
      <div className="App">
        <SearchInput onSearch={search} />
        <div className="flex flex-row justify-between mx-auto py-12">
          <SearchResult onAdd={addTrack} searchResults={searchResults} />
          <Playlist
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            playlistTracks={playlistTracks}
            playlistName={playlistName}
          />
        </div>
      </div>
    </div>
  );
}


export default HomePage;
