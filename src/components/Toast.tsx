'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'

export interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

export function Toast({ message, type, duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-400" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-900 border-green-700'
      case 'error':
        return 'bg-red-900 border-red-700'
      case 'info':
        return 'bg-blue-900 border-blue-700'
    }
  }

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-sm w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg ${getBgColor()}`}>
      <div className="p-4 flex items-start space-x-3">
        {getIcon()}
        <div className="flex-1">
          <p className="text-sm font-medium text-white">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-gray-700 rounded"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  )
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info', duration?: number) => {
    const id = Date.now().toString()
    const newToast = {
      message,
      type,
      duration,
      onClose: () => {
        setToasts(prev => prev.filter(toast => toast !== newToast))
      }
    }
    setToasts(prev => [...prev, newToast])
  }

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </div>
  )

  return { addToast, ToastContainer }
}
