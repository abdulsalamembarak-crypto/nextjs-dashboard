import './ui/global.css';
import {Alexandria } from 'next/font/google';

const alex = Alexandria({subsets: ['latin'], weight: ['400', '700']});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alex.className} antialiased`}>{children}</body>
    </html>
  );
}
