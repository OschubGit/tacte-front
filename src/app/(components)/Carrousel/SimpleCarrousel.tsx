import React from "react";

const SimpleCarrousel = () => {
  return (
    <div className="w-full">
      <div className="carousel carousel-center bg-tacte-primary-600 space-x-4 p-4 w-full">
        <div className="carousel-item">
          <img
            src="/images/slider/slider_1.png"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider/slider_2.jpg"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider/slider_3.png"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider/slider_4.png"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider/slider_5.png"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider/slider_6.png"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider/slider_7.jpg"
            className="rounded-box max-w-90 opacity-50 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleCarrousel;
