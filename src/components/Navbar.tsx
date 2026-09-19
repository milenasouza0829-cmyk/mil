import React, { useState, useEffect } from 'react';
import { PearLogo } from './PearLogo';
import { ShoppingBag, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPreOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPreOrder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão Geral', href: '#hero' },
    { label: 'Modelos & Cores', href: '#modelos' },
    { label: 'Inovação P4', href: '#inovacao' },
    { label: 'Câmera 108MP', href: '#camera' },
    { label: 'Dynamic Halo', href: '#halo' },
    { label: 'Comparar', href: '#comparar' },
    { label: 'Trade-in', href: '#tradein' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Subtle top announcement bar */}
      {showTopBanner && (
        <div
          id="top-announcement-bar"
          className="bg-gradient-to-r from-[#141e17] via-[#1a2b1f] to-[#141e17] border-b border-[#c3e88d]/20 text-xs py-1.5 px-4 text-center text-zinc-300 flex items-center justify-center gap-3 relative"
        >
          <div className="flex items-center gap-1.5 font-medium text-[#c3e88d]">
            <Sparkles size={13} className="animate-pulse" />
            <span>Lançamento Mundial</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">|</span>
          <p className="text-zinc-300">
            Pear Apex Series já disponível para reserva com garantia estendida PearCare+ inclusa.
          </p>
          <button
            onClick={() => setShowTopBanner(false)}
            className="absolute right-4 text-zinc-400 hover:text-white p-0.5 rounded transition-colors"
            title="Fechar aviso"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main navigation */}
      <nav
        id="main-navbar"
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0d0e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <PearLogo size={26} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs lg:text-sm text-zinc-400 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              id="nav-preorder-button"
              onClick={onOpenPreOrder}
              className="group relative inline-flex items-center gap-2 bg-[#f4f5f6] hover:bg-white text-[#0c0d0e] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/20 active:scale-95"
            >
              <ShoppingBag size={15} className="text-[#0c0d0e]" />
              <span>Configurar</span>
              <ChevronRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>

            {/* Mobile hamburger button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0c0d0e]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3 transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-base text-zinc-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="text-zinc-500" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreOrder();
              }}
              className="w-full bg-[#c3e88d] hover:bg-[#b0db74] text-[#0c0d0e] font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#c3e88d]/10"
            >
              <ShoppingBag size={18} />
              <span>Reservar meu Pear Apex</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
