"use client"
import { ArrowRight, ChevronDown, Mic } from "lucide-react"
import { statusPanelData } from "@/lib/data"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function AgentStatusPanel() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  
  // Animation for sequential appearance of status items
  useEffect(() => {
    statusPanelData.statusUpdates.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, index])
      }, 700 * (index + 1)) // Show each status with 700ms delay
      
      return () => clearTimeout(timer)
    })
  }, [])
  
  // Render a status item with animation
  const renderStatusItem = (item: typeof statusPanelData.statusUpdates[0], index: number) => {
    const isVisible = visibleItems.includes(index)
    const baseClasses = "transition-all duration-500"
    const visibilityClasses = isVisible 
      ? "opacity-100 transform translate-y-0" 
      : "opacity-0 transform translate-y-4"
    
    switch (item.type) {
      case "status":
        return (
          <div key={index} className={cn("text-gray-300 text-sm", baseClasses, visibilityClasses)}>
            {item.text}
          </div>
        )
      case "dropdown":
        return (
          <div key={index} className={cn("flex items-center gap-2 text-gray-300", baseClasses, visibilityClasses)}>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <p>{item.text}</p>
          </div>
        )
      case "status-right":
        return (
          <div key={index} className={cn("text-right text-gray-400 text-sm", baseClasses, visibilityClasses)}>
            {item.text}
          </div>
        )
      case "terminal":
        return (
          <div key={index} className={cn("flex justify-end", baseClasses, visibilityClasses)}>
            <div className="bg-gray-800 rounded-md overflow-hidden w-[150px] h-[60px] animate-glow">
              <div className="w-full h-full bg-black/50 flex items-center justify-center text-xs text-gray-400">
                {item.component}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  
  return (
    <div className="flex flex-col h-full min-h-[600px] border border-[#2a2a40] rounded-xl overflow-hidden">
      {/* Header with arrow button */}
      <div className="bg-[#1a1a2e] p-3 flex justify-end">
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#2a2a40] hover:bg-[#2a2a40] transition-colors">
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Chat content */}
      <div className="flex-grow bg-[#0f0f1e] p-4 overflow-y-auto space-y-4">
        {/* User message with typing animation */}
        <div className="bg-[#2563eb] rounded-lg p-4 ml-auto max-w-[90%] animate-slideIn">
          <p className="text-white text-right">
            {statusPanelData.userMessage}
          </p>
        </div>

        {/* Render status updates with animations */}
        {statusPanelData.statusUpdates.map((item, index) => renderStatusItem(item, index))}
      </div>

      {/* Input area */}
      <div className="bg-[#1a1a2e] p-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-grow">
            <div className="w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center animate-pulse">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white text-sm">Connect</div>
          </div>

          <div className="flex-grow bg-[#0f0f1e] rounded-lg px-4 py-2 text-gray-400">Send a message...</div>

          <button className="w-10 h-10 rounded-lg bg-[#0f0f1e] flex items-center justify-center ml-2 hover:bg-[#191932] transition-colors">
            <Mic className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
