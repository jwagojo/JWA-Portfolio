import { useState } from 'react';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import BackButton from '@/components/BackButton';

function Portfolio() {
    const [useSection, setUseSection] = useState('');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    const handleSectionClick = (section) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setUseSection(section);
            if(section === '')
                setShowMenu(true);
            else
                setShowMenu(false);
            setIsTransitioning(false);
        }   , 500);
    }

    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <div className="fade-in absolute inset-0 pointer-events-none z-50 p-6">
                <div className="metallic-border w-full h-full border-2 border-gray-300">
                </div>
            </div>
            {showMenu && (<nav className={`absolute left-20 top-20 z-10 flex flex-col ${isTransitioning? 'fade-out' : 'fade-in'}`}>
                <h1 className="text-white text-5xl font-['IBM_Plex_Mono',_monospace] font-semibold mb-4">
                    Wesley Agojo
                </h1>
                <h2 className="font-['IBM_Plex_Mono',_monospace] mb-2" style={{ color: '#d5d3d3ff' }}>
                    Incoming Software Developer Co-op @ IBM | CS + Math Minor @ University of Massachusetts Lowell '27
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                    <a 
                    href="#projects" 
                    className="portfolio-button text-white text-2xl font-['IBM_Plex_Mono',_monospace] hover:text-gray-300 transition-colors duration-300"
                    onClick={() => handleSectionClick('projects')}
                    >
                        Projects
                    </a>
                    <a 
                        href="#experience" 
                        className="portfolio-button text-white text-2xl font-['IBM_Plex_Mono',_monospace] hover:text-gray-300 transition-colors duration-300"
                        onClick={() => handleSectionClick('experience')}
                    >
                        Experience
                    </a>
                    <a 
                        href="#skills" 
                        className="portfolio-button text-white text-2xl font-['IBM_Plex_Mono',_monospace] hover:text-gray-300 transition-colors duration-300"
                        onClick={() => handleSectionClick('skills')}
                    >
                        Skills
                    </a>
                    <a 
                        href="#contact" 
                        className="portfolio-button text-white text-2xl font-['IBM_Plex_Mono',_monospace] hover:text-gray-300 transition-colors duration-300"
                        onClick={() => handleSectionClick('contact')}
                    >
                        Contact
                    </a>
                </div>
            </nav>)}

            {!showMenu && (
                <div className={`absolute w-full h-full top-0 left-0 flex justify-center items-center p-20 ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                <BackButton onClick={() => handleSectionClick('')} />
                {useSection === 'projects' && <Projects />}
                {useSection === 'experience' && <Experience />}
                {useSection === 'skills' && <Skills />}
                {useSection === 'contact' && <Contact />}
            </div>
            )}
        </div>
    )
}

export default Portfolio;