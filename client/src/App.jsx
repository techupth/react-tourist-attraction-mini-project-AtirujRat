import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TouristAttractionList from "./components/TouristAttractionList";

import axios from "axios";

function App() {
  const [tourlistPlaces, setTourlistPlaces] = useState([]);
  const [searchBar, setSearchBarInput] = useState("");

  const getTouristAttractionData = async () => {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${searchBar}`
    );
    setTourlistPlaces(response.data.data);
  };

  useEffect(() => {
    getTouristAttractionData();
  }, [searchBar]);

  return (
    <div className="App">
      <Header />
      <SearchBar searchBar={searchBar} setSearchBarInput={setSearchBarInput} />
      <TouristAttractionList
        tourlistPlaces={tourlistPlaces}
        setSearchBarInput={setSearchBarInput}
      />
    </div>
  );
}

export default App;
