import BigText from "@/components/big-text";
import Footer from "@/components/footer";
import { Regions } from "@/components/regions";

export default function LocationsPage() {
    return (

            <div className='grid'>
                <div className="md:mx-20 md:px-10 my-10 mx-10">
                    <div className='pt-5 pb-7 flex justify-center'>
                        <BigText text="Where We Collect"/>
                    </div>
                    <div>
                        <Regions />
                    </div>
                </div>
                <Footer />

            </div>
    )
}