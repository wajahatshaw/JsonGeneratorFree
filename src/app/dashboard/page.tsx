'use client'

import { useUser } from '@clerk/nextjs'
import { Header } from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, FileText, Settings, User } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header 
          onMenuClick={() => {}}
          onExport={() => {}}
          onCopy={() => {}}
          onSignIn={() => {}}
          hasData={false}
        />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header 
        onMenuClick={() => {}}
        onExport={() => {}}
        onCopy={() => {}}
        onSignIn={() => {}}
        hasData={false}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.firstName || 'User'}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your JSON generation projects and settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Generate JSON data quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link 
                  href="/"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition-colors"
                >
                  New JSON Generator
                </Link>
                <Link 
                  href="/docs"
                  className="block w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 px-4 rounded-md transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Clock className="w-5 h-5 mr-2 text-green-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your recent JSON generations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  No recent activity yet
                </div>
                <Link 
                  href="/"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Start generating JSON →
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <User className="w-5 h-5 mr-2 text-purple-600" />
                Account Info
              </CardTitle>
              <CardDescription>
                Your account details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Name:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Email:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">
                    {user?.emailAddresses[0]?.emailAddress}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Member since:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Your Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                    <p className="text-gray-600 dark:text-gray-400">JSON Files Generated</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                    <p className="text-gray-600 dark:text-gray-400">Days Active</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Settings className="w-8 h-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                    <p className="text-gray-600 dark:text-gray-400">Templates Saved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                    <p className="text-gray-600 dark:text-gray-400">Hours Saved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
