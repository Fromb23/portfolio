import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slower"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-pulse">
            <Sparkles size={16} className="mr-2" />
            Full Stack Developer
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Hi, I'm <span className="text-accent relative inline-block">
              Francis Rombo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full animate-ping-slow"></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
            A passionate Full Stack Developer crafting beautiful, functional, and user-centered digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="button-primary px-8 py-3 rounded-lg font-medium text-lg hover:scale-105 transition-transform flex items-center justify-center group">
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button> */}
            <a
              href="/Francis_Rombo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline px-8 py-3 rounded-lg font-medium text-lg hover:scale-105 transition-transform flex items-center justify-center group"
            >
              View CV
              <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-secondary" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://github.com/Fromb23" className="text-secondary hover:text-accent transition-all hover:scale-110 p-2 bg-card rounded-lg shadow-theme"
            aria-label="GitHub"
            target='_blank'>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rombo-francis-40aa82207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-secondary hover:text-accent transition-all hover:scale-110 p-2 bg-card rounded-lg shadow-theme"
            aria-label="LinkedIn"
            target='_blank'>
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/its_rombo" className="text-secondary hover:text-accent transition-all hover:scale-110 p-2 bg-card rounded-lg shadow-theme" aria-label="Twitter"
            target='_blank'>
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;