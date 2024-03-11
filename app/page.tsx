
import { NavigationMenuDemo } from "@/components/nav-bar";
import Image from "next/image";
import { MagnifyingGlassIcon} from '@radix-ui/react-icons';
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
  <div className="h-dvh">
    

    {/* slider section */}
    <AnimatedImage/>

    {/* first column */}
    <div className="grid grid-cols-2 gap-2 h-[33.302rem] items-center mx-6">
      <div className='p-6'>
        <BigText text="Recycle on the Go with the D-Waste App" />
        <p 
          className='py-6'
        >Recycling does not have to be hard to start with. 
        Are you interested in signing up for a recycling service closer to your home or workplace? 
        We just have a solution for you. We pick up your recyclables for recycling</p>

        {/* playstore links */}
        <div className="flex mx-2 justify-between py-4">
          <div>
            <AppStoreButton/>
          </div>
          <div>
            <PlaystoreButton/>
          </div>
        </div>
     </div>

     {/* second column */}
     <div className='mb-4'>
      <AspectRatio ratio={16/9}>   
          <Image 
              src={'/appdemo.png'}
              alt='Link to apple store'
              height={550}
              width={500}
              className='overflow-hidden object-cover pb-6'/>
          </AspectRatio>
     </div>

      
    </div>

    {/* 2nd image */}
    <div className='bg-violet-600 w-dvw h-[31.625rem] overflow-hidden'>
      <AspectRatio ratio={16/9}>   
          <Image 
              src={'/secondimg.png'}
              alt='Link to apple store'
              height={500}
              width={180}
              quality={100}
              className='overflow-hidden w-full object-cover'/>
      </AspectRatio>
    </div>

    {/* first column */}
    <div className='mb-4 items-center h-[33.302rem] grid grid-cols-2 mx-6 gap-3'>
      <div className='p-6'>
        <BigText text='Waste Disposal & Recycling'/>
        <p
          className='py-6'
        >We collect your household & commercial waste + 
         recyclables reliably and sustainably through the use of our own trucks,
         our mobile app, and our network of partner local waste collectors & haulers. 
         Download the D-Waste Mobile app to get started.</p>

        {/* playstore links */}
       <div className="flex justify-between py-4">
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
    <KeyFacts />
    
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
