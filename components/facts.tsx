'use client'

import BigText from "./big-text"
import PaperCard from "./paper-card"

export default function KeyFacts() {
    return (
        <div className=' mt-8'>
            <div className='mb-6 mt-14 text-center py-4'>
                <BigText text='Key Facts'/>
            </div>
            <div className=' grid  grid-rows-4 gap-4 mx-auto md:grid-cols-4 items-center md:items-start md:mx-28'>
                <div className="mx-auto">
                    <PaperCard 
                    title="Partner Waste Collectors"
                    duration={4}
                    endValue={30}
                    
                    
                    />
                </div>
               <div className="mx-auto">
                <PaperCard 
                    title="Tonnes of Plastic Waste Recycled"
                    duration={4}
                    endValue={50}
                />
              </div>
              <div className="mx-auto">
                <PaperCard 
                    title="Tonnes of Household Waste Collected Per Day"
                    duration={4}
                    endValue={30}
                />
              </div>
              <div className="mx-auto">
                <PaperCard
                            title=" Thousand Households Served"
                            duration={4}
                            endValue={10}
                />
              </div>
            </div>
      </div> 
    )
}