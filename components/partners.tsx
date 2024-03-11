'use client'

import Image from "next/image";

export default function Partners() {
    return (
        <div className="flex lg:space-x-5 py-8 px-5 justify-center">
            <div className="overflow-hidden ">
                <Image
                    src={'/amaco.png'}
                    alt='amaco'
                    height={50}
                    width={200}
                    className="object-contain"
                />
            </div>
            <div className="overflow-hidden ">
                <Image
                    src={'/corporate.jpg'}
                    alt='corporate'
                    height={50}
                    width={200}
                    className="object-contain"
                />
            </div>
            <div className="overflow-hidden ">
                <Image
                    src={'/kengen.png'}
                    alt='kengen'
                    height={50}
                    width={200}
                    className="object-contain"
                />
            </div>
            <div className="overflow-hidden ">
                <Image
                    src={'/tononoka.jpg'}
                    alt='tononoka'
                    height={50}
                    width={200}
                    className="object-contain"
                />
            </div>
            <div className="overflow-hidden ">
                <Image
                    src={'/technogen.png'}
                    alt='amaco'
                    height={50}
                    width={200}
                    className="object-contain"
                />
            </div>
        </div>
    );
}

