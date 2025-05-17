import React, { useState, useEffect } from "react";
import "./SportsGrounds.css";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SportsGrounds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [grounds, setGrounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://turfvi.app/wp-json/turfvi/v1/locations"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch locations");
        }
        const data = await response.json();
        console.log("API Response:", data);
        if (data.status !== "success" || !Array.isArray(data.data)) {
          throw new Error("Invalid API response format");
        }
        setGrounds(data.data);
        setError(null);
      } catch (err) {
        setError("Unable to load venues. Please try again later.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGrounds();
  }, []);

  const filteredGrounds = grounds
    .filter(
      (ground) =>
        searchTerm === "" ||
        ground.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 3); // Limit to 3 grounds

  return (
    <div className="sportify-grounds-container">
      <div className="sportify-hero-section">
        <h1 className="sportify-main-heading">
          <span className="sportify-heading-primary">Discover </span>
          <span className="sportify-heading-accent">Sport Venues</span>
        </h1>
        <p className="sportify-subheading">
          Find the perfect ground for your favorite sport
        </p>
      </div>

      <div className="sportify-search-container">
        <div className="sportify-search-wrapper">
          <Search className="sportify-search-icon" />
          <input
            className="sportify-search-input"
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="sportify-results-section">
        {loading ? (
          <p>Loading venues...</p>
        ) : error ? (
          <div className="sportify-no-results">
            <p>{error}</p>
            <button
              className="sportify-reset-button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {searchTerm && (
              <h2 className="sportify-results-title">
                Venues{searchTerm && ` in ${searchTerm}`}
              </h2>
            )}
            <div className="sportify-grounds-grid">
              {filteredGrounds.length > 0 ? (
                filteredGrounds.map((ground) => (
                  <div
                    key={ground.id}
                    className="sportify-ground-card"
                    onClick={() =>
                      navigate(
                        `/ground/${ground.id}${
                          ground.tenant_id
                            ? `?tenant_id=${ground.tenant_id}`
                            : ""
                        }`
                      )
                    }
                  >
                    <div className="sportify-ground-image-container">
                      <img
                        src={
                          ground.image ||
                          "https://placehold.co/300x300?text=No+Image"
                        }
                        alt={ground.name || "Venue"}
                        className="sportify-ground-image"
                        onError={(e) => {
                          console.warn(
                            `Failed to load image for ${
                              ground.name || "unknown"
                            }: ${ground.image || "no image URL"}`
                          );
                          e.target.src =
                            "https://placehold.co/300x300?text=No+Image";
                        }}
                        onLoad={() =>
                          console.log(`Loaded image: ${ground.image}`)
                        }
                      />
                    </div>
                    <div className="sportify-ground-info">
                      <h3 className="sportify-ground-name">
                        {ground.name || "Unnamed Venue"}
                      </h3>
                      <p className="sportify-ground-location">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="sportify-location-icon"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {ground.location || "Unknown Location"}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="sportify-no-results">
                  <p>No venues found matching your criteria</p>
                  <button
                    className="sportify-reset-button"
                    onClick={() => setSearchTerm("")}
                  >
                    Reset search
                  </button>
                </div>
              )}
            </div>
            <div className="sportify-explore-more">
              <button
                className="sportify-explore-button"
                onClick={() => navigate("/all-locations")}
              >
                Explore More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SportsGrounds;
