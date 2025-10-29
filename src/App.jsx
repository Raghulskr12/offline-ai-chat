import React from 'react'
import { BubbleBackground } from '@/components/ui/bubble'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <BubbleBackground />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Ollama Law Chat
          </h1>
        </header>
        
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Welcome to your AI-powered legal assistant
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App