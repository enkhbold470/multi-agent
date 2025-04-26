"use client"
import { CheckCircle } from "lucide-react"
import { workflowSteps } from "@/lib/data"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function AgentWorkflowDiagram() {
  const [visibleSteps, setVisibleSteps] = useState<string[]>([])

  // Animation for sequential appearance of steps
  useEffect(() => {
    const steps = workflowSteps.map(step => step.id)
    
    steps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setVisibleSteps(prev => [...prev, step])
      }, 500 * (index + 1)) // Show each step with 500ms delay
      
      return () => clearTimeout(timer)
    })
  }, [])

  // Calculate vertical positions for each item to avoid overlap
  const getStepPosition = (stepId: string) => {
    const index = workflowSteps.findIndex(step => step.id === stepId)
    return `${index * 220}px` // Generous spacing between steps
  }

  // Calculate connector lines between steps
  const getConnectorStyle = (fromId: string, toId: string) => {
    const fromIndex = workflowSteps.findIndex(step => step.id === fromId)
    const toIndex = workflowSteps.findIndex(step => step.id === toId)
    
    return {
      top: `${fromIndex * 220 + 140}px`, 
      height: '80px'
    }
  }

  // Function to render a thought bubble
  const renderThought = (text: string, index: number) => (
    <p key={index} className="flex items-start gap-2 animate-fadeIn">
      <span className="text-lg">🧠</span>
      <span>{text}</span>
    </p>
  )

  // Render a step node
  const renderStepNode = (step: typeof workflowSteps[0]) => {
    const isVisible = visibleSteps.includes(step.id)
    const baseClasses = "rounded-lg p-4 text-white transition-all duration-500"
    const visibilityClasses = isVisible 
      ? "opacity-100 transform translate-y-0" 
      : "opacity-0 transform translate-y-10"
    const colorClasses = step.type === "main" ? "bg-[#1e54e9]" : "bg-[#2563eb]"
    
    return (
      <div 
        key={step.id}
        className={cn(baseClasses, colorClasses, visibilityClasses)}
        style={{
          position: "absolute",
          top: getStepPosition(step.id),
          left: step.type === "department" && ["risk-analysis", "pitch-deck", "finance-analysis"].includes(step.id)
            ? step.id === "risk-analysis" 
              ? "0" 
              : step.id === "pitch-deck" 
                ? "33%" 
                : "66%"
            : "50%",
          transform: step.type === "department" && ["risk-analysis", "pitch-deck", "finance-analysis"].includes(step.id)
            ? ""
            : "translateX(-50%)",
          width: step.type === "department" && ["risk-analysis", "pitch-deck", "finance-analysis"].includes(step.id)
            ? "30%" 
            : "90%",
          maxWidth: step.type === "department" && ["risk-analysis", "pitch-deck", "finance-analysis"].includes(step.id)
            ? "250px" 
            : "500px",
          zIndex: 2,
        }}
      >
        <h3 className="font-medium mb-2 flex items-center gap-2">
          {step.title}
          {step.complete && <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" />}
        </h3>
        <div className="space-y-2">
          {step.thoughts.map((thought, idx) => (
            renderThought(thought, idx)
          ))}
        </div>
      </div>
    )
  }

  // Render connector lines between steps
  const renderConnector = (fromId: string, toId: string) => {
    const isVisible = visibleSteps.includes(fromId) && visibleSteps.includes(toId)
    const style = getConnectorStyle(fromId, toId)
    
    return (
      <div 
        key={`${fromId}-${toId}`}
        className={cn(
          "absolute left-1/2 w-px bg-[#2ecc71] transition-all duration-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{
          ...style,
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />
    )
  }

  // Create an array of connectors
  const connectors = [
    { from: "main-task", to: "risk-analysis" },
    { from: "main-task", to: "pitch-deck" },
    { from: "main-task", to: "finance-analysis" },
    { from: "risk-analysis", to: "background-check" },
    { from: "pitch-deck", to: "background-check" },
    { from: "finance-analysis", to: "background-check" },
    { from: "background-check", to: "calendar" },
    { from: "calendar", to: "email" },
  ]

  return (
    <div className="relative w-full min-h-[1800px] px-4">
      {/* Steps */}
      {workflowSteps.map(step => renderStepNode(step))}
      
      {/* Connectors */}
      {connectors.map(conn => renderConnector(conn.from, conn.to))}
    </div>
  )
}
