// Code analysis utilities for generating mock data from source code

export interface CodeStructure {
  classes: ClassInfo[]
  interfaces: InterfaceInfo[]
  types: TypeInfo[]
  functions: FunctionInfo[]
  imports: ImportInfo[]
}

export interface ClassInfo {
  name: string
  properties: PropertyInfo[]
  methods: MethodInfo[]
  extends?: string
  implements?: string[]
}

export interface InterfaceInfo {
  name: string
  properties: PropertyInfo[]
  extends?: string[]
}

export interface TypeInfo {
  name: string
  definition: string
}

export interface FunctionInfo {
  name: string
  parameters: ParameterInfo[]
  returnType?: string
}

export interface PropertyInfo {
  name: string
  type: string
  optional?: boolean
  defaultValue?: any
}

export interface MethodInfo {
  name: string
  parameters: ParameterInfo[]
  returnType?: string
}

export interface ParameterInfo {
  name: string
  type: string
  optional?: boolean
}

export interface ImportInfo {
  source: string
  imports: string[]
}

// Enhanced mock data generators for different data types
export const mockDataGenerators = {
  string: () => {
    const strings = [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Sample text for testing purposes',
      'Mock data string with random content',
      'Generated content for API testing',
      'Test value with dynamic data',
      'Random string generated at runtime',
      'Dynamic content for mock responses',
      'Sample data for development testing',
      'Generated text with random characters',
      'Mock string for API simulation'
    ]
    return strings[Math.floor(Math.random() * strings.length)]
  },
  
  number: () => Math.floor(Math.random() * 10000) + 1,
  
  boolean: () => Math.random() > 0.5,
  
  email: () => {
    const domains = ['example.com', 'test.com', 'mock.com', 'sample.org', 'demo.net', 'fake.io']
    const names = ['john', 'jane', 'bob', 'alice', 'charlie', 'diana', 'eve', 'frank', 'grace', 'henry']
    const name = names[Math.floor(Math.random() * names.length)]
    const domain = domains[Math.floor(Math.random() * domains.length)]
    const randomNum = Math.floor(Math.random() * 999) + 1
    return `${name}${randomNum}@${domain}`
  },
  
  date: () => {
    const now = new Date()
    const randomDays = Math.floor(Math.random() * 365)
    const randomDate = new Date(now.getTime() - (randomDays * 24 * 60 * 60 * 1000))
    return randomDate.toISOString()
  },
  
  id: () => Math.random().toString(36).substr(2, 12),
  
  name: () => {
    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Kate', 'Leo', 'Mia']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson']
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    return `${firstName} ${lastName}`
  },
  
  url: () => {
    const domains = ['example.com', 'test.com', 'mock.com', 'demo.org', 'sample.net']
    const paths = ['/api', '/users', '/products', '/data', '/content', '/items', '/posts', '/comments']
    const domain = domains[Math.floor(Math.random() * domains.length)]
    const path = paths[Math.floor(Math.random() * paths.length)]
    const id = Math.floor(Math.random() * 1000) + 1
    return `https://${domain}${path}/${id}`
  },

  phone: () => {
    const areaCode = Math.floor(Math.random() * 900) + 100
    const exchange = Math.floor(Math.random() * 900) + 100
    const number = Math.floor(Math.random() * 9000) + 1000
    return `+1-${areaCode}-${exchange}-${number}`
  },

  address: () => {
    const streets = ['Main St', 'Oak Ave', 'Pine Rd', 'Elm St', 'Maple Dr', 'Cedar Ln', 'Birch Way', 'Spruce St', 'Willow Ave', 'Ash Rd']
    const street = streets[Math.floor(Math.random() * streets.length)]
    const number = Math.floor(Math.random() * 9999) + 1
    return `${number} ${street}`
  },

  city: () => {
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte']
    return cities[Math.floor(Math.random() * cities.length)]
  },

  country: () => {
    const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Japan', 'Australia', 'Brazil', 'India', 'China', 'Mexico', 'Netherlands', 'Sweden']
    return countries[Math.floor(Math.random() * countries.length)]
  },

  company: () => {
    const companies = ['Acme Corp', 'Tech Solutions', 'Global Industries', 'Digital Systems', 'Innovation Labs', 'Future Tech', 'Smart Solutions', 'NextGen Corp', 'Alpha Systems', 'Beta Technologies']
    return companies[Math.floor(Math.random() * companies.length)]
  },

  price: () => {
    return (Math.random() * 1000 + 1).toFixed(2)
  },

  age: () => Math.floor(Math.random() * 80) + 18,

  color: () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'navy']
    return colors[Math.floor(Math.random() * colors.length)]
  },

  guid: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  },

  lorem: (words: number = 5) => {
    const loremWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua']
    const result = []
    for (let i = 0; i < words; i++) {
      result.push(loremWords[Math.floor(Math.random() * loremWords.length)])
    }
    return result.join(' ')
  }
}

