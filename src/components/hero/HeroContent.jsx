import Link from 'next/link'
import Button from '@/components/common/Button'

export default function HeroContent({ title, description, ctaText, ctaLink }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8">{description}</p>
        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <Button variant="primary" size="lg">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

