'use client'

import { useState } from 'react'
import { MainToolbar } from '@/components/MainToolbar'
import { CodeEditor } from '@/components/CodeEditor'
import { PreviewPanel } from '@/components/PreviewPanel'
import { JsonGeneratorSidebar } from '@/components/ui/JsonGeneratorSidebar'
import { analyzeCode, generateMockData } from '@/lib/codeAnalyzer'
import { formatJson, copyToClipboard, downloadFile } from '@/lib/utils'
import { useToast } from '@/components/Toast'
import { Template } from '@/lib/templateService'

export default function Home() {
  const [sourceCode, setSourceCode] = useState('')
  const [generatedData, setGeneratedData] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState<string | null>(null)
  const { addToast, ToastContainer } = useToast()

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
        setGeneratedData(JSON.stringify(sampleData, null, 2))
        addToast('Generated sample mock data from your code', 'success')
      } else {
        setGeneratedData(JSON.stringify(mockData, null, 2))
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
      setGeneratedData(JSON.stringify(fallbackData, null, 2))
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
    setCurrentTemplate(null)
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
  }

  return (
    <div className="main-layout bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex overflow-hidden">
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
      
      <div className="main-content flex flex-col min-w-0 overflow-hidden">
        <MainToolbar 
          onClear={handleClear}
          onSave={() => addToast('Save functionality coming soon', 'info')}
          onExport={handleExport}
          onCopy={handleCopy}
          onUpload={handleUpload}
          hasData={!!generatedData}
        />
        
        <div className="flex-1 flex min-h-0 overflow-hidden">
          <div className="flex-1 flex min-h-0 max-h-full overflow-hidden">
            <CodeEditor
              value={sourceCode}
              onChange={setSourceCode}
              placeholder="Paste your source code here or drag & drop a file..."
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
            
            <PreviewPanel
              data={generatedData}
              isLoading={isGenerating}
              onCopy={handleCopy}
              onDownload={handleExport}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
