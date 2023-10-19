import "./App.css";
// import Routers from "./routers";
import Navbar from "./components/navbar/index";
import Playlist from "./components/playlist/PlayList";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchInput />
      <div className="flex flex-row justify-between mx-auto">
        <Playlist />
      </div>
      {/* <Routers /> */}
    </div>
  );
}

export default App;
