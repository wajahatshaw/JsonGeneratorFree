'use client'

import { useState, useRef } from 'react'
import React from 'react'
import dynamic from 'next/dynamic'
import { FileText, Code, Sparkles } from 'lucide-react'
import { TextShimmer } from '@/components/ui/text-shimmer'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-800">
      <div className="text-gray-400">Loading editor...</div>
    </div>
  )
})

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function CodeEditor({ value, onChange, placeholder }: CodeEditorProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Check for dark mode on mount and when theme changes
  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])


  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type === 'text/plain' || file.name.endsWith('.js') || file.name.endsWith('.ts') || file.name.endsWith('.py') || file.name.endsWith('.java')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          onChange(event.target?.result as string || '')
        }
        reader.readAsText(file)
      }
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        onChange(event.target?.result as string || '')
      }
      reader.readAsText(file)
    }
  }

  const handleEditorChange = (value: string | undefined) => {
    onChange(value || '')
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 max-h-full min-w-0 overflow-hidden bg-white dark:bg-[#0f172a] md:rounded-bl-lg">
      <div className="panel-header flex items-center justify-between flex-shrink-0 bg-gray-50 border-b border-gray-200 px-4 py-3 dark:bg-gray-800 dark:border-gray-700 rounded-tl-lg md:rounded-tl-lg">
        <div className="flex items-center space-x-2">
           <Code className="w-4 h-4 text-blue-500 dark:text-blue-400" />
           <h3 className="font-semibold text-gray-900 dark:text-white">Source Code</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hidden sm:flex">
          <FileText className="w-3 h-3" />
          <span>Drag & drop files here</span>
        </div>
      </div>
      
      <div 
        className="flex-1 relative min-h-0 md:rounded-bl-lg bg-white dark:bg-[#0f172a]"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isDragOver && (
          <div className="absolute inset-0 bg-blue-600 bg-opacity-20 border-2 border-dashed border-blue-400 rounded-lg flex items-center justify-center z-50">
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-400 font-medium">Drop your file here</p>
            </div>
          </div>
        )}
        
        <div className="h-full w-full relative z-0">
        <MonacoEditor
          height="100%"
          defaultLanguage="typescript"
          value={value}
          onChange={handleEditorChange}
          theme={isDarkMode ? 'vs-dark' : 'vs-light'}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            lineHeight: 1.5,
            fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
            automaticLayout: true,
            padding: { top: 16, bottom: 16 },
            lineNumbers: 'on',
            glyphMargin: false,
            folding: true,
            renderWhitespace: 'selection',
            wordWrap: 'on',
            bracketPairColorization: { enabled: true },
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            readOnly: false,
            domReadOnly: false
          }}
        />
        </div>
        
        {!value && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
            <div className="text-center text-gray-500 dark:text-gray-400 p-4 rounded-lg">
              <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Ready to analyze your code</p>
              <p className="text-sm">{placeholder}</p>
            </div>
          </div>
        )}
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".js,.ts,.jsx,.tsx,.py,.java,.cs,.php,.rb,.go,.rs,.cpp,.c,.h"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  )
}
