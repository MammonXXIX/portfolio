"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { start } from "repl";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const mainContainer = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top center",
                end: "+=200",
                scrub: 2,
                pin: true,
                pinSpacing: false,
            }
        })

        scrollTimeline.from(mainContainer.current, {
            x: -500,
            y: 1250,
            rotateZ: 20
        })
    })

    return (
        <div ref={mainContainer} className="w-full h-[70dvh] bg-white">

        </div>
    )
}

export default About