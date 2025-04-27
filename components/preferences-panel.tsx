"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const industries = [
  { id: "Art Restoration", label: "Art Restoration" },
  { id: "Artificial Intelligence", label: "Artificial Intelligence" },
  { id: "Autonomous Vehicles", label: "Autonomous Vehicles" },
  { id: "Beverage", label: "Beverage" },
  { id: "Clean Energy", label: "Clean Energy" },
  { id: "Consumer Goods", label: "Consumer Goods" },
  { id: "Data Integration", label: "Data Integration" },
  { id: "Developer Tools", label: "Developer Tools" },
  { id: "Marketing", label: "Marketing" },
  { id: "Networking", label: "Networking" },
  { id: "No-Code", label: "No-Code" },
  { id: "SaaS", label: "SaaS" },
  { id: "Search", label: "Search" },
  { id: "Security", label: "Security" },
  { id: "Transportation", label: "Transportation" },
  { id: "Voice Technology", label: "Voice Technology" },
];

const regions = [
  { value: "San Francisco, CA", label: "San Francisco" },
  { value: "New York, NY", label: "New York" },
  { value: "Austin, TX", label: "Austin" },
  { value: "Boston, MA", label: "Boston" },
  { value: "London, UK", label: "London" },
  { value: "Global", label: "Global" },
];

const stages = [
  { value: "Pre-seed", label: "Pre-seed" },
  { value: "Seed", label: "Seed" },
  { value: "Series A", label: "Series A" },
  { value: "Series B", label: "Series B" },
  { value: "Series C", label: "Series C" },
];

interface PreferencesPanelProps {
  onGetRecommendations: (filters: any) => void;
}

export default function PreferencesPanel({
  onGetRecommendations,
}: PreferencesPanelProps) {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [stage, setStage] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [minFunding, setMinFunding] = useState<string>("");

  const handleIndustryChange = (industryId: string, checked: boolean) => {
    if (checked) {
      setSelectedIndustries([...selectedIndustries, industryId]);
    } else {
      setSelectedIndustries(
        selectedIndustries.filter((id) => id !== industryId)
      );
    }
  };

  const handleSubmit = () => {
    const filters: any = {};

    if (selectedIndustries.length > 0) {
      filters.industry = selectedIndustries;
    }

    if (stage) {
      filters.stage = stage;
    }

    if (region) {
      filters.location = region;
    }

    if (minFunding && parseInt(minFunding) > 0) {
      filters.minFunding = parseInt(minFunding);
    }

    onGetRecommendations(filters);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Investor Preferences</h3>
        <p className="text-sm text-gray-500 mb-6">
          Customize your filters to find startups that match your investment
          criteria.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Industry</h4>
        <div className="space-y-2">
          {industries.map((industry) => (
            <div key={industry.id} className="flex items-center space-x-2">
              <Checkbox
                id={`industry-${industry.id}`}
                checked={selectedIndustries.includes(industry.id)}
                onCheckedChange={(checked) =>
                  handleIndustryChange(industry.id, checked as boolean)
                }
              />
              <Label
                htmlFor={`industry-${industry.id}`}
                className="text-sm font-normal"
              >
                {industry.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Stage</h4>
        <Select value={stage} onValueChange={setStage}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select stage" />
          </SelectTrigger>
          <SelectContent>
            {stages.map((stageOption) => (
              <SelectItem key={stageOption.value} value={stageOption.value}>
                {stageOption.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Location</h4>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((regionOption) => (
              <SelectItem key={regionOption.value} value={regionOption.value}>
                {regionOption.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Minimum Funding</h4>
        <Input
          type="number"
          placeholder="e.g. 1000000"
          value={minFunding}
          onChange={(e) => setMinFunding(e.target.value)}
          className="w-full"
        />
        <p className="text-xs text-gray-500">Enter minimum funding in USD</p>
      </div>

      <Button className="w-full" onClick={handleSubmit}>
        Get Recommendations
      </Button>
    </div>
  );
}
