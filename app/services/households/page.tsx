import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";
import Footer from "@/components/footer";
import { GetInTouchForm } from "@/components/get-in-touch-form";
import { LetsTalkButton } from "@/components/lets-talk-button";
import Image from "next/image";

export default function HouseHoldsPage() {
    return(
        <div>
            {/* first grid */}
            <div className=' grid w-full items-center  md:h-[27rem]  md:grid-cols-2  '>
                <div className='px-10'>
                    <BigText 
                        text="Garbage Collection & Recycling Services for Residential Clients"/>
                    <p className='text-wrap pt-4 px-1 text-gray-800'>D-Waste provides affordable waste and recycling services to residential clients looking for a smarter, reliable & eco-friendly approach.
                    D-Waste connects residential households with independent waste haulers in their communities. Once our haulers get the trash, 
                    D-Waste then works with its vendor network to dispose of or recycle, repurpose & convert to energy the materials collected.</p>   
                    <div className="flex justify-start py-4">
                        <LetsTalkButton  />
                    </div>        
                </div>
                <div>
                    <Image 
                        src={'/appdemo.png'}
                        alt='app demo'
                        height={550}
                        width={500}
                        className='overflow-hidden object-cover pb-6 mx-auto'
                    />
                </div>
            </div>

            {/* second grid */}
            <div className='my-5 md:h-[35rem] bg-violet-200'>
                <div>
                    <div className='py-6 flex justify-center'>
                        <BigText text="Get in Touch"/>
                    </div>
                    <p className='text-gray-800 px-10'>Our Team will work with you to help solve your waste management challenges. We build a customized waste collection,
                             recycling, and sustainability plans for businesses and communities. Do you need waste bins/dumpsters
                             ? We offer that too!</p>
                </div>
                <div className="grid p-4 grid-rows-2 md:grid-cols-2 gap-2 items-center">
                    <div className="p-4">
                        <GetInTouchForm />
                    </div>
                    <div className="mx-auto md:mb-6">
                        <ContactCard />
                    </div>
                </div>
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}