import RouteLoader from '@/components/common/RouteLoader'; // ⭐ ADD THIS
import ScrollToTop from '@/components/floating/ScrollToTop';
import WhatsAppButton from '@/components/floating/WhatsAppButton';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import './globals.css';

export const metadata = {
  title: 'Bharat Engrs - Electrical Engineering & Panel Manufacturing',
  description:
    'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="sticky top-0 z-[80] bg-white w-full">
          <Header />
        </div>
        <RouteLoader>
          <main>{children}</main>
        </RouteLoader>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
