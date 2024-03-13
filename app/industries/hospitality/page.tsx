import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";
import Footer from "@/components/footer";
import { GetInTouchForm } from "@/components/get-in-touch-form";
import { LetsTalkButton } from "@/components/lets-talk-button";
import Image from "next/image";

export default function HospitalityPage() {
    return(
        <div>
            {/* first grid */}
            <div className=' grid w-full items-center  md:h-[27rem]  md:grid-cols-2  '>
                <div className='px-10'>
                    <BigText 
                        text="Garbage collection & Recycling Services for your Hospitality Institution"/>
                    <p className='text-wrap pt-4 px-1 text-gray-800'>D-Waste provides affordable waste and recycling services to businesses looking for a smarter sustainable approach.
                                       D-Waste connects companies with independent commercial waste haulers that bid for their business.
                                        Once our haulers get the trash, D-Waste then works with its vendor network to recycle, 
                                        repurpose or convert to energy the materials it has collected.</p>   
                    <div className="flex justify-start py-4">
                        <LetsTalkButton  />
                    </div>        
                </div>
                <div>
                    <Image 
                        src={'/bin.jpeg'}
                        alt='garbage bin'
                        height={550}
                        width={500}
                        className='overflow-hidden object-cover pb-6 mx-auto'
                    />
                </div>
            </div>

            {/* second grid */}
            <div className='my-5 bg-violet-200 md:h-[35rem] md:bg-white'>
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