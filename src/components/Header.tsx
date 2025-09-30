'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    <header className="bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Branding */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/jsongeneratorlogo.png"
                  alt="Json Generator Free Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">JsonGeneratorFree</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-Powered Mock Data Generator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Animated Actions */}
        <div className="flex items-center">
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
