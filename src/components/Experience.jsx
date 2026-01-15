import  FlipCard   from "./animate-ui/components/community/flip-card";

function Experience() {

    const data = [
        {
        name: 'IBM',
        username: 'Software Developer Co-op',
        image:
            'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
        location:'Lowell, MA',
        bio: ["Incoming January 2026..."],
        date: 'Jan 2026 - Present'
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
        <div>
            <div className="md:scale-130 absolute px-14 py-30 flex-col md:px-12 md:py-12 md:top-[20%] md:left-[10%] md:flex-row flex-wrap max-h-full max-w-full flex gap-4 md:gap-7">
                
                {data.map((item, index) => ((
                    <div key={index} className="md:scale-110  portfolio-button md:px-8 py-[10px] transition-all">
                    <FlipCard data={item} />
                    </div>
                    )))
                }

            </div>
            
        </div>
    )
}

export default Experience;