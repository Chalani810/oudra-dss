'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScopeMenuOpen, setIsScopeMenuOpen] = useState(false);
  const [isMilestoneMenuOpen, setIsMilestoneMenuOpen] = useState(false);

  const projectScopeLinks = [
    { name: 'Literature Survey', href: '#literature-survey' },
    { name: 'Research Gap', href: '#research-gap' },
    { name: 'Problem & Solution', href: '#problem-solution' },
    { name: 'Research Objectives', href: '#objectives' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Technology', href: '#technologies' },
  ];

  const milestoneLinks = [
    { name: 'TAF Submission', href: '#taf-submission' },
    { name: 'Project Charter', href: '#project-charter' },
    { name: 'Proposal Document', href: '#proposal-document' },
    { name: 'Proposal Presentation', href: '#proposal-presentation' },
    { name: 'Progress Presentation I', href: '#progress-presentation-i' },
    { name: 'Progress Presentation II', href: '#progress-presentation-ii' },
    { name: 'Final Report & Group Report', href: '#final-report' },
    { name: 'Final Presentation & Viva', href: '#final-presentation' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'Log Book', href: '#log-book' },
    { name: 'Website Assessment', href: '#website-assessment' },
    { name: 'Research Paper', href: '#research-paper' },
    { name: 'Final Thesis Submission', href: '#final-thesis' }
  ];

  return (
    <nav className="bg-white/60 backdrop-blur-xl border-b border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="#home" className="text-3xl font-black tracking-tighter">
          <span className="text-black">OU</span>
          <span className="text-green-500 drop-shadow-sm">DRA</span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex space-x-8 items-center font-bold text-sm text-gray-900">
          <Link href="#home" className="hover:text-green-500 transition-colors">Home</Link>
          
          {/* Project Scope Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-green-500 transition-colors py-8">
              <span>Domain</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-[80px] left-0 w-64 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="flex flex-col py-2">
                {projectScopeLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-green-500 transition-colors py-8">
              <span>Milestones</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Added max-h and overflow-y-auto so the long list scrolls if it hits the bottom of the screen */}
            <div className="absolute top-[80px] left-0 w-72 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col py-2">
                {milestoneLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="#downloads" className="hover:text-green-500 transition-colors">Downloads</Link>
          <Link href="#team" className="hover:text-green-500 transition-colors">About Us</Link>
          
          <a href="#contact" className="px-6 py-2.5 bg-black text-white rounded-xl hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-green-500 transition-colors bg-white/50 rounded-lg" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-6 flex flex-col space-y-5 font-bold text-gray-900 shadow-2xl absolute w-full left-0 max-h-[85vh] overflow-y-auto">
          <Link href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-green-500 text-lg">Home</Link>
          
          {/* Mobile Project Scope Accordion */}
          <div className="flex flex-col space-y-3">
            <button onClick={() => setIsScopeMenuOpen(!isScopeMenuOpen)} className="flex justify-between items-center w-full hover:text-green-500 text-lg">
              <span>Domain</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${isScopeMenuOpen ? 'rotate-180 text-green-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isScopeMenuOpen && (
              <div className="flex flex-col pl-4 space-y-3 border-l-2 border-green-100 mt-2">
                {projectScopeLinks.map((link, index) => (
                  <Link key={index} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base text-gray-600 hover:text-green-600 font-medium py-1">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Milestones Accordion */}
          <div className="flex flex-col space-y-3">
            <button onClick={() => setIsMilestoneMenuOpen(!isMilestoneMenuOpen)} className="flex justify-between items-center w-full hover:text-green-500 text-lg">
              <span>Milestones</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${isMilestoneMenuOpen ? 'rotate-180 text-green-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMilestoneMenuOpen && (
              <div className="flex flex-col pl-4 space-y-3 border-l-2 border-green-100 mt-2">
                {milestoneLinks.map((link, index) => (
                  <Link key={index} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base text-gray-600 hover:text-green-600 font-medium py-1">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#downloads" onClick={() => setIsMenuOpen(false)} className="hover:text-green-500 text-lg">Downloads</Link>
          <Link href="#team" onClick={() => setIsMenuOpen(false)} className="hover:text-green-500 text-lg">About Us</Link>
          <hr className="border-gray-100" />
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-center py-3 bg-black text-white rounded-xl hover:bg-green-500 hover:text-black transition-colors">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}