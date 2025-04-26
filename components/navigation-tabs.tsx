"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("workflow")

  return (
    <div className="inline-flex rounded-lg border border-[#2a2a40] overflow-hidden">
      <button
        className={cn(
          "px-6 py-2 text-sm font-medium transition-colors",
          activeTab === "workflow" ? "bg-[#1a1a2e] text-white" : "bg-transparent text-gray-300 hover:bg-[#1a1a2e]/50",
        )}
        onClick={() => setActiveTab("workflow")}
      >
        Agent Workflow
      </button>
      <button
        className={cn(
          "px-6 py-2 text-sm font-medium transition-colors",
          activeTab === "dashboard" ? "bg-[#1a1a2e] text-white" : "bg-transparent text-gray-300 hover:bg-[#1a1a2e]/50",
        )}
        onClick={() => setActiveTab("dashboard")}
      >
        Agent Dashboard
      </button>
    </div>
  )
}
