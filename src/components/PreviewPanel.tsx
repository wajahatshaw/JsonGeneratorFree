'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { FileText, Copy, Download, Eye } from 'lucide-react'
import { copyToClipboard, downloadFile, formatJson } from '@/lib/utils'
import { QuantumPulseLoader } from '@/components/ui/quantum-pulse-loader'

// Dynamically import Monaco Editor for preview
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-gray-600 dark:text-gray-400">Loading preview...</div>
    </div>
  )
})

interface PreviewPanelProps {
  data: string
  isLoading: boolean
  onCopy?: () => void
  onDownload?: () => void
}

export function PreviewPanel({ data, isLoading, onCopy, onDownload }: PreviewPanelProps) {
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted')
  const [isDarkMode, setIsDarkMode] = useState(false) // Always start with light theme

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }
    
    // Check initial theme immediately
    checkTheme()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])


  const handleCopy = async () => {
    if (onCopy) {
      onCopy()
    } else {
      try {
        await copyToClipboard(data)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }

  const handleDownload = () => {
    if (onDownload) {
      onDownload()
    } else {
      downloadFile(data, 'generated-data.json', 'application/json')
    }
  }


  return (
    <div className="flex-1 flex flex-col min-h-0 max-h-full min-w-0 bg-white dark:bg-[#0f172a] rounded-br-lg">
      <div className="panel-header flex items-center justify-between flex-shrink-0 bg-gray-50 border-b border-gray-200 px-4 py-3 dark:bg-gray-800 dark:border-gray-700 md:rounded-tr-lg">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4 text-green-500 dark:text-green-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Generated Data</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">Read-only</span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setViewMode('formatted')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                viewMode === 'formatted' 
                  ? 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 font-medium' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Formatted
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                viewMode === 'raw' 
                  ? 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 font-medium' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Raw
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative min-h-0 overflow-hidden rounded-br-lg bg-white dark:bg-[#0f172a]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0f172a]">
            <QuantumPulseLoader />
          </div>
        ) : data ? (
          <>
            <MonacoEditor
              key={`monaco-preview-${isDarkMode ? 'dark' : 'light'}`}
              height="100%"
              defaultLanguage="json"
              value={viewMode === 'formatted' ? formatJson(data) : data}
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
                readOnly: true
              }}
            />
            
            {/* Action buttons overlay */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleCopy}
                className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
                title="Download as JSON"
              >
                <Download className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0f172a]">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No data generated yet</p>
              <p className="text-sm">Add your source code and click Generate to see mock data</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
