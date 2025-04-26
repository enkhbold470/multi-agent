"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, X, TrendingUp } from "lucide-react";
import StartupCard from "@/components/startup-card";
import PreferencesPanel from "@/components/preferences-panel";
import StartupDetailsModal from "@/components/startup-details-modal";
import { type Startup, startups } from "@/lib/data";

export default function Dashboard() {
  const router = useRouter();
  const [showPreferences, setShowPreferences] = useState(true);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const savedFilters = localStorage.getItem("investorFilters");
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);
      applyFiltersToStartups(filters);
      localStorage.removeItem("investorFilters");
      setHasSearched(true);
    }
  }, []);

  const applyFiltersToStartups = (filters: any) => {
    const filtered = startups.filter((startup) => {
      if (
        filters.industries.length > 0 &&
        !filters.industries.includes(startup.industry)
      ) {
        return false;
      }

      if (filters.stage && startup.stage !== filters.stage) {
        return false;
      }

      if (filters.region && startup.region !== filters.region) {
        return false;
      }

      if (filters.minTraction && startup.metrics.mrr < filters.minTraction) {
        return false;
      }

      return true;
    });

    setFilteredStartups(filtered);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const handleGetRecommendations = (filters: any) => {
    router.push("/loading");
  };

  const viewStartupDetails = (startup: Startup) => {
    setSelectedStartup(startup);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="h-16 border-b bg-white flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-md flex items-center justify-center">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Rest&Vest
          </h1>
        </div>
        {hasSearched && (
          <button
            onClick={togglePreferences}
            className="text-sm font-medium flex items-center"
          >
            {showPreferences ? (
              <>
                <X className="h-4 w-4 mr-1" />
                Hide Preferences
              </>
            ) : (
              <>Preferences</>
            )}
          </button>
        )}
      </header>

      {!hasSearched ? (
        <div className="flex flex-1 items-center justify-center pt-16">
          <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Find Your Perfect Startup Match
            </h2>
            <PreferencesPanel
              onGetRecommendations={(filters) => {
                localStorage.setItem(
                  "investorFilters",
                  JSON.stringify(filters)
                );
                setHasSearched(true);
                router.push("/loading");
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 pt-16">
          {showPreferences && (
            <div className="w-full md:w-1/3 lg:w-1/4 border-r bg-gray-50 p-4 overflow-y-auto">
              <PreferencesPanel
                onGetRecommendations={handleGetRecommendations}
              />
            </div>
          )}

          <div
            className={`flex-1 p-6 overflow-y-auto ${
              showPreferences ? "" : "w-full"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Recommended Startups</h2>

            {filteredStartups.length > 0 ? (
              <div className="space-y-4">
                {filteredStartups.map((startup) => (
                  <StartupCard
                    key={startup.id}
                    startup={startup}
                    onViewDetails={() => viewStartupDetails(startup)}
                  />
                ))}
                <div className="flex justify-center mt-8">
                  <button className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50">
                    Load More
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ChevronRight className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No matches found</h3>
                <p className="text-gray-500 max-w-md">
                  Try adjusting your preferences to see more startups that match
                  your investment criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedStartup && (
        <StartupDetailsModal
          startup={selectedStartup}
          isOpen={showModal}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
