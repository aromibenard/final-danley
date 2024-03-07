import React, { FC } from 'react';

interface BigTextProps {
  text: string;
}

const BigText: FC<BigTextProps> = ({ text }) => {
  return (
    <h1 className='scroll-m-20 tracking-tight text-transparent text-4xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 via-pink-500 bg-clip-text'>
      {text}
    </h1>
  );
};

export default BigText;
