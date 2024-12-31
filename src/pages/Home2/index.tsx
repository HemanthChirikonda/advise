import React from "react";
import map from "../../assets/map.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import arrow from "../../assets/Black_Right_Arrow.png";
import "./styles.css";
import RowCard from "../../components/RowCard/RowCard";

export default function Home2() {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-block w-100 slide-container">
              <img src={map} class={"slide-img"} alt="..." />
              <section class={"hero-section"}>
                <h1>Edvise Education Consultants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  consectetur ipsum illo accusamus placeat laudantium sunt
                  similique dolor voluptatum totam quae sed aspernatur
                  <br />
                  incidunt, cupiditate inventore, explicabo, voluptatibus vitae
                  cumque?
                </p>
                <a href="/contact/#location">
                <button class={"consultBtnOutline"}>
                  VISIT LEARNING CENTER
                </button></a>
                
                <button class={"consultBtn-white"} data-bs-toggle="modal" data-bs-target="#bookingModal">GET CONSULTATION</button>
              </section>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-block w-100 slide-container">
              <img src={slide2} class={"slide-img"} alt="..." />
              <section class={"hero-section"}>
                <h1>Edvise Education Consultants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  consectetur ipsum illo accusamus placeat laudantium sunt
                  similique dolor voluptatum totam quae sed aspernatur
                  <br />
                  incidunt, cupiditate inventore, explicabo, voluptatibus vitae
                  cumque?
                </p>
                <button class={"consultBtnOutline"}>
                  VISIT LEARNING CENTER
                </button>
                <button class={"consultBtn-white"} data-bs-toggle="modal" data-bs-target="#bookingModal">GET CONSULTATION</button>
              </section>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-block w-100 slide-container">
              <img src={slide3} class={"slide-img"} alt="..." />
              <section class={"hero-section"}>
                <h1>Edvise Education Consultants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  consectetur ipsum illo accusamus placeat laudantium sunt
                  similique dolor voluptatum totam quae sed aspernatur
                  <br />
                  incidunt, cupiditate inventore, explicabo, voluptatibus vitae
                  cumque?
                </p>
                <button class={"consultBtnOutline"}>
                  VISIT LEARNING CENTER
                </button>
                <button class={"consultBtn-white"} data-bs-toggle="modal" data-bs-target="#bookingModal">GET CONSULTATION</button>
              </section>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <section class={"row section-2"}>
        <video
          controls
          width={400}
          height={400}
          style={{ boxShadow: "0 4px 45px rgba(0,0,0,.1)" }}
        />
      </section> */}
      <section class={"row"}>
        <div
          class={"col-12 p-5"}
          style={{ paddingTop: "50px", textAlign: "center" }}
        >
          {/* <h1 >
            "Educating the mind without educating the heart is no education at
            all." (Aristotle)
          </h1> */}
        </div>
        <div class={"col-12"}>
          <div class={"row"} style={{ padding: "50px 150px" }}>
            <div class={"col-7 p-5"}>
              <h1 class={"text-center display-5 m-3"}>What you will get?</h1>
              <p>
                Early childhood education is a field of educational theory
                related to the formal and informal teaching of children from
                birth up to the age of eight. A degree in early childhood
                studies is a good starting point if you want to pursue a career
                in working with young children, on various levels, including
                education, health care, and social services. The topics of study
                in this field focus on both cognitive and social development,
                including a variety of activities that unlock a student’s
                potential to succeed.
              </p>
              <p>
                There are a number of early education programs, including those
                that are financed by the federal government, the state
                government, or provided by private institutions. At the
                preschool level, there are different courses and methodologies,
                with each one having its pros and cons, however they are all
                generally accepted in Australia. With careful analysis and
                comparison of each methodology, you can choose what is the best
                one for you. One can pursue a variety of careers, including
                teaching, operating a day-care, and providing in-home child
                care. Many countries have advocated for better Early Childhood
                Education (ECE) standards, considering it to be one of the major
                aspects of shaping the lives of young children. Quality early
                childhood education programs are essential pillars for
                children’s better future.
              </p>
            </div>
            <div class={"col-5 p-5"}>
              <img
                src={slide3}
                class="study-img-warp"
                alt=""
                srcset=""
                style={{ maxHeight: "100%", opacity: "1" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section class={"row"}>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Study Process
        </h1>
        <div class="roadcontainer">
          <div class={"road"}></div>
          <img src={arrow} class="road-arrow" />
          <div class={"roadStop"}>
            <h1>COURSE SEARCH</h1>
          </div>
          <img src={arrow} class="road-arrow" style={{ left: "23.5%" }} />
          <div class={"roadStop"} style={{ left: "17.5%" }}>
            <h1>PREPARATION</h1>
          </div>

          <img src={arrow} class="road-arrow" style={{ left: "36.5%" }} />
          <div class={"roadStop"} style={{ left: "31%" }}>
            <h1>LODGMENT</h1>
          </div>

          <img src={arrow} class="road-arrow" style={{ left: "49.5%" }} />
          <div class={"roadStop"} style={{ left: "43.5%" }}>
            <h1>RECIVE OFFER</h1>
          </div>

          <img src={arrow} class="road-arrow" style={{ left: "61.5%" }} />
          <div class={"roadStop"} style={{ left: "56.5%" }}>
            <h1>GTE APPROVAL</h1>
          </div>

          <img src={arrow} class="road-arrow" style={{ left: "75%" }} />
          <div class={"roadStop"} style={{ left: "68.5%" }}>
            <h1>COE</h1>
          </div>

          <img src={arrow} class="road-arrow" style={{ left: "87.5%" }} />
          <div class={"roadStop"} style={{ left: "82.5%" }}>
            <h1>VISIT CAMPUS</h1>
          </div>
          <div class={"roadStop"} style={{ left: "95%" }}>
            <h1>COURSE SEARCH</h1>
          </div>
        </div>
      </section> */}
      <section class="row section-3">
        <h1>Migration Services in Australia</h1>
        <h2>Let's plan your future</h2>
        <div class={"col-12"}>
          <div class={"row"}>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">Student Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">Employer Sponsored Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">Business & Investment Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">Visit & Tourist Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">State Nominated Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">General Skilled Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">Partner & Family Visa</a>
              </div>
            </div>
            <div class={"col-6"}>
              <div class={"box-container"}>
                <a href="#">Refugee & Humanitarian Visa</a>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section class={"row"} style={{ padding: "50px 150px" }}>
     <RowCard
              title={"hello"}
              para={`There are a number of early education programs, including those
                that are financed by the federal government, the state
                government, or provided by private institutions. At the
                preschool level, there are different courses and methodologies,
                with each one having its pros and cons, however they are all
                generally accepted in Australia. With careful analysis and
                comparison of each methodology, you can choose what is the best
                one for you. One can pursue a variety of careers, including`}
              reverse={false}
              image={slide2}
            />
     </section>
      <section class="row section-4" style={{ padding: "50px 150px" }}>
        <h1>Popular Courses</h1>
        <h2>Fast-track your PR with these popular courses</h2>
        <div class={"col-12"} style={{ marginTop: "50px" }}>
          <div class={"row"}>
            <div class={"col-3"}>
              <div class="card" style="width: 18rem;">
                <img
                  src={slide2}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover", height: "150px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class={"col-3"}>
              <div class="card" style="width: 18rem;">
                <img
                  src={map}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover", height: "150px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class={"col-3"}>
              <div class="card" style="width: 18rem;">
                <img
                  src={slide2}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover", height: "150px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class={"col-3"}>
              <div class="card" style="width: 18rem;">
                <img
                  src={slide3}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover", height: "150px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class={"row section-6"}>
        <h1>More About Us</h1>
        <h1>We Have More Than 150+ Global Partners</h1>
        <div class="col-12">
          <div class="row">
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/12/121.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2024/01/torrens.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/08/download.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/3.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/08/Logo-top-banner.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2022/09/Temp-550x200-3.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/AAHE-Logo-Horizontal.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/heli_logo.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/download-1.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/download-2.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2024/01/7-1030x249-1-1024x248-1.webp" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2024/01/logoo.webp" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/3.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2023/11/heli_logo.png" />
            </div>
            <div class={"col-2 img-container"}>
              <img src="https://globalselect.com.au/wp-content/uploads/2024/01/logoo.webp" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
