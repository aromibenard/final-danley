
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
import MediumText from "@/components/medium-text";
import { CarouselPlugin } from "@/components/carousel";
import { InputWithButton } from "@/components/form";
import Link from "next/link";


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
    
    <div className="w-dvw h-[33.302rem] overflow-clip flex justify-center">
      <Image 
        src={'/garbage.jpg'}
        alt="service"
        width={1300}
        height={300}
        quality={100}
        className=" object-cover rounded-lg py-2 shadow-lg"
      />
    </div>

    {/* first column */}
    <div className="grid grid-cols-2 gap-2 h-[33.302rem] items-center mx-4">
     <div className='p-6'>
       <BigText text="Recycle on the Go with the D-Waste App" />
       <p 
        className='py-6'
       >Recycling does not have to be hard to start with. 
       Are you interested in signing up for a recycling service closer to your home or workplace? 
       We just have a solution for you. We pick up your recyclables for recycling</p>
       <div>

        {/* playstore links */}
        <Image 
          src={'/playstore.jpeg'}
          alt="playstore links"
          height={100}
          width={350}
          quality={100}
        />
      </div>


     </div>

     {/* second column */}
     <div className='px-6'>
        <BigText text="Image goes here" />
     </div>

      
    </div>

    {/* 2nd image */}
    <div className='bg-violet-600 w-dvw h-[31.625rem] overflow-hidden'>
      <Image 
          src={'/image2.jpeg'}
          alt="waste management"
          width={1300}
          height={300}
          quality={100}
          className=" object-cover rounded-lg shadow-lg"
        />
    </div>

    {/* first column */}
    <div className='mb-4 items-center h-[33.302rem] grid grid-cols-2 mx-4 gap-2'>
      <div className='p-6'>
        <BigText text='Waste Disposal & Recycling'/>
        <p
          className='py-6'
        >We collect your household & commercial waste + 
         recyclables reliably and sustainably through the use of our own trucks,
         our mobile app, and our network of partner local waste collectors & haulers. 
         Download the D-Waste Mobile app to get started.</p>

        {/* playstore links */}
        <Image 
          src={'/playstore.jpeg'}
          alt="playstore links"
          height={100}
          width={350}
          quality={100}
        />
      </div>

      {/* 2nd column */}
      <div className='mx-12'>
        <Image 
        src={'/person.png'}
        alt="person carrying waste bags"
        width={980}
        height={384}
        quality={100}
        />
      </div>


    </div>

    {/* facts section */}

    <div className='h-[33.302rem] mt-8'>
      <div className='mb-6 mt-14 text-center'>
        <BigText text='Key Facts'/>
      </div>
      <div className=' grid grid-cols-4 items-start mx-28 pt-6'>
        <div>
        <PaperCard 
          title="PARTNER WASTE COLLECTORS"
          duration={4}
          endValue={30}
          
        />
        </div>
        <div>
        <PaperCard 
          title="TONNES OF PLASTIC WASTE RECYCLED"
          duration={4}
          endValue={50}
        />
        </div>
        <div>
        <PaperCard 
          title="TONNES OF HOUSEHOULD WASTE COLLECTED PER DAY"
          duration={4}
          endValue={30}
        />
        </div>
        <div>
        <PaperCard
                  title=" THOUSAND HOUSEHOLDS SERVED"
                  duration={4}
                  endValue={10}
        />
        </div>
      </div>
    </div>
    
    {/* partners section */}
    <div className='my-10 mx-10 h-[36rem]'>
      <div className='text-center'>
        <BigText 
          text="Our Partners"
        />
        <MediumText 
          text="Proud to be associated with the following organisations
          in helping us achieve zero waste communities"
        />
      </div>
      <div className='flex justify-center'>
        <CarouselPlugin />
      </div>
    </div>

    {/* newsletter */}
    <div className=' bg-violet-100 h-[30rem] grid grid-cols-2 items-center'>
      <div>
        <BigText  text="Subscribe to our Newsletter"/>
      </div>

      <div>
        <InputWithButton />

      </div>
      
    </div>
    
    {/* footer */}
    <footer className="h-[20rem]">
      <div className="h-[15rem] grid grid-cols-4">
        <div>
          <Image 
          src={'/logo.png'}
          alt={'logo'}
          width={80}
          height={80}
          />
          <div className='flex'>
            <MobileIcon/>
            <p>0792775784</p>
          </div>
          <div className='flex'>
            <EnvelopeClosedIcon/>
            <p>danleywaste@gmail.com</p>
          </div>
          <div className='flex'>
            <SewingPinFilledIcon/>
            <p>Nairobi West</p>
          </div>
        </div>

        <div>
          <h2>Services</h2>
          <Link href={'/services/home'}>
            Trash Collection & Recycling for Home
          </Link>
          <Link href={'/services/business'}>
            Waste Disposal & Recycling for Business
          </Link>
          <Link href={'/services/recycling'}>
            Plastic Waste Recycling
          </Link>
          <Link href={'/services'}>
            Smart Waste solutions
          </Link>
        </div>

        <div>
          <h2>Company</h2>
          <Link href={'/services/home'}>
            Our Story
          </Link>
          <Link href={'/company/mission'}>
            Our Mission
          </Link>
          <Link href={'/company/objectives'}>
            Our Core Objectives
          </Link>
          <Link href={'/company/values'}>
            Our Values
          </Link>
          <Link href={'/company/team'}>
            Our Team
          </Link>
        </div>

        <div>
          <h2>Get started</h2>
          Image
        </div>
        
      </div>

      <div className='flex justify-center'>
        <p>Copyright 2024</p>
      </div>

    </footer>


    
  </div>
  );
}
