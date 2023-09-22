import React from "react";
import { useLocation } from "react-router-dom";

const SliderBottom = () => {
  const location = useLocation();

  // Check if the current route is "/cart"
  if (location.pathname === "/cart") {
    return null; // Don't render the Header component on the "Cart" page
  }
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img src="./image/ear1.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="./image/watch1.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="./image/ear-2.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="./image/watch2.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div class="carousel-item">
            <img src="./image/ear.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default SliderBottom;
