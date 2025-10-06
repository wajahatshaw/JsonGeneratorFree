'use client'

import { useUser, useAuth } from '@clerk/nextjs'

export default function TestClerkPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useAuth()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading Clerk...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Clerk Authentication Test
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Authentication Status
          </h2>
          
          <div className="space-y-4">
            <div>
              <span className="font-medium text-gray-700 dark:text-gray-300">Clerk Loaded:</span>
              <span className={`ml-2 px-2 py-1 rounded text-sm ${isLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {isLoaded ? 'Yes' : 'No'}
              </span>
            </div>
            
            <div>
              <span className="font-medium text-gray-700 dark:text-gray-300">User Signed In:</span>
              <span className={`ml-2 px-2 py-1 rounded text-sm ${isSignedIn ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {isSignedIn ? 'Yes' : 'No'}
              </span>
            </div>
            
            {isSignedIn && user && (
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">User Info:</span>
                <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                  <p><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
                  <p><strong>ID:</strong> {user.id}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 space-x-4">
            {!isSignedIn ? (
              <>
                <a 
                  href="/sign-in"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Sign In
                </a>
                <a 
                  href="/sign-up"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </a>
              </>
            ) : (
              <button
                onClick={() => signOut()}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
        
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Environment Variables
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium text-gray-700 dark:text-gray-300">Publishable Key:</span>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? 
                  `${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.substring(0, 20)}...` : 
                  'Not set'
                }
              </span>
            </p>
            <p>
              <span className="font-medium text-gray-700 dark:text-gray-300">Secret Key:</span>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {process.env.CLERK_SECRET_KEY ? 'Set (hidden)' : 'Not set'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
