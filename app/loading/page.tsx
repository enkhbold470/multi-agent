"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrainCircuit, Lightbulb, PieChart, Search, Zap } from "lucide-react";

export default function LoadingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState("");

  const thinkingSteps = [
    { icon: <Search className="h-6 w-6" />, text: "Analyzing preferences" },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      text: "Processing investor criteria",
    },
    { icon: <PieChart className="h-6 w-6" />, text: "Matching with startups" },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      text: "Finding optimal recommendations",
    },
    { icon: <Zap className="h-6 w-6" />, text: "Finalizing results" },
  ];

  useEffect(() => {
    const savedFilters = localStorage.getItem("investorFilters");
    if (!savedFilters) {
      router.push("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    const stepsInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < thinkingSteps.length - 1) return prev + 1;
        return prev;
      });
    }, 2000);

    const timer = setTimeout(() => {
      clearInterval(dotsInterval);
      clearInterval(stepsInterval);
      router.push("/dashboard");
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotsInterval);
      clearInterval(stepsInterval);
    };
  }, [router, thinkingSteps.length]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Finding Your Perfect Matches
        </h1>

        <div className="flex justify-center mb-8">
          <div className="h-24 w-24 rounded-full bg-blue-50 flex items-center justify-center">
            <BrainCircuit className="h-12 w-12 text-blue-500 animate-pulse" />
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {thinkingSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                index === currentStep
                  ? "bg-blue-50 border border-blue-100"
                  : index < currentStep
                  ? "text-gray-400"
                  : "text-gray-300"
              }`}
            >
              <div
                className={`${index === currentStep ? "text-blue-500" : ""}`}
              >
                {step.icon}
              </div>
              <span className="font-medium">
                {step.text}
                {index === currentStep && dots}
              </span>
              {index < currentStep && (
                <span className="ml-auto text-green-500">✓</span>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500">
          Our AI agent is working hard to find startups that match your criteria
        </p>
      </div>
    </main>
  );
}
