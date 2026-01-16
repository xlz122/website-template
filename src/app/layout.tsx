import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../../public/styles/globals.css';

export const metadata: Metadata = {
  title: 'website',
  description: 'website built with next.js',
};

const PingFangMedium = localFont({
  src: '../../public/fonts/PingFang-Medium.woff2',
  variable: '--font-pingfang',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${PingFangMedium.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
