export interface Template {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const TEMPLATES_STORAGE_KEY = 'json-generator-templates';

export class TemplateService {
  static getTemplates(): Template[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(TEMPLATES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading templates:', error);
      return [];
    }
  }

  static saveTemplate(template: Omit<Template, 'id' | 'createdAt' | 'updatedAt'>): Template {
    const templates = this.getTemplates();
    const now = new Date().toISOString();
    
    const newTemplate: Template = {
      id: `template_${Date.now()}`,
      createdAt: now,
      updatedAt: now,
      ...template
    };

    templates.unshift(newTemplate); // Add to beginning for recent first
    this.saveTemplates(templates);
    return newTemplate;
  }

  static updateTemplate(id: string, updates: Partial<Omit<Template, 'id' | 'createdAt'>>): Template | null {
    const templates = this.getTemplates();
    const index = templates.findIndex(t => t.id === id);
    
    if (index === -1) return null;
    
    templates[index] = {
      ...templates[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    this.saveTemplates(templates);
    return templates[index];
  }

  static deleteTemplate(id: string): boolean {
    const templates = this.getTemplates();
    const filtered = templates.filter(t => t.id !== id);
    
    if (filtered.length === templates.length) return false;
    
    this.saveTemplates(filtered);
    return true;
  }

  static getTemplate(id: string): Template | null {
    const templates = this.getTemplates();
    return templates.find(t => t.id === id) || null;
  }

  private static saveTemplates(templates: Template[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(TEMPLATES_STORAGE_KEY, JSON.stringify(templates));
    } catch (error) {
      console.error('Error saving templates:', error);
    }
  }

  static getRecentTemplates(limit: number = 10): Template[] {
    return this.getTemplates().slice(0, limit);
  }
}
