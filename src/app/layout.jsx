import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/floating/WhatsAppButton';
import ScrollToTop from '@/components/floating/ScrollToTop';
import RouteLoader from '@/components/common/RouteLoader'; // ⭐ ADD THIS

export const metadata = {
  title: 'Bharat Engrs - Electrical Engineering & Panel Manufacturing',
  description:
    'Leading manufacturer of electrical control panels, MCC, PCC, and automation solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RouteLoader>
          <div className="sticky top-0 z-[80] bg-white w-full">
            <Header />
          </div>

          <main>{children}</main>

          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </RouteLoader>
      </body>
    </html>
  );
}
