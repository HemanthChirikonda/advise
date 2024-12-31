import preactLogo from "../../assets/preact.svg";
import "./style.css";
import backgroundImage from "../../assets/image1.png";
import Testimonials from "../../components/Testimonial/Testimonials";

export function Home() {
  return (
    <div class="home">
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          zIndex: "-1",
        }}
      />
      <section class={"hero-section"}>
        <h1>Edvise Education Consultants</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          consectetur ipsum illo accusamus placeat laudantium sunt similique
          dolor voluptatum totam quae sed aspernatur
          <br />
          incidunt, cupiditate inventore, explicabo, voluptatibus vitae cumque?
        </p>
        <button class={"consultBtnOutline"}>VISIT LEARNING CENTER</button>
        <button class={"consultBtn"} data-bs-toggle="modal" data-bs-target="#bookingModal">GET CONSULTATION</button>
      </section>
      <section class={"section-2 row"}>
        <video
          controls
          width={400}
          height={400}
          style={{ boxShadow: "0 4px 45px rgba(0,0,0,.1)" }}
        />
      </section>
      <section class="row section-3">
        <div
          class="col-12"
          style={{
            textAlign: "center",
            fontFamily: "linotype-didot-heading",
            paddingBottom: "50px",
          }}
        >
          <h1>Why Choose US ?</h1>
          <div>
            <p>
              Edvise Education Consultants, founded in July 2023, is an
              education consultancy based in Adelaide. We bring years of
              experience and expertise in international student recruitment.
              With a client base encompassing 25 different nationalities, we
              take pride in fostering a culturally inclusive environment that
              knows no barriers. Our commitment is to serve the global
              community, reaching out to international students and providing
              them with ethical and genuine guidance. Edvise Education is
              dedicated to empowering students worldwide and shaping the future
              of education.
            </p>
          </div>
        </div>
        <div className={"col-3 resource"}>
          <h2>Quick Learning</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias, aperiam doloribus aut sapiente praesentium eos iste dicta
            amet itaque!
          </p>
        </div>
        <div className={"col-3 resource"}>
          <h2>All Time Support</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias, aperiam doloribus aut sapiente praesentium eos iste dicta
            amet itaque!
          </p>
        </div>
        <div className={"col-3 resource"}>
          <h2>Certification</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias, aperiam doloribus aut sapiente praesentium eos iste dicta
            amet itaque!
          </p>
        </div>
      </section>
      <section class="section-4 row"></section>
      <Testimonials />
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
