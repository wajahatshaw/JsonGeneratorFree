'use client'

import { useState } from 'react'
import { 
  Upload, 
  Trash2, 
  Save
} from 'lucide-react'
import ToolbarGradientMenu from '@/components/ui/toolbar-gradient-menu'

interface MainToolbarProps {
  onClear: () => void
  onSave: () => void
  onExport: () => void
  onCopy: () => void
  onUpload: () => void
  hasData: boolean
}

export function MainToolbar({ onClear, onSave, onExport, onCopy, onUpload, hasData }: MainToolbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false) // Default to light mode

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
    <div className="bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* File Operations */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={onUpload}
            className="btn-secondary flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
          >
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </button>
          
          <button 
            onClick={onSave}
            className="btn-secondary flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          
          <button 
            onClick={onClear}
            className="btn-secondary flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>

        {/* Middle Operations */}
        <div className="flex items-center space-x-2">
          {/* Generate button moved to CodeEditor */}
        </div>

        {/* Output Operations */}
        <div className="flex items-center">
          <ToolbarGradientMenu
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            onExport={onExport}
            onCopy={onCopy}
            onSignIn={() => console.log('Sign In clicked')}
            hasData={hasData}
          />
        </div>
      </div>
    </div>
  )
}
