
import { NavigationMenuDemo } from "@/components/nav-bar";
import Image from "next/image";
import { 
  MagnifyingGlassIcon,
  MobileIcon,
  EnvelopeClosedIcon,
  SewingPinFilledIcon
} from '@radix-ui/react-icons';
import BigText from "@/components/big-text";
import PaperCard from "@/components/paper-card";
import { CarouselPlugin } from "@/components/carousel";
import { InputWithButton } from "@/components/form";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AnimatedImage } from "@/components/animated-image";
import CopyrightIcon from '@mui/material/Icon';
import { AppStoreButton } from "@/components/ios-appstore-button";
import { PlaystoreButton } from "@/components/playstore-button";
import Partners from "@/components/partners";



export default function Home() {
  return (
  <div className="h-dvh">
    <div className="flex justify-around items-center">
      <Image 
        src={'/logo.png'}
        alt={'logo'}
        width={80}
        height={80}
      />
      <NavigationMenuDemo />
      <div className="">
        <MagnifyingGlassIcon />
      </div>
      <div className="">
      </div>
    </div>

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
        <div className="flex mx-2 justify-around">
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
       <div className="flex justify-around">
          <div>
            <AppStoreButton />
          </div>

          <div>
            <PlaystoreButton />
          </div>
        </div>
      </div>

      {/* 2nd column */}
      <div className=''>
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

    <div className='h-[30rem] mt-8'>
      <div className='mb-6 mt-14 text-center'>
        <BigText text='Key Facts'/>
      </div>
      <div className=' grid grid-cols-4 items-start lg:mx-28 md:mx-10 '>
        <div>
          <PaperCard 
            title="Partner Waste Collectors"
            duration={4}
            endValue={30}
            
          />
        </div>
        <div>
        <PaperCard 
          title="Tonnes of Plastic Waste Recycled"
          duration={4}
          endValue={50}
        />
        </div>
        <div>
        <PaperCard 
          title="Tonnes of Household Waste Collected Per Day"
          duration={4}
          endValue={30}
        />
        </div>
        <div>
        <PaperCard
                  title=" Thousand Households Served"
                  duration={4}
                  endValue={10}
        />
        </div>
      </div>
    </div>
    
    {/* partners section */}
    <div className=' mx-10 h-[33rem]'>
      <div className='text-center'>
        <BigText 
          text="Our Partners"
        />
        <p className="py-2">Proud to be associated with the following organisations
          in helping us achieve zero waste communities</p>
      </div>
      <div className='flex justify-center'>
        <Partners />
      </div>
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
    <footer className="h-[15rem] bg-purple-600">
      <div className="h-[12rem] grid grid-cols-3">
        <div className='px-6 h-11/12'>
          <Image 
          src={'/logo.png'}
          alt={'logo'}
          width={80}
          height={80}
          />
          <div className='flex space-x-2'>
            <MobileIcon/>
            <p>0700356545</p>
          </div>
          <div className='flex space-x-2'>
            <EnvelopeClosedIcon/>
            <p>danleywaste@gmail.com</p>
          </div>
          <div className='flex space-x-2'>
            <SewingPinFilledIcon/>
            <p>Nairobi West</p>
          </div>
        </div>

        <div className='py-4 mx-4'>
          <h2 className='font-bold py-2'>Services</h2>
          <div className="hover:underline underline-offset-2">
            <Link href={'/services/home'} >
              Trash Collection & Recycling for Home
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/services/business'}>
              Waste Disposal & Recycling for Business
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/services/recycling'}>
              Plastic Waste Recycling
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/services'}>
              Smart Waste solutions
            </Link>
          </div>
        </div>

        <div className='py-4 mx-4'>
          <h2 className='py-2 font-bold'>Company</h2>
          <div className="hover:underline underline-offset-2">
            <Link href={'/services/home'}>
              Our Story
            </Link>
          </div>
          <div className="hover:underline underline-offset-2" >
            <Link href={'/company/mission'}>
              Our Mission
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/company/objectives'}>
              Our Core Objectives
            </Link>
          </div>
          <div className="hover:underline underline-offset-2" >
            <Link href={'/company/values'}>
              Our Values
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/company/team'}>
              Our Team
            </Link>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center my-6'>
        <CopyrightIcon/>
        <p className=''>Copyright 2024</p>
      </div>


    </footer>



  </div>
  
  );
}
