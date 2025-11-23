import Hero from '@/components/hero/Hero'
import BannerLayout from '@/components/layouts/BannerLayout'
import PrimaryLayout from '@/components/layouts/PrimaryLayout'
import SectionTitle from '@/components/common/SectionTitle'
import ProductGrid from '@/components/products/ProductGrid'
import CompanyStats from '@/components/common/CompanyStats'
import { products } from '@/data/products'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with Full-Width Banner Layout */}
      <Hero
        image="/banner/hero-banner.jpg"
        title="Bharat Engrs"
        description="Leading Manufacturer of Electrical Control Panels & Automation Solutions"
        ctaText="Explore Products"
        ctaLink="/products"
      />

      {/* Company Stats Section - Using PrimaryLayout */}
      <section className="py-16 bg-gray-50">
        <PrimaryLayout>
          <CompanyStats
            stats={[
              { value: '25+', label: 'Years of Experience' },
              { value: '1000+', label: 'Projects Completed' },
              { value: '500+', label: 'Happy Clients' },
            ]}
          />
        </PrimaryLayout>
      </section>

      {/* Products Section - Using PrimaryLayout */}
      <section className="py-16">
        <PrimaryLayout>
          <SectionTitle
            title="Our Products"
            subtitle="High-quality electrical control panels designed for efficiency and reliability"
          />
          <ProductGrid products={products} />
        </PrimaryLayout>
      </section>

      {/* About Section - Using BannerLayout */}
      <BannerLayout bannerImage="/banner/about-banner.jpg">
        <SectionTitle
          title="About Bharat Engrs"
          subtitle="Your trusted partner in electrical engineering solutions"
        />
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Bharat Engrs is a leading manufacturer of electrical control panels, MCC, PCC, and automation solutions. 
            With over 25 years of experience, we have been serving industries across India with high-quality, 
            reliable electrical systems.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment to excellence and customer satisfaction has made us a preferred choice for 
            electrical panel manufacturing and engineering services.
          </p>
        </div>
      </BannerLayout>

      {/* Features Section - Using PrimaryLayout */}
      <section className="py-16 bg-primary-50">
        <PrimaryLayout>
          <SectionTitle
            title="Why Choose Us"
            subtitle="We deliver excellence in every project"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                All our products meet international standards and undergo rigorous quality testing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced engineers ensure the best solutions for your requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and deliver projects on time.
              </p>
            </div>
          </div>
        </PrimaryLayout>
      </section>
    </main>
  )
}

