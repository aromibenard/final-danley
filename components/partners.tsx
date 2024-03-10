'use client'

import Slider from "react-slick";
import Image from "next/image";

export default function Partners() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <Slider {...settings}>
            <div>
                <Image
                    src={'/amaco.png'}
                    alt='amaco'
                    height={100}
                    width={300}
                />
            </div>
            <div>
                <Image
                    src={'/corporate.jpg'}
                    alt='amaco'
                    height={100}
                    width={300}
                />
            </div>
            <div>
                <Image
                    src={'/kengen.png'}
                    alt='amaco'
                    height={100}
                    width={300}
                />
            </div>
            <div>
                <Image
                    src={'/tononoka.jpg'}
                    alt='amaco'
                    height={100}
                    width={300}
                />
            </div>
            <div>
                <Image
                    src={'/technogen.png'}
                    alt='amaco'
                    height={100}
                    width={300}
                />
            </div>
        </Slider>
    );
}

