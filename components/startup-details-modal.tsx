"use client";

import {
  Users,
  DollarSign,
  Linkedin,
  Calendar,
  Globe,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import type { Startup } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface StartupDetailsModalProps {
  startup: Startup;
  isOpen: boolean;
  onClose: () => void;
}

export default function StartupDetailsModal({
  startup,
  isOpen,
  onClose,
}: StartupDetailsModalProps) {
  // Format funding to display in millions or billions
  const formatFunding = (funding: number) => {
    if (funding >= 1000000000) {
      return `$${(funding / 1000000000).toFixed(1)}B`;
    }
    return `$${(funding / 1000000).toFixed(1)}M`;
  };

  // Extract founder names from the comma-separated list
  const foundersList = startup.Founders.split(", ");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-3">
              <span className="font-bold text-gray-500">
                {startup.Name.charAt(0)}
              </span>
            </div>
            <div>
              <DialogTitle className="text-xl">{startup.Name}</DialogTitle>
              <DialogDescription className="text-sm italic">
                {startup.Industry}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="text-sm font-medium mb-2">About</h3>
            <p className="text-sm text-gray-600">{startup.Description}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  Funding
                </div>
                <div className="font-medium">
                  {formatFunding(startup.funding)}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  Stage
                </div>
                <div className="font-medium">{startup.stage}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  Match Score
                </div>
                <div className="font-medium">{startup.score}%</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Launch Date
                </div>
                <div className="font-medium">{startup["Launch Date"]}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <Globe className="h-3 w-3 mr-1" />
                  Location
                </div>
                <div className="font-medium">{startup.Location}</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md mb-6">
              <div className="text-xs text-gray-500 mb-1">Early Metrics</div>
              <div className="font-medium text-sm">
                {startup["Early Metrics"]}
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-xs text-gray-500 mb-1">Press</div>
              <div className="font-medium text-sm">{startup.Press}</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Founders</h3>
            <div className="space-y-3">
              {foundersList.map((founder, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">
                      {founder.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{founder}</div>
                  </div>
                  <a
                    href={startup.Founder_LinkedIn[founder] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-gray-400 hover:text-gray-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              className="flex-1"
              onClick={() => window.open(startup.Website, "_blank")}
            >
              Visit Website
            </Button>
            <Button variant="outline" className="flex-1">
              Save to Watchlist
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
