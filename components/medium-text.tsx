import React, { FC } from 'react';

interface MediumTextProps {
  text: string;
}

const MediumText: FC<MediumTextProps> = ({ text }) => {
  return (
    <h2 className='py-4 text-lg bg-gradient-to-r from-grey-400 to-violet-400 via-blue-300 bg-clip-text'>
      {text}
    </h2>
  );
};

export default MediumText;