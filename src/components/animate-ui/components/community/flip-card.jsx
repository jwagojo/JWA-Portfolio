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
        className="absolute inset-0 backface-hidden rounded-md border-gray-500 border-1 border-foreground/20 px-4 py-6 flex flex-col items-center justify-center bg-gradient-to-br from-muted via-background to-muted text-center"
        animate={isFlipped ? 'back' : 'front'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d' }}>
        <img
          src={data.image}
          alt={data.name}
          className="size-20 md:size-24 rounded-full object-cover mb-4 border-2" />
        <h2 className="text-2xl text-black font-bold text-foreground">{data.name}</h2>
        <p className="text-black">{data.username}</p>
      </motion.div>
      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-6 flex flex-col justify-between items-center gap-y-4 bg-gradient-to-tr from-muted via-background to-muted "
        initial={{ rotateY: 180 }}
        animate={isFlipped ? 'front' : 'back'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d', rotateY: 180 }}>
        <p className="text-xs md:text-sm text-muted-foreground text-center">
          {data.bio}
        </p>

        <div className="px-6 flex items-center justify-between w-full">
          <div>
            <p className="text-base font-bold">{data.stats.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
          <div>
            <p className="text-base font-bold">{data.stats.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          {data.stats.posts && (
            <div>
              <p className="text-base font-bold">{data.stats.posts}</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div>
          )}
        </div>

          
          
          <Button>Follow</Button>
      </motion.div>
    </div>
  );
}
