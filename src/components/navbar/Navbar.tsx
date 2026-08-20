'use client';
import {
  NavbarUi,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  DiscordButton,
} from '@/components/ui/navbarUi';
import { useState } from 'react';
import { navItems } from '@/config/navbar';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full" style={{ zIndex: 1000 }}>
      <NavbarUi>
        {/* Desktop Navigation */}
        <NavBody visible={true}>
          <NavbarLogo />
          <NavItems items={navItems} />

          {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          <DiscordButton />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav visible={true}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map(
              (
                item: { link: string; name: string; type?: string },
                idx: number
              ) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-archivo relative font-semibold ${
                    item.type === 'special'
                      ? 'text-[#F4E4B8] hover:text-black'
                      : 'text-[#F4E4B8] hover:text-black'
                  } hover:text-primary transition-colors duration-300`}
                  {...(item.type === 'special' && {
                    target: '_blank',
                  })}
                >
                  <span className="text-shadowlight font-canopee bg-secondary block px-4 py-1 text-[3vw] shadow-[2px_2px_0_rgba(0,0,0,0.85)]">
                    {item.name}
                  </span>
                </a>
              )
            )}
          </MobileNavMenu>
        </MobileNav>
      </NavbarUi>

      {/* Navbar */}
    </nav>
  );
}
