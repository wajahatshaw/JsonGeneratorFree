'use client'

import { Header } from '@/components/Header'
import { AdSense } from '@/components/AdSense'
import { Code, Zap, Shield, Users, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
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

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">JsonGeneratorFree</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The free, AI-powered tool that transforms your source code into realistic mock data. 
            Built for developers who need quality test data without the hassle.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              We believe that generating mock data shouldn't be a time-consuming task that slows down development. 
              JsonGeneratorFree was created to provide developers with an intelligent, free tool that understands 
              your code structure and generates realistic, contextual mock data in seconds.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Choose JsonGeneratorFree?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced AI analyzes your code structure to generate contextually appropriate mock data.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">100% Free</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No hidden costs, no subscriptions, no limits. Use it as much as you need, completely free.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multi-Language</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Supports TypeScript, JavaScript, Python, Java, C#, and many other programming languages.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multiple Formats</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Export your data as JSON, XML, YAML, or CSV - whatever format your project needs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Developer-Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built by developers, for developers. We understand your workflow and pain points.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparent, community-driven development. Contribute and help improve the tool.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Paste Your Code</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simply paste your TypeScript, JavaScript, or other source code into our editor.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI analyzes your code structure, types, and patterns to understand your data model.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Generate & Export</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get realistic mock data instantly. Export in JSON, XML, YAML, or CSV format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Built with ❤️ by Developers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
              JsonGeneratorFree is developed by a team of passionate developers who understand the challenges 
              of creating quality mock data. We've been there - spending hours crafting test data, dealing with 
              unrealistic sample data, and struggling with complex data generation tools.
            </p>
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Our goal is simple: make mock data generation as easy as copying and pasting your code.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl mb-6 opacity-90">
              Have questions, suggestions, or want to contribute? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@jsongeneratorfree.com" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="https://github.com/wajahatshaw" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View on GitHub
              </a>
            </div>
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
