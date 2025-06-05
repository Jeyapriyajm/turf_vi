import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import "../App.css";

const GroundDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tenant_id = queryParams.get("tenant_id");

  const [ground, setGround] = useState(null);
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch location data
        const locationResponse = await fetch(
          `https://turfvi.app/wp-json/turfvi/v1/locations`
        );
        if (!locationResponse.ok) {
          throw new Error("Failed to fetch location");
        }
        const locationData = await locationResponse.json();
        if (
          locationData.status !== "success" ||
          !Array.isArray(locationData.data)
        ) {
          throw new Error("Invalid location API response");
        }
        const foundGround = locationData.data.find(
          (loc) => loc.id === parseInt(id)
        );
        if (!foundGround) {
          throw new Error("Ground not found");
        }
        setGround(foundGround);

        // Fetch tenant data if tenant_id exists
        if (tenant_id) {
          const tenantResponse = await fetch(
            `https://turfvi.app/wp-json/turfvi/v1/tenants/${tenant_id}`
          );
          if (!tenantResponse.ok) {
            throw new Error("Failed to fetch tenant");
          }
          const tenantData = await tenantResponse.json();
          if (tenantData.status !== "success") {
            throw new Error("Invalid tenant API response");
          }
          setTenant(tenantData.data);
        }

        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, tenant_id]);

  if (loading) {
    return (
      <div className="ground-details-container">
        <p>Loading ground details...</p>
      </div>
    );
  }

  if (error || !ground) {
    return (
      <div className="ground-details-container">
        <p>Error: {error || "Ground not found"}</p>
        <button onClick={() => navigate("/all-locations")}>
          Back to Locations
        </button>
      </div>
    );
  }

  // Construct booking URL
  const bookingUrl = tenant?.domain
    ? `https://turfvi.app/${tenant.domain}/booknetic-booking?location_id=${
        ground.id
      }${tenant_id ? `&tenant_id=${tenant_id}` : ""}`
    : `https://turfvi.app/booknetic-booking?location_id=${ground.id}${
        tenant_id ? `&tenant_id=${tenant_id}` : ""
      }`;

  return (
    <div className="ground-details-container">
      <button
        className="ground-back-button"
        onClick={() => navigate("/all-locations")}
      >
        ← Back to Locations
      </button>

      <div className="ground-hero-section">
        <h1 className="ground-main-heading">{ground.name}</h1>
        <p className="ground-subheading">
          Managed by {tenant ? tenant.full_name : "Unknown Tenant"}
        </p>
      </div>

      <div className="ground-details-grid">
        <div className="ground-image-container">
          <img
            src={ground.image || "https://placehold.co/300x300?text=No+Image"}
            alt={ground.name}
            className="ground-image"
            onError={(e) => {
              e.target.src = "https://placehold.co/300x300?text=No+Image";
            }}
          />
        </div>

        <div className="ground-info">
          <h2 className="ground-section-title">Venue Details</h2>
          <p className="ground-location">
            <strong>Location:</strong> {ground.location}
          </p>
          <p className="ground-phone">
            <strong>Phone:</strong> {ground.phone || "N/A"}
          </p>
          <p className="ground-notes">
            <strong>Notes:</strong> {ground.notes || "No additional notes"}
          </p>
          {tenant && (
            <div className="tenant-info">
              <h3>Tenant Information</h3>
              <p>
                <strong>Name:</strong> {tenant.full_name}
              </p>
              <p>
                <strong>Email:</strong> {tenant.email || "N/A"}
              </p>
              <p>
                <strong>Domain:</strong> {tenant.domain || "N/A"}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ground-booking-section">
        <h2 className="ground-section-title">Book This Venue</h2>
        <div className="booking-actions">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-booking-button"
          >
            Visit Booking Page
          </a>
        </div>
        <div className="qr-code-container">
          <QRCodeSVG
            value={bookingUrl}
            size={200}
            bgColor="#0f172a"
            fgColor="#ff6700"
            level="H"
            includeMargin={true}
          />
          <p className="qr-caption">Scan to Book Instantly</p>
        </div>
      </div>
    </div>
  );
};

export default GroundDetails;
