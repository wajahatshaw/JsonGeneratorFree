'use client'

import { useState } from 'react'
import { 
  X, 
  Plus, 
  FileText, 
  Folder, 
  Search, 
  Clock, 
  Star,
  Trash2,
  Edit3
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface Template {
  id: string
  name: string
  createdAt: string
  isStarred: boolean
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [templates, setTemplates] = useState<Template[]>([
    { id: '1', name: 'User Management API', createdAt: '2024-01-15', isStarred: true },
    { id: '2', name: 'E-commerce Products', createdAt: '2024-01-14', isStarred: false },
    { id: '3', name: 'Blog Posts Schema', createdAt: '2024-01-13', isStarred: true },
  ])

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateNew = () => {
    // Create new template logic
    console.log('Create new template')
  }

  const handleDeleteTemplate = (id: string) => {
    setTemplates(templates.filter(t => t.id !== id))
  }

  const handleToggleStar = (id: string) => {
    setTemplates(templates.map(t => 
      t.id === id ? { ...t, isStarred: !t.isStarred } : t
    ))
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gray-800 border-r border-gray-700 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:z-auto
        ${!isOpen ? 'lg:hidden' : ''}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white">Templates</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-1 hover:bg-gray-700 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* New Template Button */}
          <div className="p-4 border-b border-gray-700">
            <button
              onClick={handleCreateNew}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New template</span>
            </button>
          </div>

          {/* Templates List */}
          <div className="flex-1 overflow-y-auto">
            {filteredTemplates.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No templates found</p>
                {searchQuery && (
                  <p className="text-xs mt-1">Try adjusting your search</p>
                )}
              </div>
            ) : (
              <div className="p-2">
                {filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="group p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <h3 className="text-sm font-medium text-white truncate">
                            {template.name}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-400">
                            {new Date(template.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleToggleStar(template.id)
                          }}
                          className="p-1 hover:bg-gray-600 rounded"
                        >
                          <Star 
                            className={`w-3 h-3 ${
                              template.isStarred ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`} 
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            // Edit template logic
                          }}
                          className="p-1 hover:bg-gray-600 rounded"
                        >
                          <Edit3 className="w-3 h-3 text-gray-400" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteTemplate(template.id)
                          }}
                          className="p-1 hover:bg-gray-600 rounded"
                        >
                          <Trash2 className="w-3 h-3 text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-xs text-gray-500 text-center">
              <p>Help Ukraine! 🇺🇦</p>
              <p className="mt-1">Feedback • Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
