import { useState } from "react";


const DisplayNames = ({ allNames, setMainList }) => {
    const [favoriteName, setFavoriteName] = useState([])


    const handleChanges = (name) => {
        setFavoriteName(favoriteName.concat(name))
        console.log(favoriteName)
        setMainList(allNames.filter((babyName) => babyName.name !== name.name))
    }

    const handleDelete = (name) => {
        setFavoriteName(favoriteName.filter((babyName) => babyName.name !== name.name))
        setMainList(allNames.concat(name))
    }

    console.log({ favoriteName })

    console.log("props", allNames)
    return (
        <div className="all-names">
            <div className="favorites" >
                {favoriteName.map((eachName) => {
                    return (<span key={eachName.id} className={eachName.sex} onClick={() => { handleDelete(eachName); }}>{eachName.name}</span>);
                })}
            </div>
            <div className='container-for-names'>
                {allNames.map((eachName) => {
                    return (<span key={eachName.id} className={eachName.sex}
                        onClick={() => { handleChanges(eachName) }}>{eachName.name}</span>);
                })}

            </div>
        </div >
    )

}

export default DisplayNames