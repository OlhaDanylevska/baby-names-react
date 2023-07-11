import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import babyNamesData from "./babyNamesData.json"


function App() {
  const sortedNames = (names, key) => {
    return names.sort((a, b) => a[key].localeCompare(b[key]));
  };

  const initialData = sortedNames(babyNamesData, "name");
  const [searchInput, setSearchInput] = useState("");
  const [mainList, setMainList] = useState(initialData)

  return (
    <div className="App">
      <SearchBar mainList={mainList} setMainList={setMainList}
        searchInput={searchInput} setSearchInput={setSearchInput} initialData={initialData} />
    </div>
  );
}

export default App;
