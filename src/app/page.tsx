'use client'

import React, { useState } from 'react'
import { Header } from '@/components/Header'
import { MainToolbar } from '@/components/MainToolbar'
import { CodeEditor } from '@/components/CodeEditor'
import { PreviewPanel } from '@/components/PreviewPanel'
import { JsonGeneratorSidebar } from '@/components/ui/JsonGeneratorSidebar'
import { analyzeCode, generateMockData } from '@/lib/codeAnalyzer'
import { formatJson, copyToClipboard, downloadFile } from '@/lib/utils'
import { useToast } from '@/components/Toast'
import { Template } from '@/lib/templateService'
import { jsonToXml, jsonToYaml, jsonToCsv, getMimeType } from '@/lib/converter'

export default function Home() {
  const [sourceCode, setSourceCode] = useState('')
  const [generatedData, setGeneratedData] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showConverter, setShowConverter] = useState(true) // Always show converter buttons
  const [selectedFormat, setSelectedFormat] = useState('JSON')
  const [convertedData, setConvertedData] = useState('')
  const [showFormatDropdown, setShowFormatDropdown] = useState(false)
  const { addToast, ToastContainer } = useToast()
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile on mount and window resize
  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024 // Changed to 1024px for better tablet handling
      setIsMobile(mobile)
      if (mobile) {
        setSidebarOpen(false) // Close sidebar on mobile/tablet by default
      } else {
        setSidebarOpen(true) // Open sidebar on desktop
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleGenerate = async () => {
    if (!sourceCode.trim()) {
      addToast('Please enter some source code first', 'error')
      return
    }
    
    setIsGenerating(true)
    addToast('Analyzing your code and generating mock data...', 'info')
    
    try {
      // Analyze the source code
      const codeStructure = analyzeCode(sourceCode)
      
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Generate mock data based on code structure
      const mockData = generateMockData(codeStructure)
      
      // If no structure found, generate sample data
      if (Object.keys(mockData).length === 0) {
        const sampleData = generateSampleDataFromCode(sourceCode)
        const jsonData = JSON.stringify(sampleData, null, 2)
        setGeneratedData(jsonData)
        setConvertedData(jsonData) // Set initial converted data to JSON
        addToast('Generated sample mock data from your code', 'success')
      } else {
        const jsonData = JSON.stringify(mockData, null, 2)
        setGeneratedData(jsonData)
        setConvertedData(jsonData) // Set initial converted data to JSON
        addToast('Successfully generated mock data from code structure', 'success')
      }
    } catch (error) {
      console.error('Generation failed:', error)
      
      // Handle specific error cases
      if (error instanceof Error) {
        if (error.message === 'No code provided') {
          addToast('Please enter some source code first', 'error')
          return // Don't generate anything
        } else if (error.message === 'No valid programming language constructs detected') {
          addToast('No valid programming language detected. Please enter TypeScript, JavaScript, JSON, or JSON Generator format code.', 'error')
          return // Don't generate anything
        } else {
          addToast('Generation failed, showing fallback data', 'error')
        }
      } else {
        addToast('Generation failed, showing fallback data', 'error')
      }
      // Fallback to sample data only for other errors
      const fallbackData = generateSampleDataFromCode(sourceCode)
      const jsonData = JSON.stringify(fallbackData, null, 2)
      setGeneratedData(jsonData)
      setConvertedData(jsonData) // Set initial converted data to JSON
    } finally {
      setIsGenerating(false)
    }
  }

  const generateSampleDataFromCode = (code: string) => {
    // Try to extract class/interface names from code
    const classMatches = code.match(/class\s+(\w+)/g) || []
    const interfaceMatches = code.match(/interface\s+(\w+)/g) || []
    
    const entities = [
      ...classMatches.map(m => m.replace('class ', '')),
      ...interfaceMatches.map(m => m.replace('interface ', ''))
    ]
    
    if (entities.length === 0) {
      // Default sample data
      return {
        "users": [
          {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "age": 28,
            "isActive": true,
            "createdAt": new Date().toISOString()
          },
          {
            "id": 2,
            "name": "Jane Smith", 
            "email": "jane.smith@example.com",
            "age": 32,
            "isActive": false,
            "createdAt": new Date().toISOString()
          }
        ],
        "products": [
          {
            "id": "prod_001",
            "name": "Wireless Headphones",
            "price": 99.99,
            "category": "Electronics",
            "inStock": true,
            "tags": ["wireless", "audio", "electronics"]
          }
        ]
      }
    }
    
    // Generate data based on found entities
    const result: any = {}
    entities.slice(0, 3).forEach(entity => {
      const key = entity.toLowerCase() + 's'
      result[key] = [
        {
          id: Math.floor(Math.random() * 1000),
          name: `Sample ${entity}`,
          description: `This is a sample ${entity.toLowerCase()} object`,
          createdAt: new Date().toISOString(),
          isActive: Math.random() > 0.5
        },
        {
          id: Math.floor(Math.random() * 1000),
          name: `Another ${entity}`,
          description: `Another sample ${entity.toLowerCase()} object`,
          createdAt: new Date().toISOString(),
          isActive: Math.random() > 0.5
        }
      ]
    })
    
    return result
  }

  const handleClear = () => {
    setSourceCode('')
    setGeneratedData('')
    setConvertedData('') // Clear converted data
    setCurrentTemplate(null)
    setShowFormatDropdown(false) // Hide dropdown
    addToast('Cleared all content', 'info')
  }

  const handleCopy = async () => {
    if (!generatedData) {
      addToast('No data to copy', 'error')
      return
    }
    try {
      await copyToClipboard(generatedData)
      addToast('Data copied to clipboard', 'success')
    } catch (err) {
      addToast('Failed to copy data', 'error')
    }
  }

  const handleExport = () => {
    if (!generatedData) {
      addToast('No data to export', 'error')
      return
    }
    try {
      downloadFile(generatedData, 'generated-data.json', 'application/json')
      addToast('Data exported successfully', 'success')
    } catch (err) {
      addToast('Failed to export data', 'error')
    }
  }

  const handleUpload = () => {
    // Create a file input element
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.js,.ts,.jsx,.tsx,.py,.java,.cs,.php,.rb,.go,.rs,.cpp,.c,.h,.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const content = event.target?.result as string
          setSourceCode(content)
          addToast(`File "${file.name}" uploaded successfully`, 'success')
        }
        reader.onerror = () => {
          addToast('Failed to read file', 'error')
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const handleTemplateSelect = (template: Template) => {
    setSourceCode(template.content)
    addToast(`Template "${template.name}" loaded`, 'success')
  }

  const handleCreateNewTemplate = () => {
    addToast('New template created and previous content saved', 'success')
  }

  const handleContentChange = (content: string) => {
    setSourceCode(content)
  }

  const handleClearGeneratedData = () => {
    setGeneratedData('')
    setShowFormatDropdown(false) // Hide dropdown
  }

  // Conversion functions
  const convertToFormat = (format: string) => {
    try {
      const jsonData = JSON.parse(generatedData)
      let converted = ''
      
      switch (format) {
        case 'XML':
          converted = jsonToXml(jsonData)
          break
        case 'YAML':
          converted = jsonToYaml(jsonData)
          break
        case 'CSV':
          converted = jsonToCsv(jsonData)
          break
        default:
          converted = generatedData
      }
      
      setConvertedData(converted)
      setSelectedFormat(format)
      setShowFormatDropdown(false)
      addToast(`Converted to ${format} successfully!`, 'success')
    } catch (error) {
      addToast('Failed to convert data. Please check if the JSON is valid.', 'error')
    }
  }

  const handleConverterClick = () => {
    setShowFormatDropdown(!showFormatDropdown)
  }

  const handleExportConverted = () => {
    const extension = selectedFormat.toLowerCase()
    const mimeType = getMimeType(selectedFormat)
    downloadFile(convertedData, `converted-data.${extension}`, mimeType)
    addToast(`Downloaded as ${selectedFormat} file`, 'success')
  }

  // Dual scroll functionality - Monaco content first, then page
  React.useEffect(() => {
    const setupDualScroll = () => {
      // Find all Monaco editors
      const monacoEditors = document.querySelectorAll('.monaco-editor')
      
      monacoEditors.forEach(editor => {
        const editorElement = editor as HTMLElement
        
        // Remove any existing wheel handlers
        editorElement.onwheel = null
        
        // Add dual scroll handler
        editorElement.addEventListener('wheel', (e) => {
          // Check if container is empty
          const container = editorElement.closest('[class*="flex-1 flex flex-col border-r border-gray-300"], [class*="flex-1 flex flex-col border-l border-gray-300"]')
          let isEmpty = false
          
          if (container) {
            const isCodeEditor = container.className.includes('border-r')
            isEmpty = isCodeEditor ? (!sourceCode || sourceCode.trim() === '') : (!generatedData || generatedData.trim() === '')
          }
          
          // If empty, always scroll the page
          if (isEmpty) {
            window.scrollBy(0, e.deltaY)
            e.preventDefault()
            e.stopPropagation()
            return
          }
          
          // For containers with content, check Monaco scroll state
          const scrollContainer = editorElement.querySelector('.monaco-scrollable-element') as HTMLElement
          if (scrollContainer) {
            const isAtTop = scrollContainer.scrollTop <= 0
            const isAtBottom = scrollContainer.scrollTop >= (scrollContainer.scrollHeight - scrollContainer.clientHeight)
            
            // If Monaco can't scroll further, scroll the page
            if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
              window.scrollBy(0, e.deltaY)
              e.preventDefault()
              e.stopPropagation()
            }
            // Otherwise, let Monaco handle the scroll (don't prevent default)
          } else {
            // If no scroll container found, scroll the page
            window.scrollBy(0, e.deltaY)
            e.preventDefault()
            e.stopPropagation()
          }
        }, { passive: false })
      })
    }

    // Run immediately
    setupDualScroll()
    
    // Run again after a delay to catch dynamically loaded Monaco editors
    const timer = setTimeout(setupDualScroll, 1000)
    
    // Also run when content changes
    const observer = new MutationObserver(setupDualScroll)
    observer.observe(document.body, { childList: true, subtree: true })
    
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [sourceCode, generatedData])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="main-layout flex flex-col overflow-hidden flex-1 w-full">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onExport={handleExport}
          onCopy={handleCopy}
          onSignIn={() => addToast('Sign In functionality coming soon', 'info')}
          hasData={!!generatedData}
        />

        {/* Top Ad Space - Below Header */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
          <div className="h-12 sm:h-20 flex items-center justify-center px-2">
            <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              Advertisement Space
            </div>
          </div>
        </div>
      
      <div className="flex flex-1 min-h-0 relative w-full">
        {/* Sidebar - Desktop: always visible, Mobile/Tablet: overlay drawer */}
        {sidebarOpen && (
          <>
            {/* Mobile/Tablet Overlay */}
            {isMobile && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            
            {/* Sidebar Container */}
            <div className={`
              ${isMobile ? 'fixed left-0 top-0 bottom-0 z-50' : 'flex-shrink-0 h-full'}
              lg:relative lg:z-auto
            `}>
              <JsonGeneratorSidebar 
                onTemplateSelect={handleTemplateSelect}
                onCreateNew={handleCreateNewTemplate}
                onSearch={(query) => {
                  console.log('Search query:', query)
                }}
                currentContent={sourceCode}
                onContentChange={handleContentChange}
                onClearGeneratedData={handleClearGeneratedData}
              />
            </div>
          </>
        )}
        
        <div className="main-content flex flex-col min-w-0 flex-1 w-full overflow-hidden">
        <MainToolbar 
          onClear={handleClear}
          onSave={() => addToast('Save functionality coming soon', 'info')}
          onUpload={handleUpload}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          showConverter={showConverter}
          selectedFormat={selectedFormat}
          showFormatDropdown={showFormatDropdown}
          onConverterClick={handleConverterClick}
          onFormatSelect={convertToFormat}
          onExportConverted={handleExportConverted}
        />
        
        <div className="flex-1 flex flex-col md:flex-row min-h-0 p-2 sm:p-4 w-full">
          <div className="flex-1 flex flex-col md:flex-row min-h-0 max-h-full w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="flex-1 min-h-[300px] md:min-h-0 md:border-r border-gray-300 dark:border-gray-700 flex flex-col w-full md:w-1/2">
              <CodeEditor
                value={sourceCode}
                onChange={setSourceCode}
                placeholder="Paste your source code here or drag & drop a file..."
              />
            </div>
            
            <div className="flex-1 min-h-[300px] md:min-h-0 border-t md:border-t-0 flex flex-col w-full md:w-1/2">
              <PreviewPanel
                data={convertedData || generatedData}
                isLoading={isGenerating}
                onCopy={handleCopy}
                onDownload={handleExportConverted}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* Bottom Ad Space */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
        <div className="h-12 sm:h-20 flex items-center justify-center px-2">
          <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            Advertisement Space
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}
