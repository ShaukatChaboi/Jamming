import "./App.css";
// import Routers from "./routers";
import Navbar from "./components/navbar/index";
import SearchInput from './components/SearchInput/SearchInput'

function App() {
  return (
        <div className="App">
          <Navbar/>
          
      <SearchInput />
          {/* <Routers /> */}
        </div>
      );
}

export default App;
