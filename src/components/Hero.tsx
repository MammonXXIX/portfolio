'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const mainContainer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: 'center center',
                end: '+=1000',
                scrub: 2,
                pin: true,
                pinSpacing: false,
            },
        });

        scrollTimeline.to(mainContainer.current, {
            x: -500,
            y: -1250,
            rotateZ: -20,
        });
    });

    return (
        <div className="z-50 h-[200dvh] w-screen">
            <div ref={mainContainer} className="relative z-40 flex h-screen items-end">
                <Image src="svg/logo.svg" alt="logo" width={0} height={0} className="z-40 w-screen px-10" />
                <div className="bg-red absolute inset-0 opacity-50" />
            </div>
        </div>
    );
};

export default Hero;
