import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";
import Footer from "@/components/footer";
import { GetInTouchForm } from "@/components/get-in-touch-form";
import { LetsTalkButton } from "@/components/lets-talk-button";
import Image from "next/image";

export default function MuniciPalitiesPage() {
    return(
        <div>
            {/* first grid */}
            <div className=' grid w-full items-center lg:grid-cols-2 h-[27rem]  md:grid-cols-2  '>
                <div className='px-10'>
                    <BigText 
                        text="Your communities solid waste + recycling solution."/>
                    <p className='text-wrap pt-4 px-1 text-gray-800'>D-Waste offers tailored waste disposal and recycling services for communities and municipalities.
                                       Anything can be disposed off in a safe and efficient manner. D-Waste is an expert in all disposal and recycling services.
                                       See the <span className="text-underline">Recycling page</span> for more information</p>   
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
                        className='overflow-hidden object-cover pb-6'
                    />
                </div>
            </div>

            {/* second grid */}
            <div className='my-5 h-[35rem] bg-violet-50'>
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