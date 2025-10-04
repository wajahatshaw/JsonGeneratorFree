'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Toggle dark class on document
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-2 sm:px-4 py-2 sm:py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Menu Button (Mobile/Tablet) + Branding */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center space-x-1 sm:space-x-3">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-10 h-10 sm:w-16 sm:h-16 relative flex-shrink-0">
                <Image
                  src="/assets/jsongeneratorlogo.png"
                  alt="Json Generator Free Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-xl font-bold text-gray-900 dark:text-white truncate">JsonGeneratorFree</h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">AI-Powered Mock Data Generator</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Links - Desktop Only */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Generator
          </Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Documentation
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side - Animated Actions */}
        <div className="flex items-center flex-shrink-0">
          <ToolbarGradientMenu
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            onExport={onExport || (() => console.log('Export clicked'))}
            onCopy={onCopy || (() => console.log('Copy clicked'))}
            onSignIn={onSignIn || (() => console.log('Sign In clicked'))}
            hasData={hasData}
          />
        </div>
      </div>
    </header>
  )
}
