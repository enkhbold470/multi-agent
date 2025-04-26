"use client";

import type { Startup } from "@/lib/data";
import { ChevronRight, Users, Globe, DollarSign } from "lucide-react";

interface StartupCardProps {
  startup: Startup;
  onViewDetails: () => void;
}

export default function StartupCard({
  startup,
  onViewDetails,
}: StartupCardProps) {
  const matchScore = (startup.id.charCodeAt(0) % 30) + 70;

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 75) return "bg-green-500";
    if (score >= 60) return "bg-amber-500";
    return "bg-gray-500";
  };

  return (
    <div
      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white"
      onClick={onViewDetails}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
            {startup.logo ? (
              <img
                src={startup.logo || "/placeholder.svg"}
                alt={`${startup.name} logo`}
                className="w-8 h-8"
              />
            ) : (
              <span className="font-bold text-gray-500">
                {startup.name.charAt(0)}
              </span>
            )}
          </div>
          <h3 className="font-medium">{startup.name}</h3>
        </div>
        <div className="flex items-center">
          <div
            className={`${getScoreColor(
              matchScore
            )} text-white text-xs font-medium rounded-full px-2 py-1`}
          >
            {matchScore}% Match
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
        </div>
      </div>

      <p className="text-gray-600 italic mt-2 text-sm">{startup.tagline}</p>

      <div className="flex items-center mt-3 text-xs text-gray-500 space-x-3">
        <div className="flex items-center">
          <DollarSign className="h-3.5 w-3.5 mr-1" />
          <span>${startup.metrics.mrr.toLocaleString()} MRR</span>
        </div>
        <div className="flex items-center">
          <Users className="h-3.5 w-3.5 mr-1" />
          <span>{startup.metrics.teamSize}-person team</span>
        </div>
        <div className="flex items-center">
          <Globe className="h-3.5 w-3.5 mr-1" />
          <span>{startup.region}</span>
        </div>
      </div>
    </div>
  );
}
