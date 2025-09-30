// JSON to XML conversion
export function jsonToXml(obj: any, rootName: string = 'root'): string {
  const convert = (item: any, name: string): string => {
    if (item === null || item === undefined) {
      return `<${name}></${name}>`
    }
    
    if (typeof item === 'object' && !Array.isArray(item)) {
      const children = Object.keys(item)
        .map(key => convert(item[key], key))
        .join('')
      return `<${name}>${children}</${name}>`
    }
    
    if (Array.isArray(item)) {
      const children = item
        .map((child, index) => convert(child, `${name.slice(0, -1)}_${index}`))
        .join('')
      return `<${name}>${children}</${name}>`
    }
    
    return `<${name}>${item}</${name}>`
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>\n${convert(obj, rootName)}`
}

// JSON to YAML conversion
export function jsonToYaml(obj: any, indent: number = 0): string {
  const spaces = '  '.repeat(indent)
  
  if (obj === null || obj === undefined) {
    return 'null'
  }
  
  if (typeof obj === 'string') {
    return `"${obj}"`
  }
  
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString()
  }
  
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]'
    }
    
    return obj
      .map(item => `${spaces}- ${jsonToYaml(item, indent + 1)}`)
      .join('\n')
  }
  
  if (typeof obj === 'object') {
    const entries = Object.entries(obj)
    if (entries.length === 0) {
      return '{}'
    }
    
    return entries
      .map(([key, value]) => `${spaces}${key}: ${jsonToYaml(value, indent + 1)}`)
      .join('\n')
  }
  
  return obj.toString()
}

// JSON to CSV conversion
export function jsonToCsv(obj: any): string {
  if (!Array.isArray(obj)) {
    // Convert single object to array
    obj = [obj]
  }
  
  if (obj.length === 0) {
    return ''
  }
  
  // Get all unique keys from all objects
  const allKeys = new Set<string>()
  obj.forEach(item => {
    if (typeof item === 'object' && item !== null) {
      Object.keys(item).forEach(key => allKeys.add(key))
    }
  })
  
  const keys = Array.from(allKeys)
  
  // Create header row
  const header = keys.join(',')
  
  // Create data rows
  const rows = obj.map(item => {
    return keys.map(key => {
      const value = item && typeof item === 'object' ? item[key] : ''
      // Escape commas and quotes in CSV
      const stringValue = String(value || '')
      if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`
      }
      return stringValue
    }).join(',')
  })
  
  return [header, ...rows].join('\n')
}

// Get MIME type for different formats
export function getMimeType(format: string): string {
  switch (format.toLowerCase()) {
    case 'json':
      return 'application/json'
    case 'xml':
      return 'application/xml'
    case 'yaml':
    case 'yml':
      return 'text/yaml'
    case 'csv':
      return 'text/csv'
    default:
      return 'text/plain'
  }
}
