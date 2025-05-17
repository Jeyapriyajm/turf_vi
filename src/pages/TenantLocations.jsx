import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKNATIC_LOCATIONS, GET_BOOKNATIC_TENANT } from "../queries";
import { Search } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FootballImage,
  CricketImage,
  HockeyImage,
  TableTennisImage,
} from "../assets";

const TenantLocations = () => {
  const { tenant_id } = useParams(); // Get tenant_id from URL
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  const categoryImages = {
    Football: FootballImage,
    Cricket: CricketImage,
    Hockey: HockeyImage,
    "Table Tennis": TableTennisImage,
  };

  const {
    loading: tenantLoading,
    error: tenantError,
    data: tenantData,
  } = useQuery(GET_BOOKNATIC_TENANT, {
    variables: { id: tenant_id },
    skip: !tenant_id,
  });

  const {
    loading: locationsLoading,
    error: locationsError,
    data: locationsData,
  } = useQuery(GET_BOOKNATIC_LOCATIONS, {
    variables: {
      tenant_id: tenant_id || null,
      city: selectedCity || null,
      country: selectedCountry || null,
      category: selectedCategory || null,
    },
  });

  const filteredLocations =
    locationsLoading || locationsError
      ? []
      : locationsData.bookneticLocations.filter(
          (location) =>
            searchTerm === "" ||
            location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const cities = [
    ...new Set(
      locationsData?.bookneticLocations.map((location) => location.city) || []
    ),
  ].filter(Boolean);
  const countries = [
    ...new Set(
      locationsData?.bookneticLocations.map((location) => location.country) ||
        []
    ),
  ].filter(Boolean);
  const categories = [
    ...new Set(
      locationsData?.bookneticLocations.map((location) => location.category) ||
        []
    ),
  ].filter(Boolean);

  if (tenantLoading || locationsLoading)
    return (
      <div className="tenant-locations-container">
        <p>Loading tenant locations...</p>
      </div>
    );
  if (
    tenantError ||
    locationsError ||
    (tenant_id && !tenantData?.bookneticTenant)
  )
    return (
      <div className="tenant-locations-container">
        <p>
          Error:{" "}
          {tenantError?.message ||
            locationsError?.message ||
            "Tenant not found"}
        </p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );

  const tenant = tenantData?.bookneticTenant;

  return (
    <div className="tenant-locations-container">
      <div className="tenant-hero-section">
        <h1 className="tenant-main-heading">
          {tenant ? tenant.full_name : "All Tenants"} Locations
        </h1>
        {tenant && (
          <div className="tenant-details">
            <p>
              <strong>Email:</strong> {tenant.email}
            </p>
            <p>
              <strong>Domain:</strong> {tenant.domain}
            </p>
            <p>
              <strong>Plan ID:</strong> {tenant.plan_id}
            </p>
            <p>
              <strong>Expires:</strong>{" "}
              {new Date(tenant.expires_in).toLocaleDateString()}
            </p>
            {tenant.custom_fields?.length > 0 && (
              <div className="tenant-custom-fields">
                <h3>Custom Fields</h3>
                <ul>
                  {tenant.custom_fields.map((field) => (
                    <li key={field.form_input_id}>
                      <strong>{field.label}:</strong>{" "}
                      {field.type === "file" && field.file_url ? (
                        <a
                          href={field.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {field.input_file_name || "Download File"}
                        </a>
                      ) : (
                        field.input_value || "N/A"
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="tenant-search-container">
        <div className="tenant-search-wrapper">
          <Search className="tenant-search-icon" />
          <input
            className="tenant-search-input"
            type="text"
            placeholder="Search by location or venue name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="tenant-filter-wrapper">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="tenant-filter-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="tenant-filter-select"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="tenant-filter-select"
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="tenant-locations-grid">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <div
              key={location.id}
              className="tenant-location-card"
              onClick={() =>
                navigate(
                  `/ground/${location.id}${
                    tenant_id ? `?tenant_id=${tenant_id}` : ""
                  }`
                )
              }
            >
              <div className="tenant-location-image-container">
                <img
                  src={
                    location.image ||
                    categoryImages[location.category] ||
                    categoryImages.Football
                  }
                  alt={location.name}
                  className="tenant-location-image"
                />
                <div className="tenant-location-badge">{location.category}</div>
              </div>
              <div className="tenant-location-info">
                <h3 className="tenant-location-name">{location.name}</h3>
                <p className="tenant-location-location">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tenant-location-icon"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {location.city}, {location.country}
                </p>
                {location.services && location.services.length > 0 ? (
                  <div className="tenant-location-services">
                    <p>
                      <strong>Services:</strong>
                    </p>
                    <ul>
                      {location.services.map((service) => (
                        <li key={service.id}>
                          {service.name} - ${service.price.toFixed(2)} (
                          {service.duration})
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="tenant-location-services">
                    No services available
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="tenant-no-results">
            <p>No locations found matching your criteria</p>
            <button
              className="tenant-reset-button"
              onClick={() => {
                setSelectedCategory("");
                setSearchTerm("");
                setSelectedCity("");
                setSelectedCountry("");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenantLocations;
