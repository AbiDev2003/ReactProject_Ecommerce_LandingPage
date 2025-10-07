import "/styles/index.css";
import { useState } from 'react';

// Header Component
export default function Header({ onNavigate, userName, location }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-gray-700 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center mx-4">
            <h1 className="text-2xl font-bold text-blue-600">UrbanNex</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <a 
              href="#" 
              className="px-4 py-2 rounded-md text-white bg-gray-600 font-medium" 
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('home')
              } }
            >
              Home
            </a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-600"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('dashboard')
              }}
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-600"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('team')
              } }
            >
              Team
            </a>
            <a href="#contact" className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-600" 
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById('contact')?.scrollIntoView({
                  behavior: "smooth"
                });
              }} 
            >Contact</a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-600"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('about')
              }}
            >
              About
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Notification & Profile */}
          <div className="flex items-center space-x-3">
            {/* Notification Bell */}
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-600 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span className="hidden md:block text-white text-sm">{userName}, {location}</span>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {userName.charAt(0).toUpperCase()}
                </div>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">Your profile</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">Settings</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-600 absolute top-full left-0 w-full shadow-lg z-50 transition-all duration-300 ease-in-out">
          <div className="px-4 py-3 space-y-1">
            <a 
              href="#" 
              className="block px-4 py-2 rounded-md text-white bg-gray-700 font-medium"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('home')
              }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 rounded-md  text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('dashboard')
              } }
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('team')
              }}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" 
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth"
                })
              }}
            >Contact</a>
            <a 
              href="#" 
              className="block px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault(); 
                onNavigate('about')
              }}
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

