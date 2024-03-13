import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";
import Footer from "@/components/footer";
import { GetInTouchForm } from "@/components/get-in-touch-form";
import { LetsTalkButton } from "@/components/lets-talk-button";
import Image from "next/image";

export default function MissionPage() {
    return(
        <div>
            {/* first grid */}
            <div className=' grid w-full items-center  md:h-[30rem]  md:grid-cols-2  '>
                <div className='px-10'>
                    <BigText 
                        text="Our Mission"/>
                    <p className='text-wrap pt-4 px-1 text-gray-800'>Our mission is to build zero waste communities, one city at a time. 
                                       This starts by making sure waste never ends up in illegal dumps in our communities but rather goes to re-using & recycling. 
                                       We believe technology is important for creating an effective and transparent circular waste company in Africa.</p>   
        
                </div>
                <div>
                    <Image 
                        src={'/bin.jpeg'}
                        alt='garbage bin'
                        height={550}
                        width={500}
                        className='overflow-hidden object-contain my-auto'
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
                <div className="grid p-4 lg:grid-cols-2 md:grid-cols-2 gap-2 items-center">
                    <div className="p-4">
                        <GetInTouchForm />
                    </div>
                    <div className="mx-auto mb-6">
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