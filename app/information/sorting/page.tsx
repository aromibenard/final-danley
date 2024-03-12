import BigText from "@/components/big-text";
import Footer from "@/components/footer";

export default function SortingGuide() {
    return (

            <div className="grid">
                <div className='w-full mx-auto md:max-w-[40rem] lg:max-w-[50rem] '>
                    <div className="pt-5 pb-2 mt-4">
                        <BigText text="Food Waste"/>
                    </div>
                    <div>
                        <p>
                        Separate your food waste in a separate container or bag marked with organic or food waste. Food waste may contain leftover foods,
                        banana peelings, rotten tomatoes and etc.Scraps from your kitchen can go into the Yard & Kitchen bin,
                        which will be emptied twice a month and the contents delivered to the composting center</p>
                    </div>
                </div>
                <div className='w-full mx-auto md:max-w-[40rem] lg:max-w-[50rem] '>
                    <div className="pt-5 pb-2 mt-4">
                        <BigText text="Plastic Waste"/>
                    </div>
                    <div>
                        <p>This consists of drinking bottles, containers, jars, bottles, and many other products that can
                            be found in your household. Put this type of waste in a recyclable bag or container marked with plastic waste.</p>
                    </div>
                </div>
                <div className='w-full mx-auto md:max-w-[40rem] lg:max-w-[50rem] '>
                    <div className="pt-5 pb-2 mt-4">
                        <BigText text="Paper Waste"/>
                    </div>
                    <div>
                        <p>Paper discarded after use. paper, 
                        a material made of cellulose pulp derived mainly from wood or rags or certain grasses.
                        Put waste paper in the recyclable bag or trash bag marked paper waste.</p>
                    </div>
                </div>
                <div className='w-full mb-16 mx-auto md:max-w-[40rem] lg:max-w-[50rem] '>
                    <div className="pt-5 pb-2">
                        <BigText text="Electronic Waste"/>
                    </div>
                    <div>
                        <p>Electronic waste or e-waste describes discarded electrical or electronic devices.
                         Used electronics which are destined for refurbishment, reuse, resale, salvage recycling 
                         through material recovery, or disposal are also considered e-waste.</p>
                    </div>
                </div>
                <Footer />
               

            </div>

    )
}