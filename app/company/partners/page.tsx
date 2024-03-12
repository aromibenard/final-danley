import BigText from "@/components/big-text";
import Footer from "@/components/footer";
import Partners from "@/components/partners";

export default function PartnersPage() {
    return(
        <div className="grid h-[50.6rem]">
            <div className="flex justify-center mt-10 py-4 ">
                <BigText text='Our Partners'/>
            </div>
            <div className="flex justify-center">
                <p>Proud to be associated with the following organizations in helping us achieve zero waste communities.</p>
            </div>
            <Partners />
            <div className="my-6">
                
            </div>
            <Footer/>
        </div>
    )
}