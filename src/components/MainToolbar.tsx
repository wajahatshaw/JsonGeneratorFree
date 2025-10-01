'use client'

import { 
  Upload, 
  Trash2, 
  Save,
  Sparkles,
  ArrowRightLeft,
  ChevronDown,
  Download
} from 'lucide-react'
import { TextShimmer } from '@/components/ui/text-shimmer'

interface MainToolbarProps {
  onClear: () => void
  onSave: () => void
  onUpload: () => void
  onGenerate?: () => void
  isGenerating?: boolean
  showConverter?: boolean
  selectedFormat?: string
  showFormatDropdown?: boolean
  onConverterClick?: () => void
  onFormatSelect?: (format: string) => void
  onExportConverted?: () => void
}

export function MainToolbar({ 
  onClear, 
  onSave, 
  onUpload, 
  onGenerate, 
  isGenerating,
  showConverter,
  selectedFormat,
  showFormatDropdown,
  onConverterClick,
  onFormatSelect,
  onExportConverted
}: MainToolbarProps) {
  return (
    <div className="bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-2 sm:px-4 py-2 sm:py-3">
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col sm:hidden space-y-2">
        {/* Generate Button - Full width on mobile */}
        {onGenerate && (
          <button 
            onClick={onGenerate}
            disabled={isGenerating}
            className="btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium w-full"
          >
            <Sparkles className="w-4 h-4" />
            <TextShimmer 
              duration={1.5}
              className="text-sm font-medium generate-button-shimmer"
            >
              {isGenerating ? 'Generating...' : 'Generate'}
            </TextShimmer>
          </button>
        )}
        
        {/* Action Buttons Row */}
        <div className="flex items-center justify-between space-x-1">
          <div className="flex items-center space-x-1 flex-1">
            <button 
              onClick={onUpload}
              className="btn-secondary flex items-center justify-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-2 py-1.5 rounded text-xs flex-1"
            >
              <Upload className="w-3 h-3" />
              <span className="hidden xs:inline">Upload</span>
            </button>
            
            <button 
              onClick={onSave}
              className="btn-secondary flex items-center justify-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-2 py-1.5 rounded text-xs flex-1"
            >
              <Save className="w-3 h-3" />
              <span className="hidden xs:inline">Save</span>
            </button>
            
            <button 
              onClick={onClear}
              className="btn-secondary flex items-center justify-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-2 py-1.5 rounded text-xs flex-1"
            >
              <Trash2 className="w-3 h-3" />
              <span className="hidden xs:inline">Clear</span>
            </button>
          </div>
          
          {/* Converter Buttons */}
          {showConverter && (
            <div className="flex items-center space-x-1">
              <button 
                onClick={onConverterClick}
                className="btn-secondary flex items-center justify-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-2 py-1.5 rounded text-xs"
              >
                <ArrowRightLeft className="w-3 h-3" />
                <span className="hidden xs:inline">Convert</span>
              </button>
              
              {showFormatDropdown && (
                <div className="relative">
                  <button 
                    className="btn-secondary flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-2 py-1.5 rounded text-xs"
                  >
                    <span>{selectedFormat}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  
                  <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[100px]">
                    {['JSON', 'XML', 'YAML', 'CSV'].map((format) => (
                      <button
                        key={format}
                        onClick={() => onFormatSelect?.(format)}
                        className={`w-full px-3 py-2 text-left text-xs hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg ${
                          selectedFormat === format ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <button 
                onClick={onExportConverted}
                className="btn-secondary flex items-center justify-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-2 py-1.5 rounded text-xs"
              >
                <Download className="w-3 h-3" />
                <span className="hidden xs:inline">Export</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout - Original */}
      <div className="hidden sm:flex items-center justify-center relative">
        {/* Left side - File Operations */}
        <div className="absolute left-0 flex items-center space-x-2">
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

        {/* Center - Generate Button */}
        <div className="flex items-center justify-center">
          {onGenerate && (
            <button 
              onClick={onGenerate}
              disabled={isGenerating}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <TextShimmer 
                duration={1.5}
                className="text-sm font-medium generate-button-shimmer"
              >
                {isGenerating ? 'Generating...' : 'Generate'}
              </TextShimmer>
            </button>
          )}
        </div>

        {/* Right side - Converter */}
        <div className="absolute right-0 flex items-center space-x-2">
          {/* Convert Button - Always visible when converter is enabled */}
          {showConverter && (
            <button 
              onClick={onConverterClick}
              className="btn-secondary flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-3 py-2 rounded-lg"
            >
              <ArrowRightLeft className="w-4 h-4" />
              <span>Convert</span>
            </button>
          )}

          {/* Format Dropdown - Separate button that appears when Convert is clicked */}
          {showConverter && showFormatDropdown && (
            <div className="relative">
              <button 
                className="btn-secondary flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-3 py-2 rounded-lg"
              >
                <span>{selectedFormat}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[120px]">
                {['JSON', 'XML', 'YAML', 'CSV'].map((format) => (
                  <button
                    key={format}
                    onClick={() => onFormatSelect?.(format)}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg ${
                      selectedFormat === format ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {format}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Export Button */}
          {showConverter && (
            <button 
              onClick={onExportConverted}
              className="btn-secondary flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-3 py-2 rounded-lg"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
