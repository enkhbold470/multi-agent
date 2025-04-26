"use client";

import { Users, DollarSign, TrendingUp, Linkedin } from "lucide-react";
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
  const generateGrowthData = () => {
    const baseValue = startup.metrics.mrr * 0.7;
    return Array(6)
      .fill(0)
      .map((_, i) => {
        const randomFactor = ((startup.id.charCodeAt(0) + i) % 10) / 100;
        return Math.round(
          baseValue + baseValue * 0.1 * i + randomFactor * baseValue
        );
      });
  };

  const growthData = generateGrowthData();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-3">
              {startup.logo ? (
                <img
                  src={startup.logo || "/placeholder.svg"}
                  alt={`${startup.name} logo`}
                  className="w-10 h-10"
                />
              ) : (
                <span className="font-bold text-gray-500">
                  {startup.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <DialogTitle className="text-xl">{startup.name}</DialogTitle>
              <DialogDescription className="text-sm italic">
                {startup.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="text-sm font-medium mb-2">About</h3>
            <p className="text-sm text-gray-600">{startup.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  MRR
                </div>
                <div className="font-medium">
                  ${startup.metrics.mrr.toLocaleString()}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  Team Size
                </div>
                <div className="font-medium">
                  {startup.metrics.teamSize} people
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Growth
                </div>
                <div className="font-medium">{startup.metrics.growth}% MoM</div>
              </div>
            </div>

            <div className="h-32 relative">
              <h4 className="text-xs font-medium mb-2">Last 6 Months MRR</h4>
              <div className="flex items-end h-24 w-full">
                {growthData.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full bg-emerald-200 rounded-t"
                      style={{
                        height: `${(value / Math.max(...growthData)) * 100}%`,
                        maxWidth: "20px",
                        margin: "0 auto",
                      }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-1">
                      {months[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Team</h3>
            <div className="space-y-3">
              {startup.team.map((member, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.role}</div>
                  </div>
                  <a
                    href="#"
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
            <Button className="flex-1">Contact Founder</Button>
            <Button variant="outline" className="flex-1">
              Save to Watchlist
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
