// Globals
import type { Metadata } from 'next';

// Components
import { SkipLink } from '../components/navigation/SkipLink';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/navigation/Footer';

// Styling
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wait a Little',
  description: 'A simple app to help you wait a little.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <header className='mb-4'>
          <SkipLink />
          <NavBar />
        </header>
        <main id='main'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
