import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Regions() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="central">
          <AccordionTrigger>Central Region</AccordionTrigger>
          <AccordionContent>
              Upperhill, CBD, Ngara,
              South C, Madaraka Akila 1,2  Mugoya Estate,
              Industrial Area, Nairobi west, Balozi, plainsview, South B, Diamond Park.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="eastern">
          <AccordionTrigger>Eastern Region</AccordionTrigger>
          <AccordionContent>
             Kayole,
             Komarock,
             Umoja,
             Industrial area,
             Embakasi,
             Donholm.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="northern">
          <AccordionTrigger>Nothern Region</AccordionTrigger>
          <AccordionContent>
           Safari Park Est, Thome, Marurui, Garden Estate, Utalii Village, Ridgeways, Njathaini, Thindigua-Kugeria, Kasarani, Old Muthaiga, Muthaiga North, Balozi Estate, Runda, Gigiri, City Park, Forest Road, Pangani, Roysambu
           Huruma, Mathare, Ngumba, Drive In, Mathare North
           Zimmerman, Githurai 44, Kamae, Congo, Kahawa west NCC, Kiamumbi, Jua Kali, Maziwa, Qurray, Kiwanja
           Githurai, Kahawa Wendani, Kahawa Sukari, Githurai Progressive
           Ngomongo, Sports view, Sports Drive, Roysambu/Kasarani police, Clay City, Seasons, Santon, Hanters, Keroka, Chieko, Maji mazuri, Mwiki Phase3, Mwiki, Mariru park, Budalangi, Mwirigo, Infinity.

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="north eastern">
          <AccordionTrigger>North Eastern Region</AccordionTrigger>
          <AccordionContent>
             Kangundo road, Babadogo/Dandora, Jogoo Road, Buruburu, Eastleigh
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="southern">
          <AccordionTrigger>Southern Region</AccordionTrigger>
          <AccordionContent>
             Kilimani, Kileleshwa , Lavington,Hurlingham , Riverside,Ngong road,
             Kibera , Highrise, Ngumo, Woodley,Jamhuri, Golfcourse,Magiwa,Highview,
             Karen ,Langata
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="western">
          <AccordionTrigger>Southern Region</AccordionTrigger>
          <AccordionContent>
           Parklands,Westlands,
           Spring Valley,Kangemi,Rhapta Rd,Gigiri,Kyuna,Loresho,Ruaka,Uthiru,
           Lavington,Kawangware,Dagoretti,Kinoo
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  