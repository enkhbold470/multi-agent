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
  { id: "saas", label: "SaaS" },
  { id: "healthtech", label: "HealthTech" },
  { id: "fintech", label: "FinTech" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "ai", label: "AI/ML" },
  { id: "edtech", label: "EdTech" },
];

const regions = [
  { value: "us", label: "United States" },
  { value: "eu", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "latam", label: "Latin America" },
  { value: "africa", label: "Africa" },
  { value: "global", label: "Global" },
];

const stages = [
  { value: "pre-seed", label: "Pre-seed" },
  { value: "seed", label: "Seed" },
  { value: "series-a", label: "Series A" },
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
  const [minTraction, setMinTraction] = useState<string>("");

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
    const filters = {
      industries: selectedIndustries,
      stage,
      region,
      minTraction: minTraction ? Number.parseInt(minTraction) : 0,
    };

    localStorage.setItem("investorFilters", JSON.stringify(filters));

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
        <h4 className="font-medium">Geographic Region</h4>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select region" />
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
        <h4 className="font-medium">Minimum Monthly Revenue</h4>
        <Input
          type="number"
          placeholder="e.g. 10000"
          value={minTraction}
          onChange={(e) => setMinTraction(e.target.value)}
          className="w-full"
        />
        <p className="text-xs text-gray-500">Enter minimum MRR in USD</p>
      </div>

      <Button className="w-full" onClick={handleSubmit}>
        Get Recommendations
      </Button>
    </div>
  );
}
