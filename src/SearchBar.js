

const SearchBar = ({ mainList, setMainList, searchInput, setSearchInput, initialData }) => {

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
        <div className="search-area">
            <h1>Search for your Favorite Names</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />

        </div>
    )
}

export default SearchBar
