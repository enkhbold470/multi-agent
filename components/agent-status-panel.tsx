import { ArrowRight, ChevronDown, Mic } from "lucide-react"

export default function AgentStatusPanel() {
  return (
    <div className="flex flex-col h-full min-h-[600px] border border-[#2a2a40] rounded-xl overflow-hidden">
      {/* Header with arrow button */}
      <div className="bg-[#1a1a2e] p-3 flex justify-end">
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#2a2a40]">
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Chat content */}
      <div className="flex-grow bg-[#0f0f1e] p-4 overflow-y-auto space-y-4">
        {/* User message */}
        <div className="bg-[#2563eb] rounded-lg p-4 ml-auto max-w-[90%]">
          <p className="text-white text-right">
            What are some hot companies launched in Bay Area today? I wanna invest...Can you setup meeting?
          </p>
        </div>

        {/* Agent status updates */}
        <div className="text-gray-300 text-sm">Contacting with Manager Agent...</div>

        <div className="flex items-center gap-2 text-gray-300">
          <ChevronDown className="w-4 h-4 text-gray-500" />
          <p>Assign task for Manager Agent...</p>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <ChevronDown className="w-4 h-4 text-gray-500" />
          <p>Manager Agent running VM instance...</p>
        </div>

        <div className="text-right text-gray-400 text-sm">Instance is up and running...</div>

        <div className="flex justify-end">
          <div className="bg-gray-800 rounded-md overflow-hidden w-[150px] h-[60px]">
            <div className="w-full h-full bg-black/50 flex items-center justify-center text-xs text-gray-400">
              Terminal Output
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <ChevronDown className="w-4 h-4 text-gray-500" />
          <p>Manager Agent browsing the internet...</p>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <ChevronDown className="w-4 h-4 text-gray-500" />
          <p>Manager Agent found 18 websites...</p>
        </div>

        <div className="text-right text-gray-400 text-sm">Opening 18 tabs...</div>

        <div className="flex justify-end">
          <div className="bg-gray-800 rounded-md overflow-hidden w-[150px] h-[60px]">
            <div className="w-full h-full bg-black/50 flex items-center justify-center text-xs text-gray-400">
              Browser Tabs
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <ChevronDown className="w-4 h-4 text-gray-500" />
          <p>Manager Agent is making company list...</p>
        </div>

        <div className="text-right text-gray-400 text-sm">Creating Spreadsheet...</div>
      </div>

      {/* Input area */}
      <div className="bg-[#1a1a2e] p-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-grow">
            <div className="w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center">
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

          <button className="w-10 h-10 rounded-lg bg-[#0f0f1e] flex items-center justify-center ml-2">
            <Mic className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
