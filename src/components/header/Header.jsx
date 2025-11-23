import Navbar from './Navbar'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navbar />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

