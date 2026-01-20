import  ProjectComponent   from "./ProjectComponent";

function Projects() {

    const Projects = [
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'This is reactive native app that allows users to record, share, and listen to short audio clips.',
        techstack:' AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        details: ["Incoming January 2026..."],
        }
    ];


    return (
        <div>
            <div className="md:scale-130 absolute px-14 py-30 flex-col md:px-12 md:py-12 md:top-[20%] md:left-[10%] md:flex-row flex-wrap max-h-full max-w-full flex gap-4 md:gap-7">
                
                {Projects.map((item, index) => ((
                    <div key={index} className="md:scale-110  portfolio-button md:px-8 py-[10px] transition-all">
                    <ProjectComponent data={item} />
                    </div>  
                    )))
                }

            </div>
            
        </div>
    )
}

export default Projects;