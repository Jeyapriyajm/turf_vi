import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";
import "./Testimonials.css";
import { testimonials } from "../Data/features";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="tstm-section">
      <div className="tstm-container">
        <h2 className="tstm-title">
          What Our <span className="tstm-title-highlight">Clients</span> Say
        </h2>
        <div className="tstm-content">
          <div className="tstm-controls">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="tstm-nav-btn tstm-nav-btn--prev"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="tstm-nav-btn tstm-nav-btn--next"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="tstm-slide">
                <div className="tstm-card">
                  <FaQuoteRight className="tstm-quote-icon" />
                  <p className="tstm-text">{testimonial.text}</p>
                  <div className="tstm-divider"></div>
                  <div className="tstm-footer">
                    <h4 className="tstm-name">{testimonial.name}</h4>
                    <div className="tstm-rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "tstm-star tstm-star--filled"
                              : "tstm-star"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
