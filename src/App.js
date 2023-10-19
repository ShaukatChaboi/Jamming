import "./App.css";
import React from "react";
// import Routers from "./routers";
import Navbar from "./components/navbar/index";
import Playlist from "./components/playlist/PlayLists";
import SearchInput from "./components/SearchInput/SearchInput";
import Spotify from "./conn/Spotify";

function App() {
  // const search = useCallback((term) => {
  //   Spotify.search(term).then(setSearchResults);
  // }, []);
  return (
    <>
      <Navbar />
      <div className="App">
        <SearchInput />
        <div className="flex flex-row justify-between mx-auto py-12">
          <Playlist />
        </div>
        {/* <Routers /> */}
      </div>
    </>
  );
}

export default App;
