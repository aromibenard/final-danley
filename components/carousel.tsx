 'use client'
 
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@mui/material";
import Image from "next/image";

const imageSources = ['/amaco.png', '/corporate.jpg', '/kengen.png', '/tononoka.jpg', '/technogen.png'];

export function CarouselPlugin({ images = imageSources }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex w-dvw h-60 items-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="lg:basis-1/3 w-fit">
            <div className="w-[10rem]">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={src}
                    alt={`image-${index}`}
                    width={300}
                    height={200}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
