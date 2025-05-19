"use client"

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const mainContainer = useRef<HTMLDivElement>(null)

    useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "center center",
        end: "+=1000",
        scrub: 2,
        pin: true,
        pinSpacing: false,
      }
    })

    scrollTimeline.to(mainContainer.current, {
      x: -500,
      y: -1250,
      rotateZ: -20
    })
  })

    return (
        <div className="h-[200dvh]">
            <div ref={mainContainer} className="relative h-screen flex items-end z-40">
                <Image src="svg/logo.svg" alt="logo" width={0} height={0} className="w-screen px-10 z-40" />
                <div className="absolute inset-0 bg-red opacity-50 blur-2xl" />
            </div>
        </div>
    )
}

export default Hero;