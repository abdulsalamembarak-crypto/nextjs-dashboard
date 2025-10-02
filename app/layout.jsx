import './ui/global.css';
import {Lusitana , Alexandria } from 'next/font/google';

const latin = Lusitana({subsets: ['latin'], weight: ['400', '700']});
const alex = Alexandria({subsets: ['latin'], weight: ['400', '700']});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alex.className} antialiased`}>{children}</body>
    </html>
  );
}
