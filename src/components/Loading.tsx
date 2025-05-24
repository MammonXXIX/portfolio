'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Loading = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const targetFps = 24;

    useGSAP(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none';

        const counterObj = { value: 0 };

        gsap.to(counterObj, {
            value: targetFps,
            duration: 5,
            ease: 'power1.inOut',
            onUpdate: () => {
                if (spanRef.current) {
                    const current = Math.floor(counterObj.value);
                    const padded = current.toString().padStart(2, '0');
                    spanRef.current.innerText = `${padded}/${targetFps} FPS`;
                }
            },
            onComplete: () => {
                gsap.to(spanRef.current, {
                    opacity: 0,
                    duration: 1,
                });
                gsap.to(divRef.current, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        document.body.style.overflow = '';
                        document.body.style.pointerEvents = '';
                    },
                });
            },
        });
    }, []);

    return (
        <div className="absolute z-50 flex h-screen w-screen">
            <div ref={divRef} className="bg-red absolute inset-0 z-0" />
            <span ref={spanRef} className="font-marlin-geo-sq-medium z-10 mt-10 text-7xl text-white md:text-9xl"></span>
        </div>
    );
};

export default Loading;
