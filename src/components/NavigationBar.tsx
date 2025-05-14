"use client"

import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" }
]

const NavigationBar = () => {
    const pathname = usePathname()

    return (
        <div className="fixed w-full p-2 flex items-center justify-between z-50">
            <h1 className="font-marlin-geo-sq-medium text-4xl text-white">PORTFOLIO</h1>
            <div className="flex items-center font-marlin-geo-sq-light text-white text-xs">
                <span className="w-4 h-4 mr-2 rounded-full inline-block bg-red-500" />
                <span>OPEN TO WORK</span>
                <span className="ms-10 uppercase">Tangerang, Indonesia</span>
            </div>
            <div>
                {NAVIGATION_ITEMS.map(({ label, path }, index) => (
                    <a key={index} href={path} className={`${pathname === path ? 'text-red-500' : 'text-white'} text-2xl uppercase`}>
                        {pathname === path && <span className="w-4 h-4 mr-2 rounded-full inline-block bg-red-500" />}
                        {label}
                        {index !== NAVIGATION_ITEMS.length - 1 && <span className="text-white mx-1"> / </span>}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default NavigationBar;