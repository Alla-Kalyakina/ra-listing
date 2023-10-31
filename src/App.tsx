import './App.css'
import Listing from './components/Listing'
import etsyData from './components/data/etsyData.json'

const jsonString = JSON.stringify(etsyData)
const data = JSON.parse(jsonString)

function App() {

  return (
    <>
      <Listing cards={data}/>
    </>
  )
}

export default App
