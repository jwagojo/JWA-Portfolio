import { useState, useEffect, useRef } from "react";
import  FlipCard   from "./animate-ui/components/community/flip-card";

function Experience() {
    const scrollRef = useRef(null);
    const [showScrollHint, setShowScrollHint] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handleScroll = () => {
            if (el.scrollTop > 40) setShowScrollHint(false);
            else setShowScrollHint(true);
        };
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    const data = [
        {
        name: 'Savvas',
        username: 'Software Engineering Intern',
        image:
            'https://yt3.googleusercontent.com/Vks7INjMUwJUMITpWC6AzfSoRTPJ7g2Jzhu9XRages_wCF742wjfUYgf9hqiZ49OznSmAzM94A=s900-c-k-c0x00ffffff-no-rj',
        location:'Boston, MA',
        bio: ["Incoming this summer 2026"
        ],
        date: 'June 2026 - Present'
        },

        {
        name: 'IBM',
        username: 'Software Developer Co-op',
        image:
            'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
        location:'Lowell, MA',
        bio: ["Architected a multi-layer AI pipeline using LangGraph to autonomously analyze FVT results across 10 pipelines, reducing manual triage time from hours to minutes, classifying failures via IBM Bob log extraction with RAG-augmented context, then deduplicating defects through a state machine integrated with the JIRA REST API.",
            "Engineered a multi-phase eligibility system filtering 70–80% of pipeline noise before AI processing via stagnation detection and version change analysis, propagating valid builds through an Apache Kafka event-driven architecture.",
            "Queried execution data from a pre-existing MongoDB instance, architected a new PostgreSQL database for logging failures, and engineered the FVT Diagnostic Tool using Flask with 30+ REST API endpoints and dynamic template rendering for pipeline monitoring, flaky test analysis, and defect tracking dashboard.",
            "Implemented a Redis-backed multi-layer caching strategy for classification results and JIRA deduplication data, and built an event-driven Slack alerting system with per-pipeline rate limiting to notify engineering teams of build failures in real time."
        ],
        date: 'Jan 2026 - May 2026'
        }, 
        
        {
        name: 'Vierra Digital',
        username: 'Software Engineer Intern',
        image:
            'https://media.licdn.com/dms/image/v2/D4E0BAQEdmQKS5qlc5Q/company-logo_200_200/company-logo_200_200/0/1697647304213/vierra_logo?e=2147483647&v=beta&t=CskVln4C4yCgZ8OnuZeO6O2qqVhSxDszQVvadfVyD1A',
        location:'Cambridge, MA',
        bio: [
            "Built customer-facing pages with Next.js, React, Tailwind, and TypeScript.",
            "Developed AI ad automation agent that analyzes client websites and generates platform-specific ad campaigns using LLM.",
            "Optimized PostgreSQL data layer to store website analysis and creative assets"
        ],
        date: 'June 2025 - Sept 2025'
        },
        
        {
        name: 'UML TFC',
        username: 'President',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUWrxeJVbvFammBZPF11hAnOSPob3oNDQdg&s',
        location:'Lowell, MA',
        bio: [
            "Directed an executive board of 15 officers, overseeing project timelines for cultural initiatives", 
            "Grew engagement through club culture and effective reported channels for project management", 
            "Served as official representative to UML community and external organizations, promoting Filipino heritage"
        ],
        date: 'Oct 2025 - Present'
        }, 

        {
        name: 'BHS',
        username: 'Avionics Intern',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4jOCFq6bItvpHWvScdEXPUIZ5QYT5QVEQQ&s',
        location:'Burlington, MA',
        bio: ["Building drones, learn how to pilot and program them.","Use them to landscape nearby areas, mark up lands of interest."],
        date: 'Apr 2023 - Jun 2023'
        }, 
    ];


    return (
        <div ref={scrollRef} className="h-full overflow-y-auto md:overflow-hidden">
            <div className="md:scale-120 md:absolute px-6 pt-20 pb-10 flex-col md:px-12 md:py-12 md:top-[20%] md:left-[10%] md:flex-row flex-wrap md:max-h-full md:max-w-full flex gap-4 md:gap-7">
                
                {data.map((item, index) => ((
                    <div key={index} className="md:scale-110  portfolio-button md:px-8 py-[10px] transition-all">
                    <FlipCard data={item} />
                    </div>
                    )))
                }

            </div>

            {/* Scroll hint — mobile only */}
            <div className={`md:hidden fixed right-4 bottom-1/2 translate-y-1/2 flex flex-col items-center gap-1 pointer-events-none transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-white text-[10px] font-['IBM_Plex_Mono',_monospace] tracking-widest uppercase [writing-mode:vertical-rl]">Scroll</span>
            </div>
        </div>
    )
}

export default Experience;