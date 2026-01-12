import  FlipCard   from "./animate-ui/components/community/flip-card";

function Experience() {

    const data = [
        {
        name: 'IBM',
        username: 'Software Developer Co-op',
        image:
            'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
        bio: 'Incoming January 2026...',
        stats: { following: 200, followers: 2900, posts: 120 }
        }, 
        
        {
        name: 'Vierra Digital',
        username: 'Software Engineer Intern',
        image:
            'https://media.licdn.com/dms/image/v2/D4E0BAQEdmQKS5qlc5Q/company-logo_200_200/company-logo_200_200/0/1697647304213/vierra_logo?e=2147483647&v=beta&t=CskVln4C4yCgZ8OnuZeO6O2qqVhSxDszQVvadfVyD1A',
        bio: 'Incoming January 2026...',
        stats: { following: 200, followers: 2900, posts: 120 }
        },
        
        {
        name: 'UML TFC',
        username: 'President',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUWrxeJVbvFammBZPF11hAnOSPob3oNDQdg&s',
        bio: 'Incoming January 2026...',
        stats: { following: 200, followers: 2900, posts: 120 }
        }, 
    ];


    return (
        <div>
            <div className="absolute flex-row flex-wrap top-[12%] md:top-[25%] left-1/2 -translate-x-1/2 z-[3] flex gap-3 md:gap-7 items-center">
                
                {data.map((item, index) => ((
                    <div key={index} className="md:scale-120  w-fit portfolio-button   px-20 py-[30px] transition-all duration-300 whitespace-nowrap">
                    <FlipCard data={item} />
                    </div>
                    )))
                }

            </div>
            
        </div>
    )
}

export default Experience;