import Link from 'next/link';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from "react-icons/fi";
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

type NavItem = {
  id: 'home' | 'about' | 'collection' | 'shop' | 'contact';
  label: string;
};

type HeaderProps = {
  onNavClick: (id: 'home' | 'about' | 'collection' | 'shop' | 'contact') => void;
  active: string;
};

const navLinks: NavItem[] = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'collection', label: 'COLLECTION' },
  { id: 'shop', label: 'SHOP' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Header({ onNavClick, active }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 z-50 bg-gradient-to-r from-green-900 to-green-600 border-b-2 border-white/10">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="bg-white p-1">
            <Image
              src="/images/Simplification.svg"
              alt="Ozmia Gold & Diamonds"
              width={80}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Hamburger Menu (visible on mobile) */}
          <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
            {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 text-[rgba(255,252,173,1)]">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  onNavClick(link.id);
                  setIsMenuOpen(false);
                }}
                className={`font-serif text-lg ${active === link.id ? 'underline font-bold' : ''} hover:text-yellow-400 transition`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6 text-[rgba(255,252,173,1)]">
            <button className="hover:text-yellow-400 transition">
              <CiLocationOn size={20} />
            </button>
            <button className="hover:text-yellow-400 transition">
              <FiPhone size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 bg-red-900 z-40 flex flex-col md:hidden w-[50%] h-[60%] ">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <IoClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-[rgba(255,252,173,1)] mt-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  onNavClick(link.id);
                  setIsMenuOpen(false);
                }}
                className={`font-serif text-xl ${active === link.id ? 'underline font-bold' : ''} hover:text-yellow-400 transition`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}