import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hylton Cafe | Jewellery Quarter Breakfast Cafe',
  description: 'Hylton Cafe in Birmingham Jewellery Quarter: breakfast, brunch, lunch, coffee, tea, takeaway and dine-in information.',
  robots: {
    index: false,
    follow: false,
    nocache: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
