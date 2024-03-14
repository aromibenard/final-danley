'use client'

import { EnvelopeClosedIcon, MobileIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { CopyrightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="h-[35rem] md:h-[15rem] bg-violet-400">
      <div className="  md:h-[13rem] grid md:grid-cols-3 grid-rows-3">
        <div className='px-6 h-11/12'>
        <Image 
            src={'/logo2.jpg'}
            alt={'logo'}
            width={80}
            height={90}
            className="rounded-xl p-2"
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
            <Link href={'/services/households'} >
              Trash Collection & Recycling for Home
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/industries/hospitality'}>
              Waste Disposal & Recycling for Business
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/'}>
              Plastic Waste Recycling
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/services/households'}>
              Smart Waste solutions
            </Link>
          </div>
        </div>

        <div className='  md:py-4 mx-4'>
          <h2 className='py-2 font-bold'>Company</h2>
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
            <Link href={'/company/partners'}>
              Our Partners
            </Link>
          </div>
          <div className="hover:underline underline-offset-2">
            <Link href={'/'}>
              Our Team
            </Link>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center md:my-6 italic bg-violet-400'>
        <CopyrightIcon className="p-1 text-white"/>
        <p className='italic text-sm text-white'>Copyright 2024</p>
      </div>
    </footer>
    );
}