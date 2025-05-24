// import MarsList from "../MarsList/MarsList";

import { useState, useEffect } from "react"
import RoversList from "../RoversList/RoversList"
import MarsList from "../MarsList/MarsList"

const App = () => {
    const DEMO_KEY = 'uFj4Cg3acbb9U3BVt3BpDIynZHq32hfKtf12CSjz'
    const [rovers, setRovers] = useState([])
    useEffect(() => {
        /* 
        
        get all rovers https://api.nasa.gov/mars-photos/api/v1/rovers/
        get photos by rover https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/
        
        */

      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${DEMO_KEY}`)
      .then((responce) => responce.json())
      .then((data) => setRovers(data.rovers))
    }, [])
    
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