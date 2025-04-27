"use client";

import type { Startup } from "@/lib/data";
import { ChevronRight, Users, DollarSign, Building } from "lucide-react";

interface StartupCardProps {
  startup: Startup;
  rank?: number;
  timestamp?: string;
  onViewDetails: () => void;
}

export default function StartupCard({
  startup,
  rank,
  timestamp,
  onViewDetails,
}: StartupCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  const formatFunding = (funding: number) => {
    if (funding >= 1000000000) {
      return `$${(funding / 1000000000).toFixed(1)}B`;
    }
    return `$${(funding / 1000000).toFixed(1)}M`;
  };

  return (
    <div
      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white relative"
      onClick={onViewDetails}
    >
      {rank && (
        <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-medium shadow border border-gray-200">
          <span className="text-purple-600">{rank}</span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
            <span className="font-bold text-gray-500">
              {startup.Name.charAt(0)}
            </span>
          </div>
          <h3 className="font-medium">{startup.Name}</h3>
        </div>
        <div className="flex items-center">
          <div
            className={`${getScoreColor(
              startup.score
            )} text-white text-xs font-medium rounded-full px-2 py-1`}
          >
            {startup.score}% Match
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
        </div>
      </div>

      <p className="text-gray-600 italic mt-2 text-sm">{startup.Description}</p>

      <div className="flex items-center mt-3 text-xs text-gray-500 space-x-3">
        <div className="flex items-center">
          <DollarSign className="h-3.5 w-3.5 mr-1" />
          <span>{formatFunding(startup.funding)}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-3.5 w-3.5 mr-1" />
          <span>{startup.stage}</span>
        </div>
        <div className="flex items-center">
          <Building className="h-3.5 w-3.5 mr-1" />
          <span>{startup.Location}</span>
        </div>
      </div>

      {timestamp && (
        <div className="mt-3 text-xs text-gray-400 text-right">
          Data from: {timestamp}
        </div>
      )}
    </div>
  );
}
