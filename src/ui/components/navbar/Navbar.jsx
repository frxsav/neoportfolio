'use client';

import { useState } from 'react';
import { BurgerMenu, DesktopMenuLinks, MobileMenuLinks, Logo } from '..';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-pokemon z-50 fixed top-8 translate-x-1/2 right-1/2 rounded-3xl px-8 w-[80%] backdrop-blur-lg bg-primary/25">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Logo />
        {/* Desktop Menu */}
        <DesktopMenuLinks />
        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenuLinks setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}
