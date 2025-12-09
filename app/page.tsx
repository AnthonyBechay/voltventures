'use client';

import { useEffect, useState, useCallback } from 'react';
import MobileMenu from './components/MobileMenu';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">V</span>
              </div>
              <span className="text-xl font-semibold text-white">VoltVentures</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Home</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="#contact" 
                className="hidden md:block px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Get Quote
              </a>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium">
                ⚡ Professional Electrical Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Powering
              <span className="block text-cyan-400 mt-2">
                Lebanon's Future
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Expert electrical solutions for fixing, managing electricity, lighting, and high voltage systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors duration-200 hover-lift"
              >
                Get Started
              </a>
              <a
                href="#services" 
                className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-500 rounded-lg text-cyan-400 font-semibold transition-colors duration-200"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive electrical solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Electrical Repairs',
                description: 'Expert fixing and troubleshooting of all electrical systems and components',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '💡',
                title: 'Lighting Solutions',
                description: 'Modern lighting design, installation, and management for residential and commercial spaces',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: '🔌',
                title: 'Power Management',
                description: 'Comprehensive electricity management systems to optimize power consumption and efficiency',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: '⚡',
                title: 'High Voltage Systems',
                description: 'Professional installation and maintenance of high voltage electrical systems',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: '🏗️',
                title: 'Electrical Installation',
                description: 'Complete electrical installation services for new constructions and renovations',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: '🛠️',
                title: 'Maintenance & Support',
                description: 'Regular maintenance and 24/7 support to keep your electrical systems running smoothly',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 hover-lift fade-in"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-cyan-400">VoltVentures</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Based in Lebanon, VoltVentures is a leading electrical services company dedicated to providing 
                top-quality solutions for all your electrical needs. We specialize in fixing, managing, and 
                maintaining electrical systems with a focus on safety, efficiency, and innovation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our team of certified electricians brings years of experience in handling everything from 
                residential lighting to complex high-voltage industrial systems. We combine traditional expertise 
                with modern technology to deliver reliable electrical solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-5 rounded-lg bg-gray-900/40 border border-gray-700/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="p-5 rounded-lg bg-gray-900/40 border border-gray-700/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative fade-in">
              <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-700/50">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/30">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xl">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-white">Certified Professionals</div>
                      <div className="text-gray-400 text-sm">Licensed & Insured</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/30">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div>
                      <div className="font-semibold text-white">24/7 Emergency Service</div>
                      <div className="text-gray-400 text-sm">Always Available</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/30">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xl">
                      🛡️
                    </div>
                    <div>
                      <div className="font-semibold text-white">Quality Guaranteed</div>
                      <div className="text-gray-400 text-sm">100% Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to power up your project? Contact us today for a free consultation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 fade-in">
                <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center text-2xl mb-4">
                  📧
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                <p className="text-cyan-400">info@voltventures961.com</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 fade-in">
                <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center text-2xl mb-4">
                  🌐
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Website</h3>
                <p className="text-cyan-400">voltventures961.com</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-700/50 fade-in">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-cyan-500 focus:outline-none text-white transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-cyan-500 focus:outline-none text-white transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-cyan-500 focus:outline-none text-white transition-colors duration-200"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-cyan-500 focus:outline-none text-white resize-none transition-colors duration-200"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors duration-200 hover-lift"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">V</span>
                </div>
                <span className="text-xl font-semibold text-white">VoltVentures</span>
              </div>
              <p className="text-gray-400 text-sm">
                Powering Lebanon's electrical future with expert solutions and innovative technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 Lebanon</li>
                <li>📧 info@voltventures961.com</li>
                <li>🌐 voltventures961.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} VoltVentures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
