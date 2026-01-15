function Skills() {
    const skills = ['C', 'C++', 'CSS3', 'GRAPHQL', 'HTML5', 'JAVA', 'JAVASCRIPT', 'KOTLIN', 'TYPESCRIPT', 'WINDOWS TERMINAL', 'AWS', 'AZURE', 'FIREBASE', 'NETLIFY', 'VERCEL', 'BOOTSTRAP', 'EXPO', 'JQUERY', 'NPM', 'NEXT', 'NODE.JS', 'OPENCV', 'REACT NATIVE', 'REACT', 'PNPM', 'REACT QUERY', 'REACT ROUTER', 'REACT HOOK FORM', 'SPRING', 'TAILWINDCSS', 'VITE', 'FIREBASE', 'AMAZON DYNAMODB', 'MONGODB', 'MYSQL', 'POSTGRES', 'PRISMA', 'FIGMA', 'CANVA', 'NUMPY', 'GIT', 'GITHUB', 'TRELLO']

    return (
        <div>

            <div className={`scale-90 md:scale-100 max-h-full max-w-full absolute md:flex-row flex-wrap top-[10%] md:top-[25%] left-1/2 -translate-x-1/2 z-[3] flex gap-2 md:gap-7 items-center`}>
                        {
                            skills.map((skill, index) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-extrabold text-xs md:text-base w-fit portfolio-button text-white no-underline font-['IBM_Plex_Mono',_monospace] border-2 border-white px-2 py-[5px] transition-all duration-300 whitespace-nowrap"
                                >
                                    {skill}
                                </a>
                            ))
                        }
                    </div>

        </div>
    )
}

export default Skills;