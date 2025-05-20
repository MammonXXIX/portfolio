'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const mainContainer = useRef<HTMLDivElement>(null);
    const cursorElement = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY, pageX, pageY }: MouseEvent) => {
            if (!mainContainer.current) return;

            const { left, right, top, bottom } = mainContainer.current.getBoundingClientRect();

            const isWithinContainer = clientX >= left && clientX <= right && clientY >= top && clientY <= bottom;
            if (!isWithinContainer) return;

            gsap.to(cursorElement.current, {
                x: pageX + 20,
                y: pageY,
                duration: 1,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={mainContainer} className="relative min-h-dvh min-w-dvw overflow-x-hidden">
            <video src="videos/001.mp4" autoPlay muted loop className="fixed h-screen w-screen object-cover" />
            <span
                ref={cursorElement}
                className="font-marlin-geo-sq-light absolute top-0 left-0 z-50 cursor-default text-sm text-white uppercase mix-blend-difference"
            >
                scroll to explore
            </span>
            <Hero />
            <About />
        </div>
    );
};

export default Home;
