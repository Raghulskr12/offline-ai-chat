import React from 'react'
import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <BubbleBackground 
        interactive={true}
        colors={{
          first: '71,85,105',     // slate-600
          second: '100,116,139',  // slate-500
          third: '148,163,184',   // slate-400
          fourth: '203,213,225',  // slate-300
          fifth: '226,232,240',   // slate-200
          sixth: '241,245,249',   // slate-100
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6">
          <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">
            Ollama Law Chat
          </h1>
          <p className="text-center text-gray-200 mt-2 drop-shadow">
            Local Custom Trained Chatbot
          </p>
        </header>
        
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-xl shadow-2xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Welcome to your AI-powered Legal Assistant
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Get instant legal guidance powered by your custom-trained local model
              </p>
              
              {/* Chat Interface Placeholder */}
              <div className="bg-black/10 backdrop-blur-sm rounded-lg p-6 border border-white/5">
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-300">
                    Chat interface coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="p-4 text-center text-sm text-gray-300">
          Powered by Ollama • Local AI Model
        </footer>
      </div>
    </div>
  )
}

export default App