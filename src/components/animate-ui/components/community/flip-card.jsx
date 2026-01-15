/* eslint-disable @next/next/no-img-element */
'use client';;
import { easeOut, motion } from 'motion/react';
import * as React from 'react';
import { Button } from '../../primitives/buttons/button';

export default function FlipCard({
  data
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div
      className="mt-2 relative w-40 h-60 md:w-60 md:h-80 perspective-1000 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* FRONT: Profile */}
      
      <motion.div
        className="absolute inset-0 backface-hidden rounded border-white border-1 border-foreground/20 px-4 py-6 flex flex-col items-center justify-between bg-gradient-to-br from-muted via-background to-muted text-center"
        animate={isFlipped ? 'back' : 'front'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d' }}>
        <div className='flex flex-col items-center justify-center'>
            <img
            src={data.image}
            alt={data.name}
            className="size-18 md:size-25 rounded-full object-cover mb-4 border-2" />
          <h2 className="font-['calamitech'] text-lg text-white text-foreground">{data.name}</h2>
          <p className="scale-80 underline underline-offset-3 font-['calamitech'] text-sm text-gray-400">{data.username}</p>
        </div>
        <p className="scale-80 font-['calamitech'] text-xs text-gray-400">{data.date}</p>
      </motion.div>
      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-3 py-3 flex flex-col gap-y-4 bg-gradient-to-tr from-muted via-background to-muted overflow-y-auto"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? 'front' : 'back'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d', rotateY: 180 }}>
        <h5 className="font-bold">Location: 
          <p className="font-normal text-xs md:text-sm text-muted-foreground">
          {data.location}
        </p>
        </h5>
        <h5 className="font-bold">Achievements: 
          <ul className="font-normal text-xs md:text-sm text-muted-foreground">
            {data.bio.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
        </ul>
        </h5>
      </motion.div>
    </div>
  );
}
