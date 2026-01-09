
function Contact() {
    const list = [
        { name: 'Github: @jwagojo', url : 'https://github.com/jwagojo' },
        { name: 'LinkedIn: John-Wesley-Agojo', url : 'https://www.linkedin.com/in/john-wesley-agojo/'},
        { name: 'Instagram: @jwagojo', url : 'https://www.instagram.com/jwagojo'}

    ]
    return (
        <div>

            <div className={`absolute flex-col top-[30%] left-1/2 -translate-x-1/2 z-[3] flex gap-7 items-center`}>
                        <a
                                    className="text-sm md:text-2xl w-fit portfolio-button text-white no-underline font-['IBM_Plex_Mono',_monospace] border-2 border-white px-10 py-[15px] transition-all duration-300 whitespace-nowrap"
                        > 
                            Email: agojo62@gmail.com
                        </a>
                        {
                            list.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm md:text-2xl w-fit portfolio-button text-white no-underline font-['IBM_Plex_Mono',_monospace] border-2 border-white px-10 py-[15px] transition-all duration-300 whitespace-nowrap"
                                >
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>

        </div>
    )
}

export default Contact;