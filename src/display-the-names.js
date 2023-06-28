import { useState } from "react";


const DisplayNames = ({ allNames: mainList, setMainList }) => {
    const [favoriteName, setFavoriteName] = useState([])


    const handleChanges = (name) => {
        setFavoriteName(favoriteName.concat(name))
        console.log(favoriteName)
        setMainList(mainList.filter((babyName) => babyName.name !== name.name))
    }

    const handleDelete = (name) => {
        setFavoriteName(favoriteName.filter((babyName) => babyName.name !== name.name))

        console.log({ allNames: mainList })
        let sortedNamesAfterFavorite = (names, key) => {
            return names.sort((a, b) => a[key].localeCompare(b[key]));
        };

        const allNamesAfterFavorite = sortedNamesAfterFavorite([...mainList, name], "name");
        setMainList(allNamesAfterFavorite)
    }

    console.log({ favoriteName })

    console.log("props", mainList)
    return (
        <div className="all-names">
            <div className="favorites" >
                <div className="text-block">
                    <h3>Favorite Names List</h3>
                    <p>Add your Favorite names to "Favorites" by click</p>
                </div>
                <div className="f-names">
                    {favoriteName.map((eachName) => {
                        return (<span key={eachName.id} className={eachName.sex} onClick={() => { handleDelete(eachName); }}>{eachName.name}</span>);
                    })}
                </div>
            </div>
            <div className='container-for-names'>
                {mainList.map((eachName) => {
                    return (<span key={eachName.id} className={eachName.sex}
                        onClick={() => { handleChanges(eachName) }}>{eachName.name}</span>);
                })}

            </div>
        </div >
    )

}

export default DisplayNames