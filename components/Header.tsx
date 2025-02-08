import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import Image from 'next/image'
// import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const headerClass = 'flex items-center w-full justify-between py-4 bg-gray-900 text-white z-50'
  // if (siteMetadata.stickyNav) {
  //   headerClass += ' fixed top-0';
  // } else {
  //   headerClass += ' fixed top-0 left-0';
  // }

  return (
    <header className={headerClass} style={{ height: '80px' }}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            {/* <Image src={Logo} alt="Logo" width={90} height={90} /> */}
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="flex max-w-full items-center space-x-4 overflow-visible pr-2 sm:space-x-6">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="m-1 block font-medium text-gray-100 hover:text-primary-500"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