// Enhanced code analysis that handles multiple formats
export function analyzeCode(code: string): CodeStructure {
  const classes: ClassInfo[] = []
  const interfaces: InterfaceInfo[] = []
  const types: TypeInfo[] = []
  const functions: FunctionInfo[] = []
  const imports: ImportInfo[] = []

  // Check for empty or invalid input
  const trimmedCode = code.trim()
  if (!trimmedCode) {
    throw new Error('No code provided')
  }

  // Check if it's just plain text without any programming constructs
  const hasProgrammingConstructs = 
    trimmedCode.includes('interface') ||
    trimmedCode.includes('class') ||
    trimmedCode.includes('type ') ||
    trimmedCode.includes('function') ||
    trimmedCode.includes('const ') ||
    trimmedCode.includes('let ') ||
    trimmedCode.includes('var ') ||
    trimmedCode.startsWith('{') ||
    trimmedCode.includes('JG.') ||
    trimmedCode.includes('moment(') ||
    trimmedCode.includes('_.')

  if (!hasProgrammingConstructs) {
    throw new Error('No valid programming language constructs detected')
  }

  try {
    // Check if it's JSON format
    if (trimmedCode.startsWith('{') && !trimmedCode.includes('interface') && !trimmedCode.includes('class')) {
      return analyzeJsonObject(code)
    }

    // Check if it's JSON Generator format (like the original tool)
    if (code.includes('JG.') || code.includes('moment(') || code.includes('_.')) {
      return analyzeJsonGeneratorFormat(code)
    }

    // Extract interfaces
    const interfaceRegex = /interface\s+(\w+)\s*{([^}]+)}/g
    let match
    while ((match = interfaceRegex.exec(code)) !== null) {
      const [, name, body] = match
      const properties = extractProperties(body)
      interfaces.push({ name, properties })
    }

    // Extract classes
    const classRegex = /class\s+(\w+)(?:\s+extends\s+(\w+))?(?:\s+implements\s+([^{]+))?\s*{([^}]+)}/g
    while ((match = classRegex.exec(code)) !== null) {
      const [, name, extendsClass, implementsList, body] = match
      const properties = extractProperties(body)
      const methods = extractMethods(body)
      classes.push({
        name,
        properties,
        methods,
        extends: extendsClass,
        implements: implementsList ? implementsList.split(',').map(s => s.trim()) : undefined
      })
    }

    // Extract types
    const typeRegex = /type\s+(\w+)\s*=\s*([^;]+);/g
    while ((match = typeRegex.exec(code)) !== null) {
      const [, name, definition] = match
      types.push({ name, definition: definition.trim() })
    }

    // Extract object literals and variable assignments
    const objectLiteralRegex = /(?:const|let|var)\s+(\w+)\s*[:=]\s*{([^}]+)}/g
    while ((match = objectLiteralRegex.exec(code)) !== null) {
      const [, name, body] = match
      const properties = extractProperties(body)
      interfaces.push({ name: `${name}Type`, properties })
    }

    // Extract function parameters that look like objects
    const functionRegex = /function\s+(\w+)\s*\([^)]*\)\s*{/g
    while ((match = functionRegex.exec(code)) !== null) {
      const [, name] = match
      functions.push({ name, parameters: [], returnType: undefined })
    }

    // Extract imports
    const importRegex = /import\s+(?:{[^}]+}|\w+)\s+from\s+['"]([^'"]+)['"]/g
    while ((match = importRegex.exec(code)) !== null) {
      const [, source] = match
      imports.push({ source, imports: [] })
    }

  } catch (error) {
    console.error('Error analyzing code:', error)
  }

  return { classes, interfaces, types, functions, imports }
}

