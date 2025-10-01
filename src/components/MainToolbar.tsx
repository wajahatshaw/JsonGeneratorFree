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
import { GlowCard } from '@/components/ui/spotlight-card'

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
      {/* Mobile/Tablet Layout - Stacked (< 1024px) */}
      <div className="flex flex-col lg:hidden space-y-2">
        {/* Generate Button - Full width on mobile/tablet */}
        {onGenerate && (
          <GlowCard 
            customSize={true}
            glowColor="blue"
            className="w-full h-auto aspect-auto p-0 shadow-none bg-transparent"
          >
            <button 
              onClick={onGenerate}
              disabled={isGenerating}
              className="flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl font-medium text-sm w-full relative z-10 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
            </button>
          </GlowCard>
        )}
        
        {/* Action Buttons Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            <GlowCard 
              customSize={true}
              glowColor="purple"
              className="flex-1 min-w-0 h-auto aspect-auto p-0 shadow-none bg-transparent"
            >
              <button 
                onClick={onUpload}
                className="flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm w-full relative z-10 transition-all"
              >
                <Upload className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline truncate">Upload</span>
              </button>
            </GlowCard>
            
            <GlowCard 
              customSize={true}
              glowColor="green"
              className="flex-1 min-w-0 h-auto aspect-auto p-0 shadow-none bg-transparent"
            >
              <button 
                onClick={onSave}
                className="flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm w-full relative z-10 transition-all"
              >
                <Save className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline truncate">Save</span>
              </button>
            </GlowCard>
            
            <GlowCard 
              customSize={true}
              glowColor="red"
              className="flex-1 min-w-0 h-auto aspect-auto p-0 shadow-none bg-transparent"
            >
              <button 
                onClick={onClear}
                className="flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm w-full relative z-10 transition-all"
              >
                <Trash2 className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline truncate">Clear</span>
              </button>
            </GlowCard>
          </div>
          
          {/* Converter Buttons */}
          {showConverter && (
            <div className="flex items-center gap-2">
              <GlowCard 
                customSize={true}
                glowColor="orange"
                className="h-auto aspect-auto p-0 shadow-none bg-transparent"
              >
                <button 
                  onClick={onConverterClick}
                  className="flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm whitespace-nowrap relative z-10 transition-all"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Convert</span>
                </button>
              </GlowCard>
              
              {showFormatDropdown && (
                <div className="relative">
                  <button 
                    className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all"
                  >
                    <span>{selectedFormat}</span>
                    <ChevronDown className="w-4 h-4" />
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
              
              <GlowCard 
                customSize={true}
                glowColor="green"
                className="h-auto aspect-auto p-0 shadow-none bg-transparent"
              >
                <button 
                  onClick={onExportConverted}
                  className="flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm whitespace-nowrap relative z-10 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
              </GlowCard>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout - Original (>= 1024px) */}
      <div className="hidden lg:flex items-center justify-center relative">
        {/* Left side - File Operations */}
        <div className="absolute left-0 flex items-center space-x-2">
          <GlowCard 
            customSize={true}
            glowColor="purple"
            className="h-auto aspect-auto p-0 shadow-none bg-transparent"
          >
          <button 
            onClick={onUpload}
              className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm relative z-10 transition-all"
          >
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </button>
          </GlowCard>
          
          <GlowCard 
            customSize={true}
            glowColor="green"
            className="h-auto aspect-auto p-0 shadow-none bg-transparent"
          >
          <button 
            onClick={onSave}
              className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm relative z-10 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          </GlowCard>
          
          <GlowCard 
            customSize={true}
            glowColor="red"
            className="h-auto aspect-auto p-0 shadow-none bg-transparent"
          >
          <button 
            onClick={onClear}
              className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm relative z-10 transition-all"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear</span>
          </button>
          </GlowCard>
        </div>

        {/* Center - Generate Button */}
        <div className="flex items-center justify-center">
          {onGenerate && (
            <GlowCard 
              customSize={true}
              glowColor="blue"
              className="w-auto h-auto aspect-auto p-0 shadow-none bg-transparent"
            >
            <button 
              onClick={onGenerate}
              disabled={isGenerating}
                className="flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-xl font-medium text-sm relative z-10 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
            </button>
            </GlowCard>
          )}
        </div>

        {/* Right side - Converter */}
        <div className="absolute right-0 flex items-center space-x-2">
          {/* Convert Button - Always visible when converter is enabled */}
          {showConverter && (
            <GlowCard 
              customSize={true}
              glowColor="orange"
              className="h-auto aspect-auto p-0 shadow-none bg-transparent"
            >
            <button 
              onClick={onConverterClick}
                className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm relative z-10 transition-all"
            >
              <ArrowRightLeft className="w-4 h-4" />
              <span>Convert</span>
            </button>
            </GlowCard>
          )}

          {/* Format Dropdown - Separate button that appears when Convert is clicked */}
          {showConverter && showFormatDropdown && (
            <div className="relative">
              <button 
                className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm transition-all"
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
            <GlowCard 
              customSize={true}
              glowColor="green"
              className="h-auto aspect-auto p-0 shadow-none bg-transparent"
            >
            <button 
              onClick={onExportConverted}
                className="flex items-center gap-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm relative z-10 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            </GlowCard>
          )}
        </div>
      </div>
    </div>
  )
}
