import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Import your global components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oudra | Agarwood Decision Support System',
  description: 'Research Project 25-26J-157 - SLIIT Faculty of Computing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Navbar stays at the top of every page */}
        <Navbar />

        {/* This "main" tag will render the specific page content (like your Home, Features, or Team page) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}