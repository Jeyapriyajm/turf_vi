import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Product from "./Product";
import { products } from "../Data/features";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="prod-carousel-section">
      <div className="prod-carousel-container">
        <h2 className="prod-carousel-title">
          Explore Our{" "}
          <span className="prod-carousel-title-highlight">Products</span>
        </h2>
        <div className="prod-carousel-content">
          <div className="prod-carousel-controls">
            <button
              className="prod-carousel-nav-btn prod-carousel-nav-btn--prev"
              onClick={() => sliderRef.current.slickPrev()}
              aria-label="Previous product"
            >
              <FaChevronLeft />
            </button>
            <button
              className="prod-carousel-nav-btn prod-carousel-nav-btn--next"
              onClick={() => sliderRef.current.slickNext()}
              aria-label="Next product"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="prod-carousel-slider">
            <Slider ref={sliderRef} {...settings}>
              {products.map((product) => (
                <div key={product.id} className="prod-carousel-slide">
                  <Product product={product} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
