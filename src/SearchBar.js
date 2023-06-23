import { useState } from "react";
import DisplayNames from "./display-the-names";
import babyNamesData from "./babyNamesData.json"

const sortedNames = (names, key) => {
    return names.sort((a, b) => a[key].localeCompare(b[key]));
};

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const initialData = sortedNames(babyNamesData, "name");
    const [mainList, setMainList] = useState(initialData)

    console.log({ mainList })



    function handleChange(e) {
        let inputValue = e.target.value;

        if (!inputValue) {
            setMainList(initialData)
            console.log(inputValue)
            setSearchInput("");
        } else {
            let filteredMailList = initialData.filter(name => (
                name.name.toLowerCase().includes(inputValue.toLowerCase())
            ))
            console.log(inputValue)
            setMainList(filteredMailList)
            setSearchInput(inputValue)
        }
    }
    console.log(mainList)
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
                <DisplayNames allNames={mainList} setMainList={setMainList} />
            </div>
        </div>
    )
}

export default SearchBar
