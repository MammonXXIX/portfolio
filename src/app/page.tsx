"use client"

import About from "@/components/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainContainer = useRef<HTMLDivElement>(null)
  const redContainer = useRef<HTMLDivElement>(null)
  const cursorElement = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const redContainerGSAP = gsap.timeline({
      scrollTrigger: {
        trigger: redContainer.current,
        start: "center center",
        end: "+=1000",
        scrub: 2,
        pin: true,
        pinSpacing: false,
      }
    })

    redContainerGSAP.to(redContainer.current, {
      x: -500,
      y: -1250,
      rotateZ: -20
    })


  })

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY, pageX, pageY }: MouseEvent) => {
      if (!mainContainer.current) return

      const { left, right, top, bottom } = mainContainer.current.getBoundingClientRect()

      const isWithinContainer = (clientX >= left) && (clientX <= right) && (clientY >= top) && (clientY <= bottom)
      if (!isWithinContainer) return

      gsap.to(cursorElement.current, {
        x: pageX + 20,
        y: pageY,
        duration: 1,
        ease: "power2.out"
      })
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [])

  return (
    <div ref={mainContainer} className="min-h-dvh relative">
      <video src="videos/001.mp4" autoPlay muted loop className="fixed" />
      <div className="h-[200dvh]">
        <div ref={redContainer} className="relative h-screen flex items-end z-40">
          <Image src="svg/logo.svg" alt="logo" width={0} height={0} className="w-screen px-10 z-40" />
          <div className="absolute inset-0 bg-red opacity-50" />
        </div>
      </div>
      <span ref={cursorElement} className="absolute font-marlin-geo-sq-light text-white text-sm uppercase top-0 left-0 z-40 cursor-default">scroll to explore</span>
      <About />
    </div>
  )
}

export default Home;
