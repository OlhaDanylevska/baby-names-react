import React, { useState } from 'react';
import './App.css';
import DisplayNames from './display-the-names';

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value.toLowerCase()
    setSearchInput(inputValue);
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput} />
      </div>
      <div>
        <DisplayNames input={searchInput} />
      </div>
    </div>
  );
}

export default App;
