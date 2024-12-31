import React from "react";
import "./migration.css";
import about1 from "../../assets/about-1.jpg";
import HeroSection from "../../components/HeroSection/HeroSection";
import Card from "../../components/Card/Card";
import RowCard from "../../components/RowCard/RowCard";

const Migration = () => {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <HeroSection
        image={about1}
        heading={"Study Career-promising Courses"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit a saepe voluptas, iste cum nesciunt ad exercitationem magnam culpa, doloribus recusandae velit ducimus provident earum, consequuntur aspernatur quo iusto."
        }
        buttonText={"Book an appointment"}
        backgroundDivClass={"migration-hero-inner-div"}
      />
      <section class={"row"} style={{ padding: "50px 150px" }}>
        <RowCard
          image={about1}
          reverse={false}
          title={"What you will get?"}
          para={
            "This visa allows you to stay in Australia for up to 5 years in line with your enrolment. On your student visa you must study full-time at any recognized education provider. You must work part-time during the session and full-time after the session (during the vacation period). You are required to maintain all the conditions mentioned on your visa, as a breach of any of the conditions may lead to the cancellation of your visa. 75% of the applications are assessed within one month of lodgement.?"
          }
        />

        <RowCard
          image={about1}
          reverse={true}
          title={"Why Australia?"}
          para={
            "Australia offers a world-class education, along with global recognition and quality assurance. You will receive a qualification that is recognized and sought after around the world. It is known to be a safe and stable country and allows you to achieve a perfect work-life balance. As per a survey conducted by the Australian government in 2012, an average of 85% of students rated Australia as the best destination for study and living experiences in the world. It is a melting pot of over 200 different nationalities studying, working, and living together. Australia offers state-of-the-art infrastructure, quality medical and healthcare facilities along with reasonably affordable housing and advanced transportation."
          }
        />
      </section>
      <section
        class={"row study-section-4 text-center"}
        style={{ padding: "50px 150px" }}
      >
        <h1 class={"col-12"}>Visa Options</h1>

        <Card image={about1} title={"Student Visa"}  size={"col-3"}/>
        <Card image={about1} title={"Temporary Graduate Visa"} size={"col-3"}/>
        <Card image={about1} title={"State Nominated Visas"} size={"col-3"}/>
        <Card image={about1} title={"Employer Sponsored Visas"} size={"col-3"}/>
        <Card image={about1} title={"General Skilled Visas"} size={"col-3"}/>
        <Card image={about1} title={"Employer Sponsored Visas"} size={"col-3"}/>
        <Card image={about1} title={"Partner & Family Visas"} size={"col-3"}/>
        <Card
          image={about1}
          title={"Refugee Visa (Subclass 200, 201, 203 & 204)"}
          size={"col-3"}
        />
      </section>
    </div>
  );
};

export default Migration;
