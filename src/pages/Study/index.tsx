import React from "react";
import about1 from "../../assets/about-1.jpg";
import "./study.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Card from "../../components/Card/Card";
import ButtonCard from "../../components/ButtonCard/ButtonCard";

const Study = () => {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <HeroSection
        image={about1}
        heading={"Study Career-promising Courses"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit a saepe voluptas, iste cum nesciunt ad exercitationem magnam culpa, doloribus recusandae velit ducimus provident earum, consequuntur aspernatur quo iusto."
        }
        buttonText={"Book an appointment"}
        backgroundDivClass={""}
      />
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
                src={about1}
                class="study-img-warp"
                alt=""
                srcset=""
                style={{ maxHeight: "100%", opacity: "1" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        class={"row study-section-4 text-center"}
        style={{ padding: "50px 150px" }}
      >
        <h1 class={"col-12"}> Popular Courses</h1>

        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
        <Card image={about1} title={"Nursing"} size={"col-3"} />
      </section>
      <section
        class={"row"}
        style={{
          padding: "50px 150px",
          backgroundColor: "rgb(191, 191, 252, 0.1)",
        }}
      >
        <h1 class={"col-12 p-5"}>What you need to have</h1>
        <div class={"col-4 p-3"}>
          <div class={"row text-icon-container"}>
            <i class="bi bi-check-circle-fill col-2"></i>
            <span class={"col-10"}>Have a valid passport</span>
          </div>
        </div>
        <div class={"col-4 p-3"}>
          <div class={"row text-icon-container"}>
            <i class="bi bi-check-circle-fill col-2"></i>
            <span class={"col-10"}>English language Evidence</span>
          </div>
        </div>
        <div class={"col-4 p-3"}>
          <div class={"row text-icon-container"}>
            <i class="bi bi-check-circle-fill col-2"></i>
            <span class={"col-10"}>Partner document (If applicable)</span>
          </div>
        </div>
        <div class={"col-4 p-3"}>
          <div class={"row text-icon-container"}>
            <i class="bi bi-check-circle-fill col-2"></i>
            <span class={"col-10"}>
              Evidence you have enough money for your stay
            </span>
          </div>
        </div>
        <div class={"col-4 p-3"}>
          <div class={"row text-icon-container"}>
            <i class="bi bi-check-circle-fill col-2"></i>
            <span class={"col-10"}>Overseas student health Cover</span>
          </div>
        </div>
        <div class={"col-4 p-3"}>
          <div class={"row text-icon-container"}>
            <i class="bi bi-check-circle-fill col-2"></i>
            <span class={"col-10"}>Genuine temporary entrant (SOP)</span>
          </div>
        </div>
        <div class={"col-12 p-5"}>
          <div class={"row"}>
            <h2 class={"col-6"}>Need guidance? Let us help you.</h2>
            <button class={"col-2 btn btn-primary"}>
              {" "}
              <i class="bi bi-telephone-forward-fill p-2"></i>GET CONSULTATION
            </button>

            <h1 class={"col-4"}></h1>
          </div>
        </div>
      </section>
      <section class={"row study-section-3"} style={{ padding: "50px 150px" }}>
        <div class={"col-6 d-grid gap-2 p-5"}>
          <h1 style={{ paddingBottom: "50px" }}>Career Outcomes</h1>
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-bookmark-check-fill"}
          />
        </div>
        <div class={"col-6 d-grid gap-2 p-5"}>
          <h1 style={{ paddingBottom: "50px" }}>
            Jobs where a degree would be useful
          </h1>
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
          <ButtonCard
            text={"Early years teacher"}
            iconClass={"bi-mortarboard-fill"}
          />
        </div>
      </section>

    </div>
  );
};

export default Study;
