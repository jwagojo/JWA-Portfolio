import Silk from '../components/Silk';

function Portfolio() {
    return (
        <div style={{width: "100vw", height: "100vh", position: "relative", overflow: "hidden"}}>
            <div style={{position: "absolute", width: "100vw", height: "100vh", zIndex: 0}}>
               <Silk 
                speed={5.5}
                scale={1}
                color="#c0c0c0ff"
                noiseIntensity={5}
                rotation={0}            
                /> 
            </div>
        </div>
    )
}

export default Portfolio;