import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";
import Footer from "@/components/footer";
import { GetInTouchForm } from "@/components/get-in-touch-form";
import { LetsTalkButton } from "@/components/lets-talk-button";
import Image from "next/image";

export default function ObjectivesPage() {
    return(
        <div>
            {/* first grid */}
            <div className=' grid w-full items-center lg:grid-cols-2 h-[32rem]  md:grid-cols-2  '>
                <div className='px-10'>
                    <BigText 
                        text="Our Core Objectives"/>
                                    <ul className="py-3 decoration-inherit">
                                       <li>To create a full waste & recycling company focussed on sustainability</li>
                                       <li>To work with customers and recycling firms to divert wastes from landfills</li>
                                       <li>To develop new & innovative technologies focussed on waste management & recycling</li>
                                       <li>To disrupt the waste management industry in Africa</li>
                                       <li>To connect haulers & recyclers with businesses & households to reduce unnecessary 
                                       waste transportation costs and save both environmental & economic resources.</li>
                                    </ul>   
                    <div className="flex justify-start py-4">
                        <LetsTalkButton  />
                    </div>        
                </div>
                <div>
                    <Image 
                        src={'/garbageman.png'}
                        alt='groceries'
                        height={500}
                        width={400}
                        className='overflow-hidden object-contain my-auto'
                    />
                </div>
            </div>

            {/* second grid */}
            <div className='my-5 h-[35rem] '>
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