import { useState, useEffect, useRef } from "react";
import  FlipCard   from "./animate-ui/components/community/flip-card";

function Experience() {
    const scrollRef = useRef(null);
    const [showScrollHint, setShowScrollHint] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handleScroll = () => {
            const isMobile = window.innerWidth < 768;
            const scrolled = isMobile ? el.scrollTop > 40 : el.scrollLeft > 40;
            setShowScrollHint(!scrolled);
        };
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    const data = [
        {
        name: 'Savvas',
        username: 'Software Engineer Intern',
        image:
            'https://yt3.googleusercontent.com/Vks7INjMUwJUMITpWC6AzfSoRTPJ7g2Jzhu9XRages_wCF742wjfUYgf9hqiZ49OznSmAzM94A=s900-c-k-c0x00ffffff-no-rj',
        location:'Boston, MA',
        bio: [
            "Engineered a serverless, event-driven RAG pipeline within GitHub Actions to sync codebase updates, utilizing the Amazon Bedrock Confluence Data Source connector for automated, incremental knowledge ingestion.",
            "Developed a Python script leveraging the GitHub REST API to extract PR metadata and raw Git diffs, applying a Map-Reduce summarization strategy with AWS Bedrock LLMs to efficiently process massive code changes.",
            "Implemented semantic vector searches and hybrid filtering across Bedrock Knowledge Bases (OpenSearch), evaluating Confluence document similarity via confidence scores to automatically post documentation update suggestions to PRs.",
            "Architected the system as a GitHub Composite Action using a 'Hub and Spoke' deployment model, enabling dynamic parameterization and seamless adoption across 50+ organizational repositories without duplicate maintenance."
        ],
        date: 'June 2026 - Present'
        },

        {
        name: 'IBM',
        username: 'Software Developer Intern',
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
            "Directed and mentored an executive board of 10 officers, delegating responsibilities and overseeing project timelines for all cultural and outreach initiatives.",
            "Grew member engagement through fostering an inclusive club culture and implementing effective communication channels for project management and event planning."
        ],
        date: 'Sep 2025 - Present'
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
        <div className="relative h-full overflow-hidden">
            <div ref={scrollRef} className="h-full overflow-y-auto overflow-x-hidden md:overflow-x-auto md:overflow-y-hidden custom-scrollbar">
                <div className="flex flex-col items-center gap-4 px-6 pt-20 pb-10 md:flex-row md:flex-nowrap md:items-center md:gap-7 md:min-h-full md:w-max md:px-12 md:py-12 md:scale-110 md:origin-left">
                    {data.map((item, index) => ((
                        <div key={index} className="shrink-0 portfolio-button md:px-8 py-[10px] transition-all">
                        <FlipCard data={item} />
                        </div>
                        )))
                    }
                </div>
            </div>

            {/* Scroll hint — mobile (vertical) */}
            <div className={`md:hidden absolute right-4 bottom-1/2 translate-y-1/2 flex flex-col items-center gap-1 pointer-events-none transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-white text-[10px] font-['IBM_Plex_Mono',_monospace] tracking-widest uppercase [writing-mode:vertical-rl]">Scroll</span>
            </div>

            {/* Scroll hint — desktop (horizontal) */}
            <div className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 pointer-events-none transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-white text-[10px] font-['IBM_Plex_Mono',_monospace] tracking-widest uppercase">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    )
}

export default Experience;