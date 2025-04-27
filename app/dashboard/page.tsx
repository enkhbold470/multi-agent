"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import StartupCard from "@/components/startup-card";
import PreferencesPanel from "@/components/preferences-panel";
import StartupDetailsModal from "@/components/startup-details-modal";
import { type Startup } from "@/lib/data";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [showPreferences, setShowPreferences] = useState(true);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchTimestamp, setFetchTimestamp] = useState<string>("");

  useEffect(() => {
    const savedFilters = localStorage.getItem("investorFilters");
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);
      fetchStartups(filters);
      localStorage.removeItem("investorFilters");
    }
  }, []);

  const fetchStartups = async (filters: any) => {
    setIsLoading(true);
    setError(null);

    try {
      if (filters.industries) {
        filters.industry = filters.industries;
        delete filters.industries;
      }

      console.log("Fetching startups with filters:", filters);

      const response = await fetch(
        "https://starfish-app-rpg67.ondigitalocean.app/api/companies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch startups: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        console.error("Invalid API response format:", data);
        throw new Error("Received invalid data format from API");
      }

      console.log("Received startups:", data);
      const now = new Date();
      setFetchTimestamp(now.toLocaleString());
      const sortedStartups = [...data].sort((a, b) => b.score - a.score);
      setFilteredStartups(sortedStartups);
      setHasSearched(true);
    } catch (err) {
      console.error("Error fetching startups:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch startups. Please try again."
      );
      setFilteredStartups([]);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const handleGetRecommendations = (filters: any) => {
    fetchStartups(filters);
  };

  const viewStartupDetails = (startup: Startup) => {
    setSelectedStartup(startup);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <header className="h-16 border-b bg-white flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-10 shadow-sm">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/restnvest-logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
            Rest&Vest
          </h1>
        </Link>
        {hasSearched && (
          <button
            onClick={togglePreferences}
            className="text-sm font-medium flex items-center text-purple-600 hover:text-purple-700 transition-colors"
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
            <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
              Find Your Perfect Startup Match
            </h2>
            <PreferencesPanel
              onGetRecommendations={(filters) => {
                fetchStartups(filters);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 pt-16">
          {showPreferences && (
            <div className="w-full md:w-1/3 lg:w-1/4 border-r bg-white p-4 overflow-y-auto shadow-sm">
              <h3 className="font-medium text-lg mb-4 text-purple-600">
                Investment Preferences
              </h3>
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
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Recommended Startups
            </h2>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-md mb-4">
                <p className="font-medium">Error:</p>
                <p>{error}</p>
              </div>
            )}

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : filteredStartups.length > 0 ? (
              <div className="space-y-4">
                {fetchTimestamp && (
                  <div className="text-sm text-gray-500 italic">
                    Results fetched at: {fetchTimestamp}
                  </div>
                )}
                {filteredStartups.map((startup, index) => (
                  <StartupCard
                    key={index}
                    startup={startup}
                    rank={index + 1}
                    timestamp={fetchTimestamp}
                    onViewDetails={() => viewStartupDetails(startup)}
                  />
                ))}
              </div>
            ) : hasSearched ? (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-xl shadow-sm p-8">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <ChevronRight className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  No matches found
                </h3>
                <p className="text-gray-500 max-w-md">
                  Try adjusting your preferences to see more startups that match
                  your investment criteria.
                </p>
              </div>
            ) : null}
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
