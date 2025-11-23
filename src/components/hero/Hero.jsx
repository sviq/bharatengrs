import BannerLayout from '@/components/layouts/BannerLayout'
import HeroContent from './HeroContent'

export default function Hero({ image, title, description, ctaText, ctaLink }) {
  return (
    <div className="relative">
      <BannerLayout bannerImage={image}>
        {/* Empty children - content is overlaid on banner */}
      </BannerLayout>
      {/* Overlay HeroContent on the banner */}
      <div className="absolute top-0 left-0 w-full h-[400px] md:h-[600px] pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent title={title} description={description} ctaText={ctaText} ctaLink={ctaLink} />
        </div>
      </div>
    </div>
  )
}

