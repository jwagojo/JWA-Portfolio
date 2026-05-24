import { useRef, useState, useEffect } from "react";

function Skills() {
    const scrollRef = useRef(null);
    const [showScrollHint, setShowScrollHint] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handleScroll = () => {
            setShowScrollHint(el.scrollTop <= 40);
        };
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = [
        {
            label: 'Languages',
            skills: ['C', 'C++', 'Python', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Java', 'SQL', 'GraphQL']
        },
        {
            label: 'Web Technologies',
            skills: ['React.js', 'Next.js', 'Node.js', 'Flask', 'Tailwind CSS', 'JWT', 'REST API']
        },
        {
            label: 'AI & ML',
            skills: ['LLMs', 'Generative AI','LangGraph', 'OpenCV', 'YOLOv8']
        },
        {
            label: 'Cloud & Architecture',
            skills: ['AWS CDK', 'Serverless Architecture', 'AWS', 'Azure', 'Git']
        },
        {
            label: 'Developer Tools',
            skills: ['GitHub', 'Linux', 'JIRA', 'PostgreSQL', 'MongoDB', 'Scrum', 'Agile', 'FVT']
        },
    ];

    return (
        <div ref={scrollRef} className="h-full overflow-y-auto md:overflow-hidden">
            <div className="md:absolute md:top-[15%] md:left-1/2 md:-translate-x-1/2 px-6 pt-20 pb-12 md:px-0 md:py-0 flex flex-col gap-6 md:gap-8 md:w-[80%]">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col gap-2 md:gap-3">
                        <span className="text-gray-100 font-bold text-[10px] md:text-xl font-['IBM_Plex_Mono',_monospace] tracking-[0.2em] uppercase">
                            {cat.label}
                        </span>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="portfolio-button text-white font-['IBM_Plex_Mono',_monospace] font-semibold text-xs md:text-base border-2 border-white px-3 py-1 whitespace-nowrap transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll hint — mobile only */}
            {/* <div className={`md:hidden fixed right-4 bottom-1/2 translate-y-1/2 flex flex-col items-center gap-1 pointer-events-none transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-white text-[10px] font-['IBM_Plex_Mono',_monospace] tracking-widest uppercase [writing-mode:vertical-rl]">Scroll</span>
            </div> */}
        </div>
    );
}

export default Skills;