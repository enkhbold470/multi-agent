export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
}

export interface Startup {
  id?: string;
  Name: string;
  Description: string;
  Founders: string;
  Founder_LinkedIn: {
    [key: string]: string;
  };
  "Launch Date": string;
  Website: string;
  Industry: string;
  "Early Metrics": string;
  "Funding Status": string;
  Location: string;
  Press: string;
  score: number;
  funding: number;
  stage: string;
}
