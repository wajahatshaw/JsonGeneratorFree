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
  const containerRef = useRef<HTMLDivElement>(null)
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

  // Handle scroll when editor is empty
  React.useEffect(() => {
    const handleScroll = (e: Event) => {
      const wheelEvent = e as WheelEvent
      if (!value || value.trim() === '') {
        // When editor is empty, always scroll the page
        window.scrollBy(0, wheelEvent.deltaY)
        wheelEvent.preventDefault()
        wheelEvent.stopPropagation()
        wheelEvent.stopImmediatePropagation()
        return false
      }
    }

    // Add event listener to the container div using ref
    if (containerRef.current) {
      containerRef.current.addEventListener('wheel', handleScroll, { passive: false, capture: true })
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('wheel', handleScroll)
        }
      }
    }
  }, [value])


  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(true)
    console.log('Drag over detected')
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Only set drag over to false if we're leaving the container entirely
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false)
      console.log('Drag leave detected')
    }
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Drag enter detected')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      
      // More comprehensive file type checking
      const allowedExtensions = ['.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cs', '.php', '.rb', '.go', '.rs', '.cpp', '.c', '.h', '.json', '.xml', '.yaml', '.yml', '.csv']
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
      
      if (file.type.startsWith('text/') || allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const content = event.target?.result as string || ''
          onChange(content)
          console.log(`File "${file.name}" loaded successfully (${content.length} characters)`)
        }
        reader.onerror = () => {
          console.error('Error reading file:', file.name)
        }
        reader.readAsText(file)
      } else {
        console.warn(`Unsupported file type: ${file.type} for file: ${file.name}`)
        alert(`Unsupported file type. Please upload a text file or code file (${allowedExtensions.join(', ')})`)
      }
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // More comprehensive file type checking
      const allowedExtensions = ['.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cs', '.php', '.rb', '.go', '.rs', '.cpp', '.c', '.h', '.json', '.xml', '.yaml', '.yml', '.csv']
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
      
      if (file.type.startsWith('text/') || allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const content = event.target?.result as string || ''
          onChange(content)
          console.log(`File "${file.name}" loaded successfully (${content.length} characters)`)
        }
        reader.onerror = () => {
          console.error('Error reading file:', file.name)
        }
        reader.readAsText(file)
      } else {
        console.warn(`Unsupported file type: ${file.type} for file: ${file.name}`)
        alert(`Unsupported file type. Please upload a text file or code file (${allowedExtensions.join(', ')})`)
      }
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
        ref={containerRef}
        className="flex-1 relative min-h-0 md:rounded-bl-lg bg-white dark:bg-[#0f172a]"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isDragOver && (
          <div className="absolute inset-0 bg-blue-600 bg-opacity-30 border-2 border-dashed border-blue-500 rounded-lg flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <FileText className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Drop your file here</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Supported: .js, .ts, .py, .java, .json, .xml, .yaml, .csv and more</p>
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
            domReadOnly: false,
            scrollbar: {
              vertical: (!value || value.trim() === '') ? 'hidden' : 'auto',
              horizontal: (!value || value.trim() === '') ? 'hidden' : 'auto',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8
            },
            mouseWheelScrollSensitivity: (!value || value.trim() === '') ? 0 : 1,
            fastScrollSensitivity: (!value || value.trim() === '') ? 0 : 5
          }}
        />
        </div>
        
        {!value && (
          <div 
            className="absolute inset-0 pointer-events-auto flex items-center justify-center z-10"
            onWheel={(e) => {
              window.scrollBy(0, e.deltaY)
              e.preventDefault()
              e.stopPropagation()
            }}
            onClick={() => {
              // Focus the Monaco editor when clicking on placeholder
              const monacoEditor = document.querySelector('.monaco-editor') as HTMLElement
              if (monacoEditor) {
                monacoEditor.focus()
              }
            }}
          >
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
