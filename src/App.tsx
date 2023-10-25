import './App.css'
import Listing from './components/Listing'
import etsyData from './components/data/etsyData'

function App() {

  return (
    <>
      <Listing cards={etsyData}/>
    </>
  )
}

export default App
