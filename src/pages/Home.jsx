import ASCIIText from '../components/ASCIIText';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePortfolioClick = (e) => {
        e.preventDefault();
        setIsTransitioning(true);
        setTimeout(() => {
            navigate('/portfolio');
        }, 1000); // Duration should match the CSS transition duration
    };

    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <div className={`absolute w-full h-[300px] top-[20%] left-1/2 -translate-x-1/2 z-[1] ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                <ASCIIText 
                    text="Hello!"
                    enableWaves={true}
                    asciiFontSize={5}
                />
            </div>
            <div className={`absolute w-full h-[300px] top-[35%] left-1/2 -translate-x-1/2 z-[2] ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                <ASCIIText 
                    text="I'm Wesley Agojo"
                    enableWaves={false}
                    asciiFontSize={5}
                />
            </div>
            <div className={`absolute bottom-[35%] left-1/2 -translate-x-1/2 z-[3] flex gap-10 ${isTransitioning ? "fade-out" : 'fade-in-2s'}`}>
                <a
                    href='/portfolio'
                    onClick={handlePortfolioClick}
                    className="portfolio-button text-white text-2xl no-underline font-['IBM_Plex_Mono',_monospace] border-2 border-white px-10 py-[15px] transition-all duration-300"
                >
                    Explore my portfolio
                </a>
            </div>
        </div>
    )   
}

export default Home;