'use client'

import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

export const AnimatedImage = () => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(true);
  }, []); 

  const zoomAnimation = useSpring({
    transform: zoomed ? 'scale(1.2)' : 'scale(1)',
    config: {...config.slow, duration: 7000 }
  });

  const overlayStyle:React.CSSProperties = {
    position: 'relative',
    bottom: '20',
    left: '0',
    width: '100%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
    padding: '25px',
    boxSizing: 'border-box',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  return (
    <div className='overflow-clip min-w-dvw'>
      <animated.img
        src="/firstimg.png"
        alt="Landing Image"
        style={{ ...zoomAnimation }}
        className='object-cover w-full overflow-clip h-[30rem]' 
      />
      <div style={overlayStyle}>
         <p className=" text-2xl md:text-4xl font-bold">Building Zero Waste Communities, One City at a time</p>
      </div>
    </div>
  );
};