// Analyze JSON object structure
function analyzeJsonObject(code: string): CodeStructure {
  try {
    const obj = JSON.parse(code)
    const properties: PropertyInfo[] = []
    
    for (const [key, value] of Object.entries(obj)) {
      let type: string = typeof value
      if (Array.isArray(value)) {
        type = 'array'
      } else if (value === null) {
        type = 'null'
      }
      
      properties.push({
        name: key,
        type: type
      })
    }
    
    return {
      classes: [],
      interfaces: [{ name: 'GeneratedObject', properties }],
      types: [],
      functions: [],
      imports: []
    }
  } catch {
    return { classes: [], interfaces: [], types: [], functions: [], imports: [] }
  }
}

// Analyze JSON Generator format (like the original tool)
function analyzeJsonGeneratorFormat(code: string): CodeStructure {
  const properties: PropertyInfo[] = []
  
  // Extract properties from JSON Generator format
  const lines = code.split('\n').filter(line => line.trim())
  
  for (const line of lines) {
    const match = line.match(/(\w+)\s*:\s*(.+)/)
    if (match) {
      const [, name, value] = match
      let type = 'string'
      
      if (value.includes('JG.')) {
        if (value.includes('JG.firstName') || value.includes('JG.lastName') || value.includes('JG.name')) {
          type = 'name'
        } else if (value.includes('JG.email')) {
          type = 'email'
        } else if (value.includes('JG.integer') || value.includes('JG.floating')) {
          type = 'number'
        } else if (value.includes('JG.date')) {
          type = 'date'
        } else if (value.includes('JG.guid')) {
          type = 'guid'
        } else if (value.includes('JG.company')) {
          type = 'company'
        } else if (value.includes('JG.city') || value.includes('JG.state')) {
          type = 'location'
        } else if (value.includes('JG.loremIpsum')) {
          type = 'lorem'
        } else if (value.includes('JG.random')) {
          type = 'random'
        }
      }
      
      properties.push({
        name: name.trim(),
        type: type
      })
    }
  }
  
  return {
    classes: [],
    interfaces: [{ name: 'GeneratedObject', properties }],
    types: [],
    functions: [],
    imports: []
  }
}

function extractProperties(body: string): PropertyInfo[] {
  const properties: PropertyInfo[] = []
  const propRegex = /(\w+)(\?)?\s*:\s*([^;,\n]+)/g
  let match
  while ((match = propRegex.exec(body)) !== null) {
    const [, name, optional, type] = match
    properties.push({
      name: name.trim(),
      type: type.trim(),
      optional: !!optional
    })
  }
  return properties
}

