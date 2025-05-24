// import MarsList from "../MarsList/MarsList";

import { useState, useEffect } from "react"
import RoversList from "../RoversList/RoversList"
import MarsList from "../MarsList/MarsList"

const App = () => {
    const DEMO_KEY = 'uFj4Cg3acbb9U3BVt3BpDIynZHq32hfKtf12CSjz'
    const [rovers, setRovers] = useState([])
    const [photos, setPhotos] = useState([])
    const [currentRover, setCurrentRover] = useState("")
    
    useEffect(() => {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${DEMO_KEY}`)
      .then((responce) => responce.json())
      .then((data) => setRovers(data.rovers))
    }, [])
    
    useEffect(() => {
        if (currentRover.length === 0) {
            return
        }

      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${currentRover}/photos?sol=1000&api_key=${DEMO_KEY}`)
        .then((responce) => responce.json())
        .then((data) => setPhotos(data.photos));
    }, [currentRover]);
    
    return (
      <>
        <div className="container">
          <RoversList data={rovers} />
        </div>
        <div className="container">
            <MarsList/>
        </div>
      </>
    ); 
}

export default App;