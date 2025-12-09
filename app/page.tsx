'use client';

import { useEffect, useState } from 'react';
import MobileMenu from './components/MobileMenu';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center glow">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <span className="text-2xl font-bold glow-text text-cyan-400">VoltVentures</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="#contact" 
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all glow"
              >
                Get Quote
              </a>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-up">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-semibold">
                ⚡ Professional Electrical Services
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text">
              Powering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Lebanon's Future
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert electrical solutions for fixing, managing electricity, lighting, and high voltage systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all glow pulse-glow"
              >
                Get Started
          </a>
          <a
                href="#services" 
                className="px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 font-bold text-lg hover:bg-cyan-500/10 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 glow-text">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive electrical solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Electrical Repairs',
                description: 'Expert fixing and troubleshooting of all electrical systems and components',
                gradient: 'from-yellow-500 to-orange-600'
              },
              {
                icon: '💡',
                title: 'Lighting Solutions',
                description: 'Modern lighting design, installation, and management for residential and commercial spaces',
                gradient: 'from-cyan-500 to-blue-600'
              },
              {
                icon: '🔌',
                title: 'Power Management',
                description: 'Comprehensive electricity management systems to optimize power consumption and efficiency',
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                icon: '⚡',
                title: 'High Voltage Systems',
                description: 'Professional installation and maintenance of high voltage electrical systems',
                gradient: 'from-red-500 to-orange-600'
              },
              {
                icon: '🏗️',
                title: 'Electrical Installation',
                description: 'Complete electrical installation services for new constructions and renovations',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: '🛠️',
                title: 'Maintenance & Support',
                description: 'Regular maintenance and 24/7 support to keep your electrical systems running smoothly',
                gradient: 'from-indigo-500 to-purple-600'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6 glow`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text">
                About <span className="text-cyan-400">VoltVentures</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Based in Lebanon, VoltVentures is a leading electrical services company dedicated to providing 
                top-quality solutions for all your electrical needs. We specialize in fixing, managing, and 
                maintaining electrical systems with a focus on safety, efficiency, and innovation.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our team of certified electricians brings years of experience in handling everything from 
                residential lighting to complex high-voltage industrial systems. We combine traditional expertise 
                with modern technology to deliver reliable electrical solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30">
                  <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative fade-in-up">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl blur-xl"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-white">Certified Professionals</div>
                      <div className="text-gray-400 text-sm">Licensed & Insured</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <div className="font-bold text-white">24/7 Emergency Service</div>
                      <div className="text-gray-400 text-sm">Always Available</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
                      🛡️
                    </div>
                    <div>
                      <div className="font-bold text-white">Quality Guaranteed</div>
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
      <section id="contact" className="py-20 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 glow-text">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to power up your project? Contact us today for a free consultation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all fade-in-up">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl mb-6 glow">
                  📧
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Email</h3>
                <p className="text-cyan-400 text-lg">info@voltventures961.com</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all fade-in-up">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-3xl mb-6 glow">
                  🌐
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Website</h3>
                <p className="text-cyan-400 text-lg">voltventures961.com</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 fade-in-up">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all glow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center glow">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
                <span className="text-2xl font-bold glow-text text-cyan-400">VoltVentures</span>
              </div>
              <p className="text-gray-400">
                Powering Lebanon's electrical future with expert solutions and innovative technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Lebanon</li>
                <li>📧 info@voltventures961.com</li>
                <li>🌐 voltventures961.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-cyan-500/20">
            <p className="text-gray-400">
              © {new Date().getFullYear()} VoltVentures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
