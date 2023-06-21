import { useState } from "react";
import DisplayNames from "./display-the-names";


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");



    const handleChange = (e) => {
        let inputValue = e.target.value.toLowerCase()
        setSearchInput(inputValue);
    }
    return (
        <div>
            <h1>Search the Name</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <div className='favirite-names'>
                <p>Add your Favorite names by click</p>
            </div>
            <div>
                <DisplayNames input={searchInput} />
            </div>
        </div>
    )
}

export default SearchBar
