import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Portfolio from "@/pages/Portfolio"
import Silk from "./components/Silk"

function App(){
    return(
        <BrowserRouter>
            <div className="absolute w-screen h-screen z-0">
                <Silk 
                    speed={4.0}
                    scale={1}
                    color="#c0c0c0ff"
                    noiseIntensity={5}
                    rotation={0}            
                /> 
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App