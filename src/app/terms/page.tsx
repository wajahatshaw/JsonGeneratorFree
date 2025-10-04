'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FileText, Scale, AlertTriangle, Shield, Users, Code, Mail } from 'lucide-react'

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header 
        onMenuClick={() => {}}
        onExport={() => {}}
        onCopy={() => {}}
        onSignIn={() => {}}
        hasData={false}
      />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-12 h-12 text-blue-600 dark:text-blue-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using JsonGeneratorFree. By using our service, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: December 19, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              1. Agreement to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing and using JsonGeneratorFree ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Code className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
              2. Service Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              JsonGeneratorFree is a free, AI-powered tool that generates realistic mock data from your source code. Our service includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>AI-powered mock data generation from source code</li>
              <li>Support for multiple programming languages</li>
              <li>Export functionality in various formats (JSON, XML, YAML, CSV)</li>
              <li>Template library for common use cases</li>
              <li>Educational content and documentation</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
              3. User Responsibilities
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Acceptable Use</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Upload malicious code or attempt to harm our systems</li>
              <li>Use the Service to generate data for illegal activities</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Content Responsibility</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You are solely responsible for the source code you input into our Service. You represent and warrant that you have the right to use such code and that it does not infringe on any third-party rights.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Our Rights</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of JsonGeneratorFree and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Your Rights</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You retain all rights to your source code. The mock data generated by our Service is provided to you for your use, and you may use it in your projects without restriction.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-800 dark:text-green-200 text-sm">
                <strong>Open Source:</strong> JsonGeneratorFree is committed to open source principles. Our core technology may be made available under open source licenses.
              </p>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 text-red-600 dark:text-red-400 mr-2" />
              5. Privacy and Data Protection
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>We do not store your source code permanently</li>
              <li>Generated mock data is processed in real-time</li>
              <li>We may collect usage analytics to improve our service</li>
              <li>We implement appropriate security measures to protect your data</li>
            </ul>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Service Availability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We strive to provide a reliable service, but we cannot guarantee that the Service will be available at all times. The Service may be temporarily unavailable due to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Scheduled maintenance and updates</li>
              <li>Technical difficulties or system failures</li>
              <li>Force majeure events beyond our control</li>
              <li>High traffic or server overload</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2" />
              7. Disclaimers
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 Service Disclaimer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Generated Data Disclaimer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              While we strive to generate realistic and accurate mock data, we make no guarantees about the quality, accuracy, or suitability of the generated data for your specific use case. You are responsible for reviewing and validating any generated data before use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.3 Third-Party Content</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL JSONGENERATORFREE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our total liability to you for any damages arising from or related to these Terms or the Service shall not exceed the amount you have paid us for the Service in the 12 months preceding the claim, or $100, whichever is greater.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to defend, indemnify, and hold harmless JsonGeneratorFree and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Termination</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which JsonGeneratorFree operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Severability</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-2" />
              14. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Email:</strong> <a href="mailto:contact@jsongeneratorfree.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@jsongeneratorfree.com</a>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>GitHub:</strong> <a href="https://github.com/wajahatshaw" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/wajahatshaw</a>
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Acknowledgment</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                By using JsonGeneratorFree, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them. If you do not agree to these terms, please do not use our Service.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
