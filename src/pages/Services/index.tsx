import about1 from "../../assets/about-1.jpg";
import Card from "../../components/Card/Card";
import HeroSection from "../../components/HeroSection/HeroSection";
import RowCard from "../../components/RowCard/RowCard";
import "./services.css";

export function Services() {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <HeroSection
        image={about1}
        heading={"Study Career-promising Courses"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit a saepe voluptas, iste cum nesciunt ad exercitationem magnam culpa, doloribus recusandae velit ducimus provident earum, consequuntur aspernatur quo iusto."
        }
        buttonText={"Book an appointment"}
        backgroundDivClass={"service-hero-inner-div"}
      />
      <section class={"row text-center"} style={{ padding: "50px 150px" }}>
        <h1 class={"col-12"}>Our Other Services</h1>

        <Card image={about1} title={"Health Insurance"} size={"col-4"} />
        <Card
          image={about1}
          title={"Professional Year Program"}
          size={"col-4"}
        />
        <Card
          image={about1}
          title={"English Proficiency Training"}
          size={"col-4"}
        />
      </section>
      <section class={"row"} style={{ padding: "50px 150px" }}>
        <div class={"col-12"}>
          <div class={"row"}>
            <div class={"col-12"}>
              <h2>What should a student health insurance cover?</h2>
              <p>
                Depending on your country of residence and the school you want
                to attend, there may be requirements for student health
                insurance. In light of the foregoing, the following is a
                generalised list of what most foreign medical insurance policies
                cover:
              </p>
            </div>
            <div class={"col-6 "}>
              <img src={about1} alt="" srcset="" class={"service-img-warp"} />
            </div>
            <div class={"col-6"} style={{ fontSize: "20px" }}>
              <ul>
                <li class={"p-3"}>Immediate hospital care</li>
                <li class={"p-3"}>Emergency services and ambulances</li>
                <li class={"p-3"}>Emergency repatriation and evacuation</li>
                <li class={"p-3"}>Physician/doctor appointments</li>
                <li class={"p-3"}>Dental emergency treatment</li>
                <li class={"p-3"}>X-rays and tests</li>
              </ul>
              <p>
                Before purchasing a coverage, pre-existing medical illnesses
                like diabetes or epilepsy must be disclosed. If you fail to
                disclose certain illnesses, your health insurance may become
                void, and the insurer may decline to cover any treatments
                received while you are studying abroad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class={"row"} style={{ padding: "50px 150px", backgroundColor:"rgba(51, 41, 220, 0.2)" }}>
        <div class={"col-12 ml-5 text-service-div"}>
          <h2>English Language Proficiency Test Training</h2>
          <h4>What is English Language Proficiency Test?</h4>
          <p>
            English Language Proficiency is one of the most important criteria
            for international students and migrants looking to pursue their
            studies in or migrate to an English-speaking country like Australia.
          </p>
          <p>
            In Australia, there are three main tests that are widely accepted
            across all institutes for general studies, PTE (Pearson Test of
            English), TOEFL (Test of English as a Foreign Language), and IELTS
            (International English Language Testing System). For students who
            are looking to pursue their education in the healthcare industry,
            there is a more specific English language test that assesses the
            language and communication skills of healthcare professionals, known
            as OET (Occupational English Test) that is accepted by the
            healthcare institutes that assesses the language and communication
            skills of healthcare professionals.
          </p>
        </div>
      </section>
      <section class={"row"} style={{ padding: "50px 150px" }}>
        <RowCard
          title={"What is a Professional Year Program?"}
          para={
            "A Professional Year Program or more commonly known as PYP acts as a bridge between an international student’s full-time study and professional employment. It is a program that takes the student out of the classroom into real life and prepares them for their professional career in Australia. It is a 12-month program that is currently being offered to graduates of Accounting, IT, and Engineering."
          }
          image={about1}
          reverse={true}
        />
      </section>
    </div>
  );
}
