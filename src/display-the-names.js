import { useState } from "react";
import babyNamesData from "./babyNamesData.json"


const sortTheNames = () => {
    babyNamesData.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })

}

sortTheNames()


const DisplayNames = (props) => {

    const [favoriteName, setFavoriteName] = useState([])

    let favorites = babyNamesData.map((babyName, id) => {
        if (favoriteName.includes(babyName.id)) {
            return (
                <span key={id} className={babyName.sex}>{babyName.name}</span>
            )
        }
    })

    function addFavorite(id) {
        setFavoriteName(favoriteName.concat([id]))
    }

    const filteredNames = babyNamesData.filter((babyName) => {
        if (props.input === "") {
            return babyName
        } else {
            return babyName.name.toLowerCase().includes(props.input)
        }
    })

    return (
        <div>
            <div>
                {favorites}
            </div>
            <div className='container-for-names'>
                {
                    filteredNames.map((eachName) => {
                        return (<span key={eachName.id} className={eachName.sex} onClick={() => addFavorite(eachName.id)}>{eachName.name}</span>)
                    })
                }
            </div>

        </div>

    )

}

export default DisplayNames