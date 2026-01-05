import Silk from '../components/Silk';
import ASCIIText from '../components/ASCIIText';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePortfolioClick = () => {
        e.preventDefault();
        // study this ^^^^
        setIsTransitioning(true);
        setTimeout(() => {
            navigate('/portfolio');
        }, 1000); // Duration should match the CSS transition duration
    };


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
            <div className={isTransitioning ? "fade-out" : ""} style={{position: "absolute", width: "100%", height: "300px", top: "20%", left: "50%", transform: "translateX(-50%)", zIndex: 1}}>
                <ASCIIText 
                text="Hello!"
                enableWaves={true}
                asciiFontSize={5}
                />
            </div>
            <div className={isTransitioning ? "fade-out" : ""} style={{position: "absolute", width: "100%", height: "300px", top: "35%", left: "50%", transform: "translateX(-50%)", zIndex: 2}}>
                <ASCIIText 
                text="I'm Wesley Agojo"
                enableWaves={false}
                asciiFontSize={5}
                />
            </div>
            <div className={`fade-in-2s ${isTransitioning ? "fade-out" : ''}`} style={{position: "absolute", bottom: "35%", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", gap: "40px",}}>
                <a
                    href='/portfolio'
                    onClick={handlePortfolioClick}
                    className="portfolio-button"
                    style={{color: "white", fontSize: "24px", textDecoration: "none", fontFamily: "IBM Plex Mono, monospace", border: "2px solid white", padding: "15px 40px", transition: "all 0.3s"}}>
                    Explore my portfolio
                </a>
            </div>
        </div>
    )   
}

export default Home;