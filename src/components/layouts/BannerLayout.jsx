// import Image from 'next/image'

// export default function BannerLayout({ bannerImage, children }) {
//   return (
//     <div>
//       {/* Full-width banner section - 1440 X 600px */}
//       <div className="w-full h-[400px] md:h-[600px] bg-gray-200 relative">
//         {bannerImage ? (
//           <Image
//             src={bannerImage}
//             alt="Banner"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-r from-primary-600 to-primary-800 flex items-center justify-center">
//             <span className="text-white text-xl">Banner Image Placeholder (1440 X 600px)</span>
//           </div>
//         )}
//       </div>
      
//       {/* 12-column content section */}
//       <div className="container mx-auto px-4 max-w-7xl py-12">
//         {children}
//       </div>
//     </div>
//   )
// }


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
