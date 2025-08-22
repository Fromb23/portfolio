import React, { useState, useEffect } from 'react';
import { Code, User, Layers, Terminal, Mail, Sun, Moon, Send, Menu, X, Star } from 'lucide-react';
import { useTheme } from '../contexts/themeContext';

const Header = () => {
  const { isDark, setIsDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-theme-lg border-b border-primary transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-accent flex items-center">
            <Code className="mr-2" size={24} />
            Dev Rombo
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-primary hover:text-accent transition-colors flex items-center group">
              <User size={16} className="mr-1 group-hover:scale-110 transition-transform" />
              About Me
            </a>
            <a href="#services" className="text-primary hover:text-accent transition-colors flex items-center group">
              <Layers size={16} className="mr-1 group-hover:scale-110 transition-transform" />
              Services
            </a>
            <a href="#skills" className="text-primary hover:text-accent transition-colors flex items-center group">
              <Star size={16} className="mr-1 group-hover:scale-110 transition-transform" />
              Expertise
            </a>
            <a href="#projects" className="text-primary hover:text-accent transition-colors flex items-center group">
              <Terminal size={16} className="mr-1 group-hover:scale-110 transition-transform" />
              Projects
            </a>
            <a href="#contact" className="text-primary hover:text-accent transition-colors flex items-center group">
              <Mail size={16} className="mr-1 group-hover:scale-110 transition-transform" />
              Contact
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg button-outline hover:bg-secondary transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="mailto:rombo.f2@gmail.com"
              className="button-primary px-6 py-2 rounded-lg font-medium transition-all hover:scale-105 flex items-center group"
            >
              Hire Me
              <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-primary animate-fadeIn">
            <nav className="px-4 py-4 space-y-4">
              <a href="#about" className="block text-primary hover:text-accent py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <User size={16} className="mr-2" />
                About Me
              </a>
              <a href="#services" className="block text-primary hover:text-accent py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Layers size={16} className="mr-2" />
                Services
              </a>
              <a href="#projects" className="block text-primary hover:text-accent py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Terminal size={16} className="mr-2" />
                Projects
              </a>
              <a href="#skills" className="block text-primary hover:text-accent py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Star size={16} className="mr-2" />
                Expertise
              </a>
              <a href="#contact" className="block text-primary hover:text-accent py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Mail size={16} className="mr-2" />
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;