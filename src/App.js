import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import DisplayNames from "./display-the-names";
import babyNamesData from "./babyNamesData.json"


function App() {
  const sortedNames = (names, key) => {
    return names.sort((a, b) => a[key].localeCompare(b[key]));
  };
  const [searchInput, setSearchInput] = useState("");
  const initialData = sortedNames(babyNamesData, "name");
  const [mainList, setMainList] = useState(initialData)

  return (
    <div className="App">
      <SearchBar mainList={mainList} setMainList={setMainList}
        searchInput={searchInput} setSearchInput={setSearchInput} initialData={initialData} />
      <DisplayNames allNames={mainList} setMainList={setMainList} />
    </div>
  );
}

export default App;
