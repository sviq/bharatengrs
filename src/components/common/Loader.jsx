'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-[9999] transition-opacity duration-500">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-[#ff6b42] rounded-full animate-spin"></div>
    </div>
  );
}