function extractMethods(body: string): MethodInfo[] {
  const methods: MethodInfo[] = []
  const methodRegex = /(\w+)\s*\([^)]*\)\s*(?::\s*([^{]+))?\s*{/g
  let match
  while ((match = methodRegex.exec(body)) !== null) {
    const [, name, returnType] = match
    methods.push({
      name: name.trim(),
      parameters: [], // Simplified
      returnType: returnType?.trim()
    })
  }
  return methods
}

// Generate mock data based on code structure - creates longer, more comprehensive data
export function generateMockData(structure: CodeStructure): any {
  const mockData: any = {}

  // Generate data for interfaces and classes
  structure.interfaces.forEach(interfaceInfo => {
    const key = interfaceInfo.name.toLowerCase()
    // Generate array of 5-10 objects for each interface
    const arrayLength = Math.floor(Math.random() * 6) + 5 // 5-10 items
    const array = []
    for (let i = 0; i < arrayLength; i++) {
      array.push(generateObjectFromProperties(interfaceInfo.properties))
    }
    mockData[key] = array
  })

  structure.classes.forEach(classInfo => {
    const key = classInfo.name.toLowerCase()
    // Generate array of 5-10 objects for each class
    const arrayLength = Math.floor(Math.random() * 6) + 5 // 5-10 items
    const array = []
    for (let i = 0; i < arrayLength; i++) {
      array.push(generateObjectFromProperties(classInfo.properties))
    }
    mockData[key] = array
  })

  // If no interfaces or classes found, create a generic object based on what we found
  if (structure.interfaces.length === 0 && structure.classes.length === 0) {
    // Try to create data from types or create a sample based on common patterns
    if (structure.types.length > 0) {
      structure.types.forEach(typeInfo => {
        mockData[typeInfo.name.toLowerCase()] = generateFromTypeDefinition(typeInfo.definition)
      })
    } else {
      // Create a comprehensive sample object with nested structures
      const sampleProperties: PropertyInfo[] = [
        { name: 'id', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'roles', type: 'array' },
        { name: 'apiKey', type: 'string' },
        { name: 'profile', type: 'object' },
        { name: 'username', type: 'string' },
        { name: 'createdAt', type: 'string' },
        { name: 'updatedAt', type: 'string' }
      ]
      
      // Generate array of 5-10 sample objects
      const arrayLength = Math.floor(Math.random() * 6) + 5 // 5-10 items
      const array = []
      for (let i = 0; i < arrayLength; i++) {
        array.push(generateObjectFromProperties(sampleProperties))
      }
      mockData['data'] = array
    }
  }

  return mockData
}

function generateObjectFromProperties(properties: PropertyInfo[]): any {
  const obj: any = {}
  
  properties.forEach(prop => {
    obj[prop.name] = generateValueFromType(prop.type, prop.name)
  })
  
  return obj
}

function generateValueFromType(type: string, fieldName?: string): any {
  const typeLower = type.toLowerCase()
  const fieldNameLower = fieldName?.toLowerCase() || ''
  
  // Smart field name detection - this is key for generating appropriate data
  if (fieldNameLower.includes('email')) return mockDataGenerators.email()
  if (fieldNameLower.includes('name')) {
    if (fieldNameLower.includes('first')) return mockDataGenerators.name().split(' ')[0]
    if (fieldNameLower.includes('last')) return mockDataGenerators.name().split(' ')[1]
    return mockDataGenerators.name()
  }
  if (fieldNameLower.includes('phone')) return mockDataGenerators.phone()
  if (fieldNameLower.includes('address')) return mockDataGenerators.address()
  if (fieldNameLower.includes('city')) return mockDataGenerators.city()
  if (fieldNameLower.includes('country')) return mockDataGenerators.country()
  if (fieldNameLower.includes('company')) return mockDataGenerators.company()
  if (fieldNameLower.includes('price') || fieldNameLower.includes('cost')) return mockDataGenerators.price()
  if (fieldNameLower.includes('age')) return mockDataGenerators.age()
  if (fieldNameLower.includes('color')) return mockDataGenerators.color()
  if (fieldNameLower.includes('guid') || fieldNameLower.includes('uuid')) return mockDataGenerators.guid()
  if (fieldNameLower.includes('url') || fieldNameLower.includes('link')) return mockDataGenerators.url()
  if (fieldNameLower.includes('description') || fieldNameLower.includes('about')) return mockDataGenerators.lorem(8)
  if (fieldNameLower.includes('title')) return mockDataGenerators.lorem(3)
  if (fieldNameLower.includes('content') || fieldNameLower.includes('text')) return mockDataGenerators.lorem(12)
  
  // Special handling for complex field names
  if (fieldNameLower.includes('apikey') || fieldNameLower.includes('api_key')) return mockDataGenerators.guid()
  if (fieldNameLower.includes('username')) return generateUsername()
  if (fieldNameLower.includes('dob') || fieldNameLower.includes('birth')) return generateDateOfBirth()
  if (fieldNameLower.includes('createdat') || fieldNameLower.includes('created_at')) return generateCreatedAt()
  if (fieldNameLower.includes('updatedat') || fieldNameLower.includes('updated_at')) return generateUpdatedAt()
  if (fieldNameLower.includes('roles')) return generateRoles()
  if (fieldNameLower.includes('profile')) return generateProfile()
  if (fieldNameLower.includes('location')) return generateLocation()
  
  // Type-based generation
  if (typeLower.includes('string')) {
    if (typeLower.includes('email')) return mockDataGenerators.email()
    if (typeLower.includes('url')) return mockDataGenerators.url()
    if (typeLower.includes('name')) return mockDataGenerators.name()
    if (typeLower.includes('guid') || typeLower.includes('uuid')) return mockDataGenerators.guid()
    if (typeLower.includes('lorem')) return mockDataGenerators.lorem(6)
    return mockDataGenerators.string()
  }
  
  if (typeLower.includes('number') || typeLower.includes('int') || typeLower.includes('float')) {
    return mockDataGenerators.number()
  }
  
  if (typeLower.includes('boolean') || typeLower.includes('bool')) {
    return mockDataGenerators.boolean()
  }
  
  if (typeLower.includes('date') || typeLower.includes('time')) {
    return mockDataGenerators.date()
  }
  
  if (typeLower.includes('id')) {
    return mockDataGenerators.id()
  }
  
  if (typeLower.includes('email')) {
    return mockDataGenerators.email()
  }
  
  if (typeLower.includes('name')) {
    return mockDataGenerators.name()
  }
  
  if (typeLower.includes('company')) {
    return mockDataGenerators.company()
  }
  
  if (typeLower.includes('location') || typeLower.includes('city')) {
    return mockDataGenerators.city()
  }
  
  if (typeLower.includes('lorem')) {
    return mockDataGenerators.lorem(6)
  }
  
  if (typeLower.includes('guid') || typeLower.includes('uuid')) {
    return mockDataGenerators.guid()
  }
  
  if (typeLower.includes('random')) {
    const options = ['option1', 'option2', 'option3', 'value1', 'value2', 'value3']
    return options[Math.floor(Math.random() * options.length)]
  }
  
  // Object types - create nested objects
  if (typeLower.includes('object') || typeLower.includes('{}')) {
    return generateNestedObject(fieldNameLower)
  }
  
  // Array types
  if (typeLower.includes('[]') || typeLower.includes('array')) {
    const itemType = type.replace(/\[\]|array<|>/gi, '').trim()
    const arrayLength = Math.floor(Math.random() * 3) + 2 // 2-4 items for arrays
    const array = []
    for (let i = 0; i < arrayLength; i++) {
      array.push(generateValueFromType(itemType))
    }
    return array
  }
  
  // Default to string
  return mockDataGenerators.string()
}

// Helper functions for generating complex data structures
function generateUsername(): string {
  const names = ['john', 'jane', 'bob', 'alice', 'charlie', 'diana', 'eve', 'frank', 'grace', 'henry']
  const name = names[Math.floor(Math.random() * names.length)]
  const year = Math.floor(Math.random() * 30) + 1985
  return `${name}${year.toString().slice(-2)}`
}

function generateDateOfBirth(): string {
  const year = Math.floor(Math.random() * 30) + 1985
  const month = Math.floor(Math.random() * 12) + 1
  const day = Math.floor(Math.random() * 28) + 1
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
}

function generateCreatedAt(): string {
  const year = Math.floor(Math.random() * 10) + 2010
  const month = Math.floor(Math.random() * 12) + 1
  const day = Math.floor(Math.random() * 28) + 1
  const hour = Math.floor(Math.random() * 24)
  const minute = Math.floor(Math.random() * 60)
  const second = Math.floor(Math.random() * 60)
  const ms = Math.floor(Math.random() * 1000)
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}Z`
}

function generateUpdatedAt(): string {
  const createdAt = generateCreatedAt()
  const date = new Date(createdAt)
  date.setDate(date.getDate() + 1) // Add 1 day
  return date.toISOString()
}

function generateRoles(): string[] {
  const allRoles = ['admin', 'owner', 'member', 'guest']
  const numRoles = Math.floor(Math.random() * 3) + 1 // 1-3 roles
  const shuffled = allRoles.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, numRoles)
}

function generateProfile(): any {
  return {
    dob: generateDateOfBirth(),
    name: mockDataGenerators.name(),
    about: mockDataGenerators.lorem(15),
    address: mockDataGenerators.address(),
    company: mockDataGenerators.company(),
    location: generateLocation()
  }
}

function generateLocation(): any {
  return {
    lat: (Math.random() * 180 - 90).toFixed(6),
    long: (Math.random() * 360 - 180).toFixed(6)
  }
}

function generateNestedObject(fieldName: string): any {
  if (fieldName.includes('profile')) return generateProfile()
  if (fieldName.includes('location')) return generateLocation()
  if (fieldName.includes('address')) return {
    street: mockDataGenerators.address(),
    city: mockDataGenerators.city(),
    country: mockDataGenerators.country()
  }
  
  // Default nested object
  return {
    id: mockDataGenerators.id(),
    name: mockDataGenerators.name(),
    active: mockDataGenerators.boolean()
  }
}

function generateFromTypeDefinition(definition: string): any {
  // Try to generate data based on type definition
  if (definition.includes('|')) {
    // Union type - pick one of the options
    const options = definition.split('|').map(opt => opt.trim().replace(/['"]/g, ''))
    return options[Math.floor(Math.random() * options.length)]
  }
  
  if (definition.includes('string')) return mockDataGenerators.string()
  if (definition.includes('number')) return mockDataGenerators.number()
  if (definition.includes('boolean')) return mockDataGenerators.boolean()
  
  return mockDataGenerators.string()
}