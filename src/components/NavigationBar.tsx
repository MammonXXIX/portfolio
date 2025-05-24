'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

export const NAVIGATION_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
];

const NavigationBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const pathname = usePathname();
    const { y } = useWindowScroll();

    useEffect(() => {
        if (y >= 1850) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [y]);

    return (
        <div className="fixed z-50 flex w-full items-center justify-between overflow-x-hidden p-2">
            <h1 className={`${!isVisible ? 'text-black' : 'text-white'} font-marlin-geo-sq-medium hidden text-2xl md:block md:text-4xl`}>
                PORTFOLIO
            </h1>
            <div className={`${!isVisible ? 'text-black' : 'text-white'} font-marlin-geo-sq-light flex items-center text-xs`}>
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-red-500" />
                <span>OPEN TO WORK</span>
                <span className="ms-10 uppercase">Tangerang, Indonesia</span>
            </div>
            <div className="hidden md:block">
                {NAVIGATION_ITEMS.map(({ label, path }, index) => (
                    <a
                        key={index}
                        href={path}
                        className={`${pathname === path ? 'text-red-500' : `${!isVisible ? 'text-black' : 'text-white'}`} text-2xl uppercase mix-blend-difference`}
                    >
                        {pathname === path && <span className="mr-2 inline-block h-4 w-4 rounded-full bg-red-500" />}
                        {label}
                        {index !== NAVIGATION_ITEMS.length - 1 && <span className="mx-1 text-white"> / </span>}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NavigationBar;
