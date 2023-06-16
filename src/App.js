import './App.css';
import babyNamesData from "./babyNamesData.json"


const sortTheNames = () => {
  babyNamesData.sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })

}

sortTheNames()

const DisplayTheName = () => {
  return (
    <div className='container-for-names'>
      {

        babyNamesData.map(eachName => {
          if (eachName.sex === "m") {
            return (<span className="each-name">{eachName.name}</span>)
          } else {
            return (<span className="each-name-girls">{eachName.name}</span>)
          }

        })
      }
    </div>
  )

}

function App() {
  return (
    <div className="App">

      <DisplayTheName />

    </div>
  );
}

export default App;
