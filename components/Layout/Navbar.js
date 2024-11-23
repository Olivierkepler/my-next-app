import { useState, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Memoize the NavBar component to prevent unnecessary re-renders
const NavBar = memo(function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Static navigation links - defined outside component to prevent recreation
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          <Link href="/" prefetch={false}>DeliveryPro</Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 text-lg font-medium`}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${
                router.pathname === link.path
                  ? 'border-b-2 border-blue-500'
                  : 'hover:border-b-2 hover:border-blue-400'
              } px-2 py-1`}
            >
              <Link href={link.path} prefetch={false}>{link.name}</Link>
            </li>
          ))}

          {/* Dropdown Menu Example */}
          <li className="relative group">
            <span className="cursor-pointer hover:text-blue-400 px-2 py-1">
              More
            </span>
            <div className="absolute hidden group-hover:block bg-gray-800 shadow-md rounded-md w-40">
              <Link
                href="/pricing"
                prefetch={false}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                prefetch={false}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                FAQ
              </Link>
            </div>
          </li>
        </ul>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
});

export default NavBar;
