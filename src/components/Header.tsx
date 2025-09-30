'use client'

import { useState } from 'react'
import { 
  Menu, 
  Download, 
  Share2, 
  Settings, 
  Sun, 
  User, 
  X,
  Sparkles,
  Code
} from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [showSettings, setShowSettings] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Branding */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">JsonGeneratorFree</h1>
                <p className="text-sm text-gray-400">AI-Powered Mock Data Generator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </button>
          
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            Clear All
          </button>
          
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </button>
        </div>
      </div>

      {/* Settings Dropdown */}
      {showSettings && (
        <div className="absolute right-4 top-16 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 min-w-48">
          <div className="p-2">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm">
              Export Settings
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm">
              Theme Settings
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm">
              API Settings
            </button>
          </div>
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute right-4 top-16 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 min-w-48">
          <div className="p-2">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm">
              Profile Settings
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm">
              Access Tokens
            </button>
            <hr className="my-2 border-gray-700" />
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm text-red-400">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
