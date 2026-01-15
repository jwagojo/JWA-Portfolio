import  FlipCard   from "./animate-ui/components/community/flip-cardprojects";

function Projects() {

    const data = [
        {
        name: 'SECTION IS WORK IN PROGRESS',
        username: 'WIP',
        location:'Lowell, MA',
        bio: ["Incoming January 2026..."],
        date: 'Jan 2026 - Present'
        }
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

export default Projects;