

function ProjectComponent({data}) {
    return (
        <div className="flex flex-row items-center gap-8 p-6">
            <div className="w-64 h-64 flex-shrink-0">
                <img 
                    src={data.imageURL}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-lg"
                >
                </img>
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
                <h5 className="font-bold text-white">Overview:
                    <p className="font-normal text-xs md:text-sm text-muted-foreground">
                        {data.overview}
                    </p>
                </h5>
                <h5 className="font-bold text-white">Tech Stack:
                    <p className="font-normal text-xs md:text-sm text-muted-foreground">
                        {data.techstack}
                    </p>
                </h5>
                <h5 className="font-bold text-white">Details:
                    <ul className="font-normal text-xs md:text-sm text-muted-foreground text-white">
                        {data.details.map((item, index) => (
                        <li key={index}>- {item}</li>
                        ))}
                    </ul>
                </h5>
            </div>
        </div>
    );
}

export default ProjectComponent;