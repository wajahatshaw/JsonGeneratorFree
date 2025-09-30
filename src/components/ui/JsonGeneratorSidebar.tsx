"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FileText, Plus, Search, Settings, User, Code, Sparkles, Trash2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TemplateService, Template } from "@/lib/templateService";

interface JsonGeneratorSidebarProps {
  onTemplateSelect?: (template: Template) => void;
  onCreateNew?: () => void;
  onSearch?: (query: string) => void;
  currentContent?: string;
  onContentChange?: (content: string) => void;
  onClearGeneratedData?: () => void;
}

export function JsonGeneratorSidebar({ 
  onTemplateSelect, 
  onCreateNew, 
  onSearch,
  currentContent = "",
  onContentChange,
  onClearGeneratedData
}: JsonGeneratorSidebarProps) {
  const links = [
    {
      label: "Templates",
      href: "#",
      icon: (
        <FileText className="text-gray-600 dark:text-gray-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "New Template",
      href: "#",
      icon: (
        <Plus className="text-gray-600 dark:text-gray-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Search",
      href: "#",
      icon: (
        <Search className="text-gray-600 dark:text-gray-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <Settings className="text-gray-600 dark:text-gray-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);

  // Load templates on component mount
  useEffect(() => {
    const loadedTemplates = TemplateService.getRecentTemplates();
    setTemplates(loadedTemplates);
  }, []);

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateNew = () => {
    // Auto-save current content if it exists
    if (currentContent && currentContent.trim()) {
      const templateName = `Template ${new Date().toLocaleString()}`;
      const template = TemplateService.saveTemplate({
        name: templateName,
        content: currentContent.trim()
      });
      
      // Update templates list
      setTemplates(prev => [template, ...prev.filter(t => t.id !== template.id)]);
      
      // Clear both the editor and generated data
      onContentChange?.('');
      onClearGeneratedData?.();
      
      // Show success message
      onCreateNew?.();
    } else {
      // Just clear both containers if no content
      onContentChange?.('');
      onClearGeneratedData?.();
      onCreateNew?.();
    }
  };


  const handleTemplateSelect = (template: Template) => {
    onTemplateSelect?.(template);
  };

  const handleDeleteTemplate = (templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this template?')) {
      TemplateService.deleteTemplate(templateId);
      setTemplates(prev => prev.filter(t => t.id !== templateId));
    }
  };

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 h-full min-h-full">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden min-h-0">
          {open ? <Logo /> : <LogoIcon />}
          
          {/* Search */}
          {open && (
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div className="mt-6 flex flex-col gap-2">
            {links.map((link, idx) => (
              <div key={idx}>
                {link.label === "New Template" ? (
                  <button
                    onClick={handleCreateNew}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </button>
                ) : (
                  <SidebarLink 
                    link={link}
                    className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Templates List */}
          {open && (
            <div className="mt-6 flex-1">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Recent Templates</h3>
              <div className="space-y-2">
                {filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors group"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {template.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(template.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={(e) => handleDeleteTemplate(template.id, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-all"
                        title="Delete template"
                      >
                        <Trash2 className="w-3 h-3 text-red-500 dark:text-red-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {/* <p>Feedback • Sign in</p> */}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-gray-800 dark:text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 flex items-center justify-center">
        <Code className="w-3 h-3 text-white" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-gray-800 dark:text-white whitespace-pre"
      >
        JsonGeneratorFree
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-gray-800 dark:text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 flex items-center justify-center">
        <Code className="w-3 h-3 text-white" />
      </div>
    </Link>
  );
};
