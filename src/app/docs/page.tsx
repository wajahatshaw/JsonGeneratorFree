'use client'

import { Header } from '@/components/Header'
import { AdSense } from '@/components/AdSense'
import { BookOpen, Code, Zap, Download, FileText, Lightbulb, ArrowRight } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header 
        onMenuClick={() => {}}
        onExport={() => {}}
        onCopy={() => {}}
        onSignIn={() => {}}
        hasData={false}
      />

      {/* Top Ad Space */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
        <div className="min-h-[90px] flex items-center justify-center px-2 py-2">
          <AdSense 
            adSlot="1234567890"
            adFormat="horizontal"
            className="w-full max-w-7xl"
          />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <BookOpen className="inline-block w-12 h-12 text-blue-600 dark:text-blue-400 mr-4" />
            Documentation & Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about using JsonGeneratorFree to create realistic mock data from your source code.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Zap className="w-8 h-8 text-yellow-500 mr-3" />
              Quick Start Guide
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Paste Your Code</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Copy and paste your TypeScript, JavaScript, Python, or other source code into the left editor panel.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Click Generate</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click the "Generate Mock Data" button. Our AI will analyze your code and create realistic test data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Export & Use</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Copy the generated data or export it as JSON, XML, YAML, or CSV for use in your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Supported Programming Languages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'TypeScript', icon: 'TS', color: 'blue' },
              { name: 'JavaScript', icon: 'JS', color: 'yellow' },
              { name: 'Python', icon: 'PY', color: 'green' },
              { name: 'Java', icon: 'J', color: 'red' },
              { name: 'C#', icon: 'C#', color: 'purple' },
              { name: 'PHP', icon: 'PHP', color: 'indigo' },
              { name: 'Go', icon: 'GO', color: 'cyan' },
              { name: 'Rust', icon: 'RS', color: 'orange' },
              { name: 'C++', icon: 'C++', color: 'pink' }
            ].map((lang) => (
              <div key={lang.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className={`w-12 h-12 bg-${lang.color}-100 dark:bg-${lang.color}-900 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-${lang.color}-600 dark:text-${lang.color}-400 font-bold`}>{lang.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{lang.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Features Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Features & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                Code Analysis
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Automatic detection of classes and interfaces</li>
                <li>• Type inference from TypeScript definitions</li>
                <li>• Property type analysis and validation</li>
                <li>• Nested object structure recognition</li>
                <li>• Array and collection handling</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Download className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                Export Options
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• JSON format with proper formatting</li>
                <li>• XML with nested structure</li>
                <li>• YAML for configuration files</li>
                <li>• CSV for spreadsheet import</li>
                <li>• Copy to clipboard functionality</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2" />
                Smart Generation
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Realistic data based on field names</li>
                <li>• Proper data types and formats</li>
                <li>• Email, phone, and address generation</li>
                <li>• Date and timestamp handling</li>
                <li>• Boolean and enum value support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
                Templates
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Pre-built templates for common use cases</li>
                <li>• User management systems</li>
                <li>• E-commerce product catalogs</li>
                <li>• Blog and content management</li>
                <li>• API response structures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Step-by-Step Tutorials
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tutorial 1: Generating User Data from TypeScript Interface
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
}`}
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Paste this TypeScript interface into the code editor and click generate. The AI will create realistic user data with proper types.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Try this example in the generator</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tutorial 2: Creating Product Catalog Data
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`class Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[];
  description: string;
}`}
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Use this class definition to generate a complete product catalog with realistic pricing and categories.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Try this example in the generator</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tutorial 3: Complex Nested Object Generation
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`interface Company {
  id: number;
  name: string;
  employees: Employee[];
  address: Address;
  founded: Date;
}

interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}`}
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate complex nested objects with relationships between different data structures.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Try this example in the generator</span>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Best Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">✅ Do's</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Use descriptive property names</li>
                  <li>• Include type annotations in TypeScript</li>
                  <li>• Define clear interfaces and classes</li>
                  <li>• Use meaningful enum values</li>
                  <li>• Test with different data sizes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">❌ Don'ts</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Don't use overly generic names like "data"</li>
                  <li>• Avoid complex nested generics</li>
                  <li>• Don't rely on implicit any types</li>
                  <li>• Avoid circular references</li>
                  <li>• Don't generate sensitive real data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How accurate is the generated mock data?",
                a: "Our AI analyzes your code structure and generates contextually appropriate data. For example, fields named 'email' will generate valid email addresses, 'phone' will create phone numbers, etc."
              },
              {
                q: "Can I customize the generated data?",
                a: "Currently, the tool generates data based on your code structure. We're working on customization options for future releases."
              },
              {
                q: "Is there a limit on code size?",
                a: "There's no strict limit, but very large code files may take longer to process. We recommend keeping it under 10,000 lines for optimal performance."
              },
              {
                q: "Can I use the generated data commercially?",
                a: "Yes! All generated data is free to use for any purpose, including commercial projects."
              },
              {
                q: "What if my code has errors?",
                a: "The tool will still attempt to generate data based on the structure it can understand. However, valid, well-formed code produces the best results."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Ad Space */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
        <div className="min-h-[90px] flex items-center justify-center px-2 py-2">
          <AdSense 
            adSlot="9876543210"
            adFormat="horizontal"
            className="w-full max-w-7xl"
          />
        </div>
      </div>
    </div>
  )
}
