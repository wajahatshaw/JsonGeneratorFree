'use client'

import { Header } from '@/components/Header'
import { AdSense } from '@/components/AdSense'
import { Mail, MessageSquare, Github, Twitter, Send } from 'lucide-react'

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions, feedback, or need help with JsonGeneratorFree? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Question</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                    <a 
                      href="mailto:contact@jsongeneratorfree.com" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      contact@jsongeneratorfree.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Get instant help with our live chat support.
                    </p>
                    <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium">
                      Start Chat
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Report bugs, request features, or contribute to the project.
                    </p>
                    <a 
                      href="https://github.com/wajahatshaw" 
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/wajahatshaw
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Help</h2>
              <div className="space-y-4">
                <a 
                  href="/docs" 
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Documentation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Complete guide and tutorials for using JsonGeneratorFree
                  </p>
                </a>
                
                <a 
                  href="/blog" 
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Blog & Articles</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Latest tips, tutorials, and best practices
                  </p>
                </a>
                
                <a 
                  href="/about" 
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">About Us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Learn more about our mission and team
                  </p>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Response Times</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>General Questions</span>
                  <span className="font-semibold">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Bug Reports</span>
                  <span className="font-semibold">12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical Support</span>
                  <span className="font-semibold">6 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Live Chat</span>
                  <span className="font-semibold">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
