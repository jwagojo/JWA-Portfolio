import  ProjectComponent   from "./ProjectComponent";

function Projects() {

    const Projects = [
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'This is reactive native app that allows users to record, share, and listen to audio files.',
        techstack:' AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        link: 'https://github.com/jwagojo/AudioByte',
        details: ["Developed a full-stack cloud-native music streaming platform with secure authentication, real-time audio playback, and personalized library management using React.js and AWS serverless infrastructure.",
                  "Engineered scalable backend using AWS CDK to provision S3 for audio storage, DynamoDB for metadata, Lambda for serverless compute, and implemented a GraphQL API for efficient data queries.",
                  "Built interactive music player with context-based state management and protected routing architecture using JWT authentication for secure access to user-specific features."
        ]
        },
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'This is reactive native app that allows users to record, share, and listen to short audio clips.',
        techstack:' AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        link: 'https://github.com/jwagojo/AudioByte',
        details: ["Developed a full-stack cloud-native music streaming platform with secure authentication, real-time audio playback, and personalized library management using React.js and AWS serverless infrastructure.",
                  "",
                  ""
        ]
        },
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'This is reactive native app that allows users to record, share, and listen to short audio clips.',
        techstack:' AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        link: 'https://github.com/jwagojo/AudioByte',
        details: ["Developed a full-stack cloud-native music streaming platform with secure authentication, real-time audio playback, and personalized library management using React.js and AWS serverless infrastructure.",
                  "",
                  ""
        ]
        },
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'This is reactive native app that allows users to record, share, and listen to short audio clips.',
        techstack:' AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        link: 'https://github.com/jwagojo/AudioByte',
        details: ["Developed a full-stack cloud-native music streaming platform with secure authentication, real-time audio playback, and personalized library management using React.js and AWS serverless infrastructure.",
                  "",
                  ""
        ]
        },
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'This is reactive native app that allows users to record, share, and listen to short audio clips.',
        techstack:' AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        link: 'https://github.com/jwagojo/AudioByte',
        details: ["Developed a full-stack cloud-native music streaming platform with secure authentication, real-time audio playback, and personalized library management using React.js and AWS serverless infrastructure.",
                  "",
                  ""
        ]
        }
    ];


    return (
        <div>
            <div className="md:scale-100 absolute px-14 py-30 flex-col md:px-12 md:py-12 md:top-[20%] md:left-[10%] md:flex-row flex-wrap max-h-full max-w-full flex gap-4 md:gap-7 overflow-y-auto">
                
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