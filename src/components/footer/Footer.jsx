import FooterLinks from './FooterLinks'
import FooterContact from './FooterContact'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterLinks />
          <FooterContact />
          <SocialLinks />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bharat Engrs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

