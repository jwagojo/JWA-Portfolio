

function ProjectComponent({data}) {

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <a className={`flex items-center gap-8 p-6 ${isMobile ? 'flex-col' : 'flex-row'}`} 
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        >
            <div className="w-64 h-64 flex-shrink-0">
                <img 
                    src={data.imageURL}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-lg"
                >
                </img>
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 bg-white rounded-md text-black p-1 inline-block w-fit">{data.name}</h2>
                <h5 className="font-bold underline text-white">Overview:
                </h5>
                <p className="font-normal text-sm md:text-base text-muted-foreground text-white">
                        {data.overview}
                    </p>
                <h5 className="font-bold underline text-white">Tech Stack:
                </h5>
                <p className="font-normal text-sm md:text-base text-muted-foreground text-white">
                        {data.techstack}
                    </p>
                <h5 className="font-bold underline text-white">Details:
                </h5>
                <ul className="font-normal text-sm md:text-base text-muted-foreground text-white">
                        {data.details.map((item, index) => (
                        <li key={index}>- {item}</li>
                        ))}
                    </ul>
            </div>
        </a>
    );
}

export default ProjectComponent;