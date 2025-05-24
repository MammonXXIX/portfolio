'use client';

import { NAVIGATION_ITEMS } from './NavigationBar';

const Footer = () => {
    return (
        <div className="bg-red relative overflow-x-hidden">
            <div className="flex flex-col gap-10 p-10 text-white md:flex-row md:p-20">
                <div className="flex-1">
                    <h1 className="font-marlin-geo-sq-medium mb-0 text-xs uppercase md:mb-5">/ Reach Out</h1>
                    <a href="mailto:Randy.XXIX.IX@Gmail.Com" className="text-xl hover:underline md:text-3xl">
                        Randy.XXIX.IX@Gmail.Com
                    </a>
                </div>
                <div className="w-96">
                    <h1 className="font-marlin-geo-sq-medium mb-0 text-xs uppercase md:mb-5">/ Social</h1>
                    <div className="flex flex-col">
                        <a href="https://www.linkedin.com/in/randy-kurniawan-xxix" target="_blank" className="text-2xl hover:underline">
                            Linkedin
                        </a>
                        <a href="https://github.com/MammonXXIX" target="_blank" className="text-2xl hover:underline">
                            Github
                        </a>
                    </div>
                </div>
                <div className="w-96">
                    <h1 className="font-marlin-geo-sq-medium mb-0 text-xs uppercase md:mb-5">/ Navigation Bar</h1>
                    <div className="flex flex-col">
                        {NAVIGATION_ITEMS.map(({ label, path }, index) => (
                            <a key={index} href={path} className="text-2xl hover:underline">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
