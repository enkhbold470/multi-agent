import AgentWorkflowDiagram from "@/components/agent-workflow-diagram"
import AgentStatusPanel from "@/components/agent-status-panel"
import NavigationTabs from "@/components/navigation-tabs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a14]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center mb-6">
          <NavigationTabs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <AgentWorkflowDiagram />
          </div>
          <div className="lg:col-span-1">
            <AgentStatusPanel />
          </div>
        </div>
      </div>
    </main>
  )
}
