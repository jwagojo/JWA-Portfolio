import  ProjectComponent   from "./ProjectComponent";

function Projects() {

    const Projects = [
        {
        name: 'Audiobyte',
        imageURL: '../src/assets/img/Audiobyte.jpg',
        overview: 'A reactive web app that allows users to record, share, and listen to audio files.',
        techstack:'AWS (S3, DynamoDB, Lambda, Cognito), React.js, JavaScript, GraphQL, Tailwind CSS, Python CDK',
        link: 'https://github.com/jwagojo/AudioByte',
        details: ["Developed a full-stack cloud-native music streaming platform with secure authentication, real-time audio playback, and personalized library management using React.js and AWS serverless infrastructure.",
                  "Engineered scalable backend using AWS CDK to provision S3 for audio storage, DynamoDB for metadata, Lambda for serverless compute, and implemented a GraphQL API for efficient data queries.",
                  "Built interactive music player with context-based state management and protected routing architecture using JWT authentication for secure access to user-specific features."
        ]
        },
        {
        name: 'ChaChing',
        imageURL: '../src/assets/img/ChaChing.jpg',
        overview: 'A reactive web app that allows users to close registers more efficiently (Specifically made for Gong Cha Stores).',
        techstack:'JavaScript, React.js, Azure Cosmos DB, Tailwind CSS',
        link: 'https://github.com/jwagojo/ChaChing',
        details: ["Developed a proprietary calculation engine that analyzes cash drawer contents and determines optimal allocation of cash bills in the register and the distribution between daily revenue collection and safe storage.",
                  "Built on Azure Cosmos DB for scalable document storage, enabling real-time synchronization across multiple storelocations with automatic backup.",
                  "Integrated a PDF generation system which utilized the jsPDF API to create detailed closing reports and calculation logs for printing."
        ]
        },
        {
        name: 'Styler',
        imageURL: '../src/assets/img/Styler.jpg',
        overview: 'A mobile application that allows users to virtualize their wardrobe and create outfits.',
        techstack:'Java, Android SDK, Room Database, Retrofit, Model-view-viewmodel (MVVM) architecture',
        link: 'https://github.com/jwagojo/Styler',
        details: ["Developed a native Android wardrobe management application enabling users to digitize their closet, automate image processing, and visually coordinate outfit combinations.",
                  "Engineered a robust offline-first architecture using Room Database for structured storage of clothing items and outfit compositions, ensuring persistent data access across sessions."
        ]
        },
        {
        name: 'Golf Tracker (Work in Progress)',
        imageURL: '../src/assets/img/GolfTracker.png',
        overview: 'A Python-based video analysis tool that uses YOLOv8 and SORT algorithms to detect golf balls and track strokes, generating annotated video and JSON data exports.',
        techstack:'Python, YOLOv8, OpenCV, SAM2, Supervision',
        link: 'https://github.com/jwagojo/Golf-Tracker',
        details: ["Engineered an advanced video analysis system using Python, YOLOv8(computer vision), and the SORT algorithm to accurately detect and track golf balls and players in video.",
                  "Developed a custom stroke detection to identify ball strikes by analyzing sudden, significant increases in the ball’s pixel-based velocity",
                  "Implemented a tracking pipeline with OpenCV and Supervision for frame processing and visual annotation, exporting performance data(max speed, distance, duration) for each stroke to JSON."
        ]
        },
        {
        name: 'Sokoban',
        imageURL: '../src/assets/img/Sokoban.png',
        overview: 'A C++ puzzle game built with the SFML library that features sprite-based rendering, crate-pushing mechanics with collision detection, and audio feedback for victory conditions.',
        techstack:'C++, Linux, Simple and Fast Multimedia Library (SFML), Unit Testing',
        link: 'https://github.com/jwagojo/Sokoban',
        details: ["Engineered a 2D Sokoban game using C++ and SFML, strictly adhering to Object-Oriented Programming (OOP) principles to deliver a clean and maintainable codebase.",
                  "Developed robust core mechanics, including box-pushing logic and a thorough win-state detection, validated through unit tests for reliable gameplay.",
                  "Implemented a data-driven level generation system capable of dynamically loading game layouts for each level using external files, ensuring flexible content scaling."
        ]
        }
    ];


    return (
            <div className="absolute py-20 left-[10%] top-6 bottom-6 flex-col md:flex-row flex-wrap flex gap-4 md:gap-7 overflow-y-auto">
                
                {Projects.map((item, index) => ((
                    <div key={index} className="portfolio-button px-8 py-[40px] transition-all">
                    <ProjectComponent data={item} />
                    </div>  
                    )))
                }

            </div>
    )
}

export default Projects;