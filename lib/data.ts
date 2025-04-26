export const workflowSteps = [
  {
    id: "main-task",
    type: "main",
    title: "Manager Agent's new task:",
    thoughts: [
      "Supervisor is asking about to invest in Fetch AI...",
      "Lets invest!...",
      "Wait?... if he is just asking about it, he meant to ask from Risk Analysis Department, Pitch Deck judging committee, Background check Officer and Finance Analysis Department...",
      "Let me ask them..."
    ]
  },
  {
    id: "risk-analysis",
    type: "department",
    title: "Risk Analysis Department",
    thoughts: [
      "Growing market... 20% growth in this month... Nice!"
    ]
  },
  {
    id: "pitch-deck",
    type: "department",
    title: "Pitch Deck judging committee",
    thoughts: [
      "Determined Pitch deck redundancy 10%...Acceptable!",
      "Determined Pitch deck redundancy 2% 90%...Acceptable!"
    ]
  },
  {
    id: "finance-analysis",
    type: "department",
    title: "Finance Analysis Department",
    thoughts: []
  },
  {
    id: "background-check",
    type: "department",
    title: "Background check Officer",
    thoughts: [
      "Checked on 17 sources... Clear!"
    ]
  },
  {
    id: "calendar",
    type: "action",
    title: "Checking Google Calendar Next Available Schedule",
    thoughts: [
      "Decided to do at 5:00pm on Monday, 28th..."
    ]
  },
  {
    id: "email",
    type: "action",
    title: "Sending an invitation email with meeting schedule info...",
    thoughts: [],
    complete: true
  }
]

export const statusPanelData = {
  userMessage: "What are some hot companies launched in Bay Area today? I wanna invest...Can you setup meeting?",
  statusUpdates: [
    { type: "status", text: "Contacting with Manager Agent..." },
    { type: "dropdown", text: "Assign task for Manager Agent..." },
    { type: "dropdown", text: "Manager Agent running VM instance..." },
    { type: "status-right", text: "Instance is up and running..." },
    { type: "terminal", component: "Terminal Output" },
    { type: "dropdown", text: "Manager Agent browsing the internet..." },
    { type: "dropdown", text: "Manager Agent found 18 websites..." },
    { type: "status-right", text: "Opening 18 tabs..." },
    { type: "terminal", component: "Browser Tabs" },
    { type: "dropdown", text: "Manager Agent is making company list..." },
    { type: "status-right", text: "Creating Spreadsheet..." }
  ]
} 