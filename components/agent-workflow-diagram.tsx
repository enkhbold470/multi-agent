import { CheckCircle } from "lucide-react"

export default function AgentWorkflowDiagram() {
  return (
    <div className="relative w-full h-full min-h-[600px]">
      {/* Main task node */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md">
        <div className="bg-[#1e54e9] rounded-lg p-4 text-white">
          <h3 className="font-medium mb-2">Manager Agent&apos;s new task:</h3>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <span className="text-lg">🧠</span>
              <span>Supervisor is asking about to invest in Fetch AI...</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-lg">🧠</span>
              <span>Lets invest!...</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-lg">🧠</span>
              <span>
                Wait?... if he is just asking about it, he meant to ask from Risk Analysis Department, Pitch Deck
                judging committee, Background check Officer and Finance Analysis Department...
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-lg">🧠</span>
              <span>Let me ask them...</span>
            </p>
          </div>
        </div>
      </div>

      {/* Connector lines */}
      <div className="absolute top-[140px] left-1/2 w-px h-[60px] bg-[#2ecc71]"></div>

      {/* First level nodes */}
      <div className="absolute top-[200px] flex justify-between w-full">
        {/* Risk Analysis Department */}
        <div className="w-[30%] max-w-[250px]">
          <div className="bg-[#2563eb] rounded-lg p-3 text-white">
            <h4 className="font-medium mb-2">Risk Analysis Department</h4>
            <p className="flex items-start gap-2 text-sm">
              <span>🧠</span>
              <span>Growing market... 20% growth in this month... Nice!</span>
            </p>
          </div>
        </div>

        {/* Pitch Deck judging committee */}
        <div className="w-[30%] max-w-[250px]">
          <div className="bg-[#2563eb] rounded-lg p-3 text-white">
            <h4 className="font-medium mb-2">Pitch Deck judging committee</h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2 text-sm">
                <span>🧠</span>
                <span>Determined Pitch deck redundancy 10%...Acceptable!</span>
              </p>
              <p className="flex items-start gap-2 text-sm">
                <span>🧠</span>
                <span>Determined Pitch deck redundancy 2% 90%...Acceptable!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Finance Analysis Department */}
        <div className="w-[30%] max-w-[250px]">
          <div className="bg-[#2563eb] rounded-lg p-3 text-white">
            <h4 className="font-medium mb-2">Finance Analysis Department</h4>
          </div>
        </div>
      </div>

      {/* Background check Officer */}
      <div className="absolute top-[320px] left-1/2 transform -translate-x-1/2 w-[30%] max-w-[250px]">
        <div className="bg-[#2563eb] rounded-lg p-3 text-white">
          <h4 className="font-medium mb-2">Background check Officer</h4>
          <p className="flex items-start gap-2 text-sm">
            <span>🧠</span>
            <span>Checked on 17 sources... Clear!</span>
          </p>
        </div>
      </div>

      {/* Connector lines */}
      <div className="absolute top-[400px] left-1/2 w-px h-[60px] bg-[#2ecc71]"></div>

      {/* Calendar node */}
      <div className="absolute top-[460px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md">
        <div className="bg-[#2563eb] rounded-lg p-3 text-white">
          <h4 className="font-medium mb-2">Checking Google Calendar Next Available Schedule</h4>
          <p className="flex items-start gap-2 text-sm">
            <span>🧠</span>
            <span>Decided to do at 5:00pm on Monday, 28th...</span>
          </p>
        </div>
      </div>

      {/* Connector lines */}
      <div className="absolute top-[540px] left-1/2 w-px h-[60px] bg-[#2ecc71]"></div>

      {/* Email node */}
      <div className="absolute top-[600px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md">
        <div className="bg-[#2563eb] rounded-lg p-3 text-white">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            Sending an invitation email with meeting schedule info...
            <CheckCircle className="w-5 h-5 text-green-400" />
          </h4>
        </div>
      </div>

      {/* Connector arrows - these would be better as SVG paths in a production app */}
      <div className="absolute top-[140px] left-1/4 w-[25%] h-px bg-[#2ecc71]"></div>
      <div className="absolute top-[140px] left-3/4 w-[25%] h-px bg-[#2ecc71]"></div>
      <div className="absolute top-[140px] left-1/4 w-px h-[60px] bg-[#2ecc71]"></div>
      <div className="absolute top-[140px] left-3/4 w-px h-[60px] bg-[#2ecc71]"></div>

      <div className="absolute top-[260px] left-[40%] w-[10%] h-px bg-[#2ecc71]"></div>
      <div className="absolute top-[260px] left-[40%] w-px h-[60px] bg-[#2ecc71]"></div>

      <div className="absolute top-[380px] left-1/4 w-[25%] h-px bg-[#2ecc71]"></div>
      <div className="absolute top-[380px] left-1/2 w-[25%] h-px bg-[#2ecc71]"></div>
      <div className="absolute top-[380px] left-1/4 w-px h-[80px] bg-[#2ecc71]"></div>
      <div className="absolute top-[380px] left-1/2 w-px h-[80px] bg-[#2ecc71]"></div>
      <div className="absolute top-[380px] left-3/4 w-px h-[80px] bg-[#2ecc71]"></div>
    </div>
  )
}
