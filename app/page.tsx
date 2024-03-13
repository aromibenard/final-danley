
import Image from "next/image";
import BigText from "@/components/big-text";
import { InputWithButton } from "@/components/form";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AnimatedImage } from "@/components/animated-image";
import { AppStoreButton } from "@/components/ios-appstore-button";
import { PlaystoreButton } from "@/components/playstore-button";
import Partners from "@/components/partners";
import Footer from "@/components/footer";
import KeyFacts from "@/components/facts";



export default function Home() {
  return (
  <div className="grid h-dvh">
    

    {/* slider section */}
    <div className="w-full">
      <AnimatedImage/>
    </div>

    {/* first column */}
    <div className="grid  grid-rows-2 mx-4 md:grid-cols-2 md:gap-2 h-[33.302rem] items-center md:mx-6">
      <div className='p-6 mx-auto'>
        <BigText text="Recycle on the Go with the D-Waste App" />
        <p 
          className='py-6'
        >Recycling does not have to be hard to start with. 
        Are you interested in signing up for a recycling service closer to your home or workplace? 
        We just have a solution for you. We pick up your recyclables for recycling</p>

        {/* playstore links */}
        <div className="flex flex-col justify-center space-y-4 md:mx-2 md:justify-between py-4">
          <div>
            <AppStoreButton/>
          </div>
          <div>
            <PlaystoreButton/>
          </div>
        </div>
        </div>
     

     {/* second column */}
     <div className='overflow-hidden'>
      <AspectRatio ratio={16/9}>   
          <Image 
              src={'/appdemo.png'}
              alt='Link to apple store'
              height={550}
              width={500}
              className='overflow-hidden h-[19rem] object-contain md:h-full'/>
          </AspectRatio>
     
      </div>

      
    </div>

    {/* 2nd image */}


    {/* first column */}
    <div className='mb-4 items-center md:h-[33.302rem] grid grid-rows-2 md:grid-cols-2 md:mx-6 mx-4 md:gap-3'>
      <div className='p-6'>
        <BigText text='Waste Disposal & Recycling'/>
        <p
          className='py-6'
        >We collect your household & commercial waste + 
         recyclables reliably and sustainably through the use of our own trucks,
         our mobile app, and our network of partner local waste collectors & haulers. 
         Download the D-Waste Mobile app to get started.</p>

        {/* playstore links */}
       <div className="flex flex-col justify-center space-y-4 md:mx-2 md:justify-between py-4">
          <div>
            <AppStoreButton />
          </div>

          <div>
            <PlaystoreButton />
          </div>
        </div>
      </div>

      {/* 2nd column */}
      <div className='px-4 ml-6'>
        <AspectRatio ratio={4/3}>   
         <Image 
            src={'/garbageman.png'}
            alt='man carrying garbage bag'
            height={400}
            width={300}
            className='overflow-hidden object-cover'/>
        </AspectRatio>
      </div>


    </div>

    {/* facts section */}
    <div className="mx-10">
     <KeyFacts />
    </div>
    
    {/* partners section */}
    <div className=' mx-10 h-[33rem]'>
      <div className='text-center py-4'>
        <BigText 
          text="Our Partners"
        />
        <p className="py-2">Proud to be associated with the following organisations
          in helping us achieve zero waste communities</p>
      </div>

        <Partners />
    
    </div>

    {/* newsletter */}
    <div className=' bg-violet-300 h-[20rem] grid grid-cols-2 items-center'>
      <div className='mx-6'>
        <BigText  text="Subscribe to our Newsletter"/>
      </div>

      <div>
        <InputWithButton />

      </div>
      
    </div>
    
    {/* footer */}
    <Footer />
  </div>
  
  );
}
