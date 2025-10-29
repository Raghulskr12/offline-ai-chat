import React from 'react'
import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background/index.jsx'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <BubbleBackground 
        interactive={true}
        colors={{
          first: '59,130,246',    // Blue
          second: '147,51,234',   // Purple
          third: '236,72,153',    // Pink
          fourth: '34,197,94',    // Green
          fifth: '251,191,36',    // Yellow
          sixth: '239,68,68',     // Red
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Ollama Law Chat
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
            Local Custom Trained Chatbot
          </p>
        </header>
        
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Welcome to your AI-powered Legal Assistant
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                Get instant legal guidance powered by your custom-trained local model
              </p>
              
              {/* Chat Interface Placeholder */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500 dark:text-gray-400">
                    Chat interface coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Powered by Ollama • Local AI Model
        </footer>
      </div>
    </div>
  )
}

export default App