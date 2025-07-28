"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, FileText } from "lucide-react"

export default function DanielLarsonWebsite() {
  const [showContent, setShowContent] = useState(false)
  const [textContent, setTextContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const loadContent = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/content.txt")
      const content = await response.text()
      setTextContent(content)
      setShowContent(true)
    } catch (error) {
      console.error("Error loading content:", error)
      setTextContent("Error loading content. Please try again.")
      setShowContent(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {!showContent ? (
          <div className="text-center space-y-8">
            {/* Main title with rainbow effect */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold rainbow-text animate-pulse">Daniel Larson</h1>
              <p className="text-2xl md:text-4xl text-white font-light tracking-wider glow-text">hei 2025</p>
            </div>

            {/* View content section - no upload needed */}
            <Card className="bg-black/20 backdrop-blur-lg border-white/20 max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-white mx-auto mb-4" />
                  <p className="text-white/80 mb-6">Content ready to view</p>

                  <Button
                    onClick={loadContent}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    {isLoading ? "Loading..." : "Click to view D0X"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto w-full px-4">
            <Card className="bg-black/90 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardContent className="p-0">
                {/* Header */}
                <div className="text-center p-6 border-b border-white/10">
                  <h2 className="text-3xl font-bold rainbow-text mb-2">Daniel Larson D0X 2025</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Content Display Area */}
                <div className="relative">
                  <div className="bg-black text-green-400 font-mono text-sm leading-relaxed p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
                    <div className="whitespace-pre-wrap break-words terminal-text">{textContent}</div>
                  </div>

                  {/* Gradient overlay for better readability */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                </div>

                {/* Footer with controls */}
                <div className="text-center p-6 border-t border-white/10 bg-black/50">
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={() => setShowContent(false)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      Back to Home
                    </Button>
                  </div>
                  <p className="text-white/60 text-sm mt-3">Scroll to read the full content</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style jsx>{`
        .rainbow-text {
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #9400d3
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow 3s ease-in-out infinite;
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        @keyframes rainbow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thumb-purple-500::-webkit-scrollbar-thumb {
          background-color: #8b5cf6;
          border-radius: 4px;
        }

        .scrollbar-thumb-purple-500::-webkit-scrollbar-thumb:hover {
          background-color: #7c3aed;
        }

        .scrollbar-track-gray-800::-webkit-scrollbar-track {
          background-color: #1f2937;
          border-radius: 4px;
        }

        /* Terminal-like text styling */
        .terminal-text {
          text-shadow: 0 0 5px currentColor;
        }
      `}</style>
    </div>
  )
}
