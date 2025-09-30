"use client";
import React, { useState } from "react";
import { X, Save, FileText } from "lucide-react";
import { TemplateService, Template } from "@/lib/templateService";

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: Template) => void;
  initialContent?: string;
}

export function TemplateModal({ isOpen, onClose, onSave, initialContent = "" }: TemplateModalProps) {
  const [templateName, setTemplateName] = useState("");
  const [templateContent, setTemplateContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!templateName.trim() || !templateContent.trim()) return;

    setIsSaving(true);
    try {
      const template = TemplateService.saveTemplate({
        name: templateName.trim(),
        content: templateContent.trim()
      });
      onSave(template);
      onClose();
      setTemplateName("");
      setTemplateContent("");
    } catch (error) {
      console.error('Error saving template:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    setTemplateName("");
    setTemplateContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Create New Template</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 space-y-4 overflow-hidden">
          {/* Template Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Template Name
            </label>
            <input
              type="text"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name..."
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Template Content */}
          <div className="flex-1 flex flex-col min-h-0">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Template Content
            </label>
            <textarea
              value={templateContent}
              onChange={(e) => setTemplateContent(e.target.value)}
              placeholder="Paste your JSON generator template here..."
              className="flex-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-4 border-t border-gray-700">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!templateName.trim() || !templateContent.trim() || isSaving}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving...' : 'Save Template'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
