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
    const filteredNames = babyNamesData.filter((babyName) => {
        if (props.input === "") {
            return babyName
        } else {
            return babyName.name.toLowerCase().includes(props.input)
        }
    }
    );
    return (
        <div className='container-for-names'>
            {
                filteredNames.map((eachName) => {
                    if (eachName && eachName.sex === "m") {
                        return (<span key={eachName.id} className="each-name">{eachName.name}</span>)
                    } else {
                        return (<span key={eachName.id} className="each-name-girls">{eachName.name}</span>)
                    }

                })
            }
        </div>
    )

}

export default DisplayNames