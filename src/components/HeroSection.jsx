import { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import { ChevronDown, Calendar, Clock, MapPin, Link } from "lucide-react";

const HeroSection = ({ backgroundImage, headerText }) => {
  const textParts = headerText.split(" ");
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Show elements with animation after component mounts
    setIsLoaded(true);

    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      className={`hero-section ${isLoaded ? "loaded" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay gradient */}
      <div className="hero-overlay"></div>

      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-line line-1"></div>
      <div className="decorative-line line-2"></div>

      {/* Content container */}
      <div className="hero-content">
        {/* Badge */}
        <div className="premium-badge">
          <span className="badge-text">PREMIUM</span>
          <span className="badge-dot"></span>
          <span className="badge-text">EXPERIENCE</span>
        </div>

        {/* Animated Main heading */}
        <div className="hero-heading-container">
          <h1 className="hero-heading animated-heading">
            {/* First part - TURF */}
            <span className="heading-part">
              {textParts[0].split("").map((letter, index) => (
                <span
                  key={`first-${index}`}
                  className="animated-letter"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>

            {/* Second part - VI */}
            <span className="heading-highlight">
              {textParts[1].split("").map((letter, index) => (
                <span
                  key={`second-${index}`}
                  className="animated-letter highlight-letter"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          {/* 3D effect elements */}
          <div className="heading-glow"></div>
          <div className="heading-backdrop">
            {textParts[0]} {textParts[1]}
          </div>
        </div>

        {/* Tagline */}
        <p className="hero-tagline">
          Experience the ultimate turf booking platform with premium facilities
          and seamless reservations
        </p>

        {/* Features */}
        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon1">
              <Calendar className="icon" />
            </div>
            <span className="feature-text">Easy Booking</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon1">
              <Clock className="icon" />
            </div>
            <span className="feature-text">24/7 Availability</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon1">
              <MapPin className="icon" />
            </div>
            <span className="feature-text">Multiple Locations</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-container1">
          <Link to="/demopage" className="cta-button1">
            <span className="cta-text1">BOOK YOUR TURF</span>
            <span className="cta-shine"></span>
          </Link>
        </div>
        {/* Scroll indicator */}
        <div className="scroll-indicator1" onClick={handleScrollDown}>
          <span className="scroll-text1">EXPLORE MORE</span>
          <div className="scroll-icon-container">
            <ChevronDown className="scroll-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
