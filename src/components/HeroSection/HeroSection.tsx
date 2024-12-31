import React from "react";
import "./herosection.css"
const HeroSection = ({ image, heading, paragraph, buttonText, backgroundDivClass}) => {
  return (
    <section class={"row section-hero-1"}>
      <div class={"inner-section-hero-warp "+ backgroundDivClass}></div>
      <div
        class={"col-12"}
        style={{ opacity: "0.9", zIndex: "2", maxHeight: "100%" }}
      >
        <img src={image} alt="" srcset="" class={"hero-img-warp"} />
      </div>
      <div class={"col-6 text-hero-container"}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <button class={"btn btn-success p-2"} data-bs-toggle="modal" data-bs-target="#bookingModal">
          {" "}
          <i class="bi bi-calendar3 p-3"></i> <span>{buttonText}</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
