import { useRef } from "react";

function Skills() {
    const scrollRef = useRef(null);

    const categories = [
        {
            label: 'Languages',
            skills: ['C', 'C++', 'Python', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Java', 'SQL']
        },
        {
            label: 'Web Technologies',
            skills: ['React.js', 'Next.js', 'Node.js', 'Flask', 'Tailwind CSS', 'JWT', 'REST API', 'GraphQL', 'Docker']
        },
        {
            label: 'AI & ML',
            skills: ['LLMs', 'Generative AI', 'RAG', 'LangGraph', 'Amazon Bedrock', 'OpenSearch', 'OpenCV', 'YOLOv8']
        },
        {
            label: 'Cloud & Architecture',
            skills: ['AWS CDK', 'Serverless Architecture', 'AWS', 'Azure', 'Git', 'GitHub Actions', 'IBM Cloud', 'OpenShift (Red Hat)', 'Kubernetes', 'Tekton']
        },
        {
            label: 'Developer Tools',
            skills: ['GitHub', 'Linux', 'JIRA', 'Confluence', 'PostgreSQL', 'MongoDB', 'Scrum', 'Agile', 'FVT']
        },
    ];

    return (
        <div ref={scrollRef} className="h-full overflow-y-auto custom-scrollbar">
            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 pt-20 sm:pt-24 md:pt-36 lg:pt-32 pb-12 flex flex-col gap-5 md:gap-7">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col gap-2 md:gap-3">
                        <span className="text-gray-100 font-bold text-[10px] sm:text-xs md:text-base lg:text-xl font-['IBM_Plex_Mono',_monospace] tracking-[0.2em] uppercase">
                            {cat.label}
                        </span>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="portfolio-button text-white font-['IBM_Plex_Mono',_monospace] font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base border-2 border-white px-2 md:px-3 py-1 whitespace-nowrap transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;