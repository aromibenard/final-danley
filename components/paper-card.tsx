'use client'

import * as React from 'react';
import { Stack , Paper, styled} from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface PaperCardProps {
    title?: string;
    endValue : number;
    duration: number;
}
const DataPaper = styled(Paper)(({ theme }) => ({
    width: 210,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center'
}))

const PaperCard: React.FC<PaperCardProps> = ({ title, endValue, duration }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-100px 0px',
    });
  
    return (
      <Stack direction="row" spacing={2} ref={ref}>
        <DataPaper square={false} elevation={1} className='text-2xl'>
          { <div className='grid items-center'>
             {inView && <CountUp end={endValue} duration={duration} className='text-3xl font-black italic text-gray-800'/>}
             {title && 
               <div 
                  className='italic text-gray-800'
                >
                  {title}
                </div>
             }
            </div>
          }
        </DataPaper>
      </Stack>
    );
  };
  
  export default PaperCard;