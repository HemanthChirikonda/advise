import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import about1 from "../../assets/about-1.jpg";
import au from "../../assets/australia-map-logo.png";
import india from "../../assets/map-of-india-logo.png";
import "./contact.css";

const Contact = () => {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <HeroSection
        image={about1}
        heading={"Contact US"}
        paragraph={
          "Do you need help with finding the right course for you? Are you struggling with your visa application?"
        }
        buttonText={"Book an appointment"}
        backgroundDivClass={"contact-hero-inner-div"}
      />

      <section class={"row"} style={{ padding: "50px 150px" }}>
        <div class={"col-12"}>
          <h1 class={"text-center mb-3"}>Contact Us </h1>
          <h4 class={"text-center mb-5"}>
            Please provide your information and select the service you require
          </h4>
        </div>
        <div class={"col-3"}></div>
        <div class={"col-6"}>
          <form class={"row"} style={{ fontWeight: "bold" }}>
            <div class=" col-6 mb-3">
              <label for="firstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                aria-describedby="firstNameHelp"
                required
              />
            </div>
            <div class=" col-6 mb-3">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                aria-describedby="lastNameHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="text"
                class="form-control"
                id="phoneNumber"
                aria-describedby="phoneNumberHelp"
              />
              <div id="phoneNumberHelp" class="form-text">
                We'll never share your phone number with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                aria-describedby="addressHelp"
              />
              <div id="addressHelp" class="form-text">
                We'll never share your address with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="service" class="form-label">
                Select the service you require
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected></option>
                <option value="Study">Study</option>
                <option value="Migration">Migration</option>
                <option value="Other Services">Other Services</option>
              </select>
            </div>
            <button
              type="submit"
              class="consultBtn btn col-3"
              style={{
                margin: "auto",
                fontSize: "20px",
                alignContent: "center",
                height: "50px",
              }}
            >
              <i class="bi bi-envelope-check p-2"></i> Submit
            </button>
          </form>
        </div>
        <div class={"col-3"}></div>
      </section>
      <section
        class={"row"}
        style={{
          padding: "50px 150px",
          backgroundColor: "rgba(51, 41, 220, 0.2)",
        }}
      >
        <h1 class={"text-center"}>Our Offices</h1>
        <p class={"text-center p-4"}>
          With offices in Australia and India, we are a rapidly growing company
          and are looking to expand our operations to other countries as well.
        </p>
        <div class={"col-12"}>
          <div class={"row"}>
            <div class={"col-4"}>
              <div class={"contact-location-div"}>
                <img src={au} alt="" srcset="" class={"contact-img-warp"} />
                <h2 class={"display-4"}>Australia</h2>
              </div>
            </div>
            <div class={"col-4"}>
              <div class={"contact-location-div"}>
                <img src={india} alt="" srcset="" class={"contact-img-warp"} />
                <h2 class={"display-4"}>India</h2>
              </div>
            </div>
            <div class={"col-4"}>
              <div class={"contact-location-div"}>
                <img src={au} alt="" srcset="" class={"contact-img-warp"} />
                <h2 class={"display-4"}>Australia</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
      id="location"
        class={"row"}
        style={{
          padding: "50px 150px",
          backgroundColor: "rgba(51, 41, 220, 0.2)",
        }}
      >
        <div class={"col-4"}>
          <div
            class={"p-4"}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "white",
            }}
          >
            <h2 class={"mb-4"}>Location name</h2>
            <p class={"row mt-2"}>
              <i
                class="bi bi-geo-alt-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>
                Suite 2 Level 10/90 King William St, Adelaide SA 5000, Australia
              </span>
            </p>
            <p class={"row mt-2"}>
              <i
                class="bi bi-telephone-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>+61 8 7081 5229</span>
            </p>
            <p class={"row mt-2"}>
              <i
                class="bi bi-envelope-paper-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>adelaide@edvise.com.au</span>
            </p>
          </div>
        </div>
        <div class={"col-4"}>
          <div
            class={"p-4"}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "white",
            }}
          >
            <h2 class={"mb-4"}>Location name</h2>
            <p class={"row mt-2"}>
              <i
                class="bi bi-geo-alt-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>
                Suite 2 Level 10/90 King William St, Adelaide SA 5000, Australia
              </span>
            </p>
            <p class={"row mt-2"}>
              <i
                class="bi bi-telephone-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>+61 8 7081 5229</span>
            </p>
            <p class={"row mt-2"}>
              <i
                class="bi bi-envelope-paper-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>adelaide@edvise.com.au</span>
            </p>
          </div>
        </div>
        <div class={"col-4"}>
          <div
            class={"p-4"}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "white",
            }}
          >
            <h2 class={"mb-4"}>Location name</h2>
            <p class={"row mt-2"}>
              <i
                class="bi bi-geo-alt-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>
                Suite 2 Level 10/90 King William St, Adelaide SA 5000, Australia
              </span>
            </p>
            <p class={"row mt-2"}>
              <i
                class="bi bi-telephone-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>+61 8 7081 5229</span>
            </p>
            <p class={"row mt-2"}>
              <i
                class="bi bi-envelope-paper-fill col-2"
                style={{ fontSize: "25px" }}
              ></i>{" "}
              <span class={"col-10"}>adelaide@edvise.com.au</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
