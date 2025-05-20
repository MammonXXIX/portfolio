'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutContainer = useRef<HTMLDivElement>(null);
    const educationContainer = useRef<HTMLDivElement>(null);
    const workContainer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const aboutTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutContainer.current,
                start: 'top 90%',
                end: '+=1200px',
                scrub: true,
                // markers: true,
            },
        });

        aboutTimeline
            .from(aboutContainer.current, {
                x: -200,
                rotateZ: 5,
            })
            .to(aboutContainer.current, {
                x: -200,
                rotateZ: -5,
            });

        const educationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: educationContainer.current,
                start: 'top 60%',
                end: '+=600px',
                scrub: true,
                // markers: true,
            },
        });

        educationTimeline
            .from(educationContainer.current, {
                x: 100,
                rotateZ: 5,
            })
            .to(educationContainer.current, {
                x: 0,
                y: -250,
                rotateZ: 0,
            });

        const workTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: workContainer.current,
                start: 'top 60%',
                end: '+=300px',
                scrub: true,
                // markers: true,
            },
        });

        workTimeline.from(workContainer.current, {
            x: 100,
            rotateZ: 2.5,
        });
    });

    return (
        <div className="relative min-h-[160dvh] min-w-dvw md:min-h-[150dvh]">
            <div ref={aboutContainer} className="absolute h-screen w-screen bg-white p-8">
                <span className="text-xs uppercase">/ about me</span>
                <h1 className="font-marlin-geo-sq-medium text-5xl md:text-9xl">Summary</h1>
                <div className="mt-6 flex max-w-5xl flex-col gap-4">
                    <p>
                        I am an enthusiastic and highly motivated junior web developer with a strong interest in building modern, responsive
                        web applications. I have hands-on experience with technologies such as React.js, Next.js, and Express.js, and I
                        enjoy working across both frontend and backend development.
                    </p>
                    <p>
                        I am a fast learner, adaptable to new technologies, and thrive in collaborative environments. I’m passionate about
                        creating impactful solutions and enhancing user experience through innovative approaches. Currently, I am seeking
                        opportunities to grow professionally and contribute to meaningful tech projects.
                    </p>
                </div>
            </div>
            <div ref={educationContainer} className="absolute top-150 flex h-screen w-screen flex-col items-end bg-gray-300 p-8">
                <span className="text-xs uppercase">/ education</span>
                <h1 className="font-marlin-geo-sq-medium text-5xl md:text-9xl">My Education</h1>
                <div className="mt-6 flex max-w-5xl flex-col items-end gap-4">
                    <p>
                        2019 - 2022 / SMK Mutiara Bangsa - <span className="text-red-500">(Multimedia)</span> / Tangerang, Indonesia
                    </p>
                    <div className="flex items-center">
                        <span className="mr-2 inline-block h-4 w-4 rounded-full bg-red-500" />
                        <p>
                            2022 - Now / Universitas Bunda Mulia - <span className="text-red-500">(Informatika)</span> / Tangerang,
                            Indonesia
                        </p>
                    </div>
                </div>
            </div>
            <div ref={workContainer} className="absolute top-225 flex h-[70dvh] w-screen flex-col items-end bg-gray-400 px-12 py-8">
                <span className="text-xs uppercase">/ work</span>
                <h1 className="font-marlin-geo-sq-medium text-5xl md:text-9xl">My Work</h1>
                <div className="mt-6 flex max-w-5xl flex-col items-end gap-4"></div>
                <Link href={'https://github.com/MammonXXIX'}>
                    <div className="hover:text-red flex items-center gap-4 text-2xl">
                        <span>View Work</span>
                        <IoIosArrowRoundForward />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default About;
