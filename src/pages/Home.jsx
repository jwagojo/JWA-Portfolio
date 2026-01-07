import ASCIIText from '../components/ASCIIText';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const handlePortfolioClick = (e) => {
        e.preventDefault();
        setIsTransitioning(true);
        setTimeout(() => {
            navigate('/portfolio');
        }, 1000);
    };

    return (
        <div className="w-screen h-screen relative overflow-hidden">
            {!isMobile && (
                <>
                    <div className={`absolute w-full h-[300px] top-[15%] left-1/2 -translate-x-1/2 z-[1] ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                        <ASCIIText 
                            text="Hello!"
                            enableWaves={true}
                            asciiFontSize={5}
                            textFontSize={200}
                        />
                    </div>
                    <div className={`absolute w-full h-[300px] top-[30%] left-1/2 -translate-x-1/2 z-[2] ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                        <ASCIIText 
                            text="I'm Wesley Agojo"
                            enableWaves={false}
                            asciiFontSize={5}
                            textFontSize={200}
                        />
                    </div>
                    <div className={`absolute bottom-[35%] left-1/2 -translate-x-1/2 z-[3] flex gap-10 ${isTransitioning ? "fade-out" : 'fade-in-2s'}`}>
                        <a
                            href='/portfolio'
                            onClick={handlePortfolioClick}
                            className="portfolio-button text-white text-2xl no-underline font-['IBM_Plex_Mono',_monospace] border-2 border-white px-10 py-[15px] transition-all duration-300 whitespace-nowrap"
                        >
                            Explore my portfolio
                        </a>
                    </div>
                </>
            )}

            {isMobile &&(
                <>
                    <div className={`absolute w-full h-[200px] md:h-[300px] top-[15%] md:top-[5%] left-1/2 -translate-x-1/2 z-[1] px-2 ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                        <ASCIIText 
                            text="Hello!"
                            enableWaves={true}
                            asciiFontSize={isMobile ? 2 : 5}
                        />
                    </div>
                    <div className={`absolute w-full h-[200px] md:h-[300px] top-[30%] md:top-[20%] left-1/2 -translate-x-1/2 z-[2] px-2 ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                        <ASCIIText 
                            text="I'm"
                            enableWaves={false}
                            asciiFontSize={isMobile ? 2 : 5}
                        />
                    </div>
                    <div className={`absolute w-full h-[175px] md:h-[300px] top-[45%] md:top-[35%] left-1/2 -translate-x-1/2 z-[2] px-1 ${isTransitioning ? "fade-out" : "fade-in-ASCII"}`}>
                        <ASCIIText 
                            text="Wesley Agojo"
                            enableWaves={false}
                            asciiFontSize={isMobile ? 2 : 5}
                        />
                    </div>
                    <div className={`absolute bottom-[25%] md:bottom-[30%] left-1/2 -translate-x-1/2 z-[3] flex gap-4 md:gap-10 px-4 ${isTransitioning ? "fade-out" : 'fade-in-2s'}`}>
                        <a
                            href='/portfolio'
                            onClick={handlePortfolioClick}
                            className="portfolio-button text-white md:text-2xl no-underline font-['IBM_Plex_Mono',_monospace] border-2 border-white px-4 md:px-10 py-2 md:py-[15px] transition-all duration-300 whitespace-nowrap"
                        >
                            Explore my portfolio
                        </a>
                    </div>
                </>
            )}
        </div>
    )   
}

export default Home;
