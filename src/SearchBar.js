import { useState } from "react";
import DisplayNames from "./display-the-names";

const SearchBar = ({ mainList, setMainList, searchInput, setSearchInput, initialData }) => {
    const [active, setActive] = useState("gen")

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
    const handleAllGenders = (gender) => {
        console.log("hello")
        if (active === "gen") {
            const sortedNames = mainList.filter(name => {
                return name.sex === gender
            })
            setMainList(sortedNames)
            setActive("all")
        }
        else if (active === "all") {
            setMainList(initialData)
            setActive("gen")
        }
    }
    return (
        <div className="search-area">
            <h1>Search for your Favorite Names</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <button onClick={() => (handleAllGenders("f"))} className="g-girls">All Girls</button>
            <button onClick={() => (handleAllGenders("m"))} className="g-boys">All Boys</button>
            <DisplayNames mainList={mainList} setMainList={setMainList} />
        </div>
    )
}

export default SearchBar
