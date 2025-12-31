import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'website',
  description: 'website built with next.js',
};

const InterSemiBold = localFont({
  src: '../../public/fonts/Inter-SemiBold.woff2',
  variable: '--font-inter-semibold',
});

const InterRegular = localFont({
  src: '../../public/fonts/Inter-Regular.woff2',
  variable: '--font-inter-regular',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${InterSemiBold.variable} ${InterRegular.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
