import Silk from '../components/Silk';
import ASCIIText from '../components/ASCIIText';

function Home() {
    return (
        <div style={{width: "100vw", height: "100vh", position: "relative", overflow: "hidden"}}>
            <div style={{position: "absolute", width: "100%", height: "100%", zIndex: 0}}>
               <Silk 
                speed={7.5}
                scale={1}
                color="#c0c0c0ff"
                noiseIntensity={5}
                rotation={0}            
                /> 
            </div>
            <div style={{position: "absolute", width: "100%", height: "300px", top: "20%", left: "50%", transform: "translateX(-50%)", zIndex: 1}}>
                <ASCIIText 
                text="Hello!"
                enableWaves={false}
                asciiFontSize={5}
                />
            </div>
            <div style={{position: "absolute", width: "100%", height: "300px", top: "35%", left: "50%", transform: "translateX(-50%)", zIndex: 2}}>
                <ASCIIText 
                text="I'm Wesley Agojo"
                enableWaves={false}
                asciiFontSize={5}
                />
            </div>
            <div style={{position: "absolute", bottom: "30%", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", gap: "40px"}}>
                <div style={{color: "white", fontSize: "24px", textDecoration: "none", fontFamily: "IBM Plex Mono, monospace", border: "2px solid white", padding: "15px 40px", transition: "all 0.3s"}}>
                    Projects
                </div>
                <div style={{color: "white", fontSize: "24px", textDecoration: "none", fontFamily: "IBM Plex Mono, monospace", border: "2px solid white", padding: "15px 40px", transition: "all 0.3s"}}>
                    Experience
                </div>
            </div>
        </div>
    )   
}

export default Home;