import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import './globals.css';

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
