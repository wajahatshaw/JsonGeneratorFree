'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download, Copy, Sun, Moon } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import ToolbarGradientMenu from '@/components/ui/toolbar-gradient-menu'

interface HeaderProps {
  onMenuClick: () => void
  onExport?: () => void
  onCopy?: () => void
  onSignIn?: () => void
  hasData?: boolean
}

export function Header({ onMenuClick, onExport, onCopy, onSignIn, hasData = false }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const { isSignedIn, user } = useUser()
  const pathname = usePathname()

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true)
    // Check for existing dark mode preference
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    // Toggle dark class on document
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <header className="bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-3 sm:px-4 py-2 sm:py-3 relative">
      <div className="flex items-center justify-between">
        {/* Left side - Menu Button (Mobile) + Branding */}
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-1.5 sm:p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center space-x-1 sm:space-x-3 min-w-0">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2 min-w-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 relative flex-shrink-0">
                <Image
                  src="/assets/jsongeneratorlogo.png"
                  alt="Json Generator Free Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white truncate">
                  JsonGeneratorFree
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block truncate">
                  AI-Powered Mock Data Generator
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Center - Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
          <Link 
            href="/" 
            className={`transition-colors whitespace-nowrap px-3 py-2 rounded-md ${
              isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            Generator
          </Link>
          <Link 
            href="/blog" 
            className={`transition-colors whitespace-nowrap px-3 py-2 rounded-md ${
              isActive('/blog') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            Blog
          </Link>
          <Link 
            href="/docs" 
            className={`transition-colors whitespace-nowrap px-3 py-2 rounded-md ${
              isActive('/docs') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            Documentation
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors whitespace-nowrap px-3 py-2 rounded-md ${
              isActive('/about') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors whitespace-nowrap px-3 py-2 rounded-md ${
              isActive('/contact') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right side - Actions and Authentication */}
        <div className="flex items-center flex-shrink-0 space-x-1 sm:space-x-2 lg:space-x-3">
          {/* Toolbar Menu - Hidden on very small screens, visible on sm+ */}
          <div className="hidden sm:block">
            <ToolbarGradientMenu
              isDarkMode={isDarkMode}
              onToggleDarkMode={toggleDarkMode}
              onExport={onExport || (() => console.log('Export clicked'))}
              onCopy={onCopy || (() => console.log('Copy clicked'))}
              onSignIn={onSignIn || (() => console.log('Sign In clicked'))}
              hasData={hasData}
            />
          </div>
          
          {/* Mobile Action Buttons - Only show on small screens - Exact Web Sequence Order */}
          <div className="sm:hidden flex items-center space-x-2">
            {/* Mobile Navigation Toggle - First (like web right hamburger) */}
            <button
              onClick={toggleMobileNav}
              className="relative p-2 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out group"
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-4 h-4">
                {isMobileNavOpen ? (
                  <X className="w-full h-full text-gray-700 dark:text-gray-300 group-hover:text-white transition-all duration-300 rotate-0 group-hover:rotate-180" />
                ) : (
                  <Menu className="w-full h-full text-gray-700 dark:text-gray-300 group-hover:text-white transition-all duration-300 rotate-0 group-hover:rotate-90" />
                )}
              </div>
            </button>

            {/* Dark Mode Toggle - Second (like web first button) */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 dark:hover:bg-purple-600 hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out group"
              aria-label="Toggle dark mode"
            >
              {isHydrated && isDarkMode ? (
                <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-all duration-300 rotate-0 group-hover:rotate-180" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-all duration-300 rotate-0 group-hover:rotate-12" />
              )}
            </button>
            
            {/* Export/Download Button - Third (like web second button) */}
            <button
              onClick={onExport || (() => console.log('Export clicked'))}
              className="relative p-2 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-200 dark:disabled:hover:bg-gray-700"
              aria-label="Export"
              disabled={!hasData}
            >
              <Download className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
              {hasData && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </button>
            
            {/* Copy Button - Fourth (like web third button) */}
            <button
              onClick={onCopy || (() => console.log('Copy clicked'))}
              className="relative p-2 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-orange-500 dark:hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-200 dark:disabled:hover:bg-gray-700"
              aria-label="Copy"
              disabled={!hasData}
            >
              <Copy className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
              {hasData && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
          
          {/* User Authentication */}
          {isSignedIn ? (
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="hidden md:block text-sm text-gray-600 dark:text-gray-400 truncate max-w-32">
                Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
              </span>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: 'w-7 h-7 sm:w-8 sm:h-8',
                    userButtonPopoverCard: 'shadow-lg border border-gray-200 dark:border-gray-700',
                    userButtonPopoverActionButton: 'hover:bg-gray-50 dark:hover:bg-gray-800',
                  },
                }}
              />
            </div>
          ) : (
            <div className="flex items-center">
              <Link 
                href="/sign-in"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md transition-colors font-medium whitespace-nowrap"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg z-50 transition-all duration-300 ease-in-out ${
        isMobileNavOpen 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform -translate-y-2 pointer-events-none'
      }`}>
        <nav className="px-4 py-3 space-y-2">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-1 ${
              isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMobileNav}
          >
            Generator
          </Link>
          <Link 
            href="/blog" 
            className={`block px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-1 ${
              isActive('/blog') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMobileNav}
          >
            Blog
          </Link>
          <Link 
            href="/docs" 
            className={`block px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-1 ${
              isActive('/docs') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMobileNav}
          >
            Documentation
          </Link>
          <Link 
            href="/about" 
            className={`block px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-1 ${
              isActive('/about') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMobileNav}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`block px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-1 ${
              isActive('/contact') 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMobileNav}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
