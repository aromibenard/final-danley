'use client'

import { EnvelopeClosedIcon, MobileIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { CopyrightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
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

        <div className='py-4 mx-4'>
          <h2 className='py-2 font-bold'>Company</h2>
          <div className="hover:underline underline-offset-2">
            <Link href={'/company/about'}>
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
      <div className='flex justify-center my-6 italic'>
        <CopyrightIcon className="p-1 text-gray-800"/>
        <p className='italic text-sm text-gray-800'>Copyright 2024</p>
      </div>
    </footer>
    );
}