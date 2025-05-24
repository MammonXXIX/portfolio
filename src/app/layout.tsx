import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
            <body>
                <NavigationBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
