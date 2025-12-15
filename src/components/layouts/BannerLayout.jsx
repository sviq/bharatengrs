import Image from 'next/image';

export default function BannerLayout({ bannerImage, children }) {
  return (
    <div className="relative w-full h-[700px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {bannerImage ? (
          <Image
            src={bannerImage}
            alt="Banner"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex items-center container mx-auto px-6">
        {children}
      </div>
    </div>
  );
}
