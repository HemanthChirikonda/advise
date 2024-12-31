import "./about-us.css";
import about1 from "../../assets/about-1.jpg";
import ceo from "../../assets/Manpreet.png";
import about2 from "../../assets/about2.png"

export function AboutUs() {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <section class={"row section-about-1"}>
        <div class={"inner-section-warp"}></div>
        <div class={"col-6"} style={{ opacity: "0.9", padding:"0px"}}>
          <img src={about1} alt="" srcset="" class={"img-warp"} />
        </div>
        <div
          class={"col-6"}
          style={{
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor:"rgb(51, 41, 220, 0.2)",
            margin:"0px"
          }}
        >
          <h1>Edvise Education Consultants</h1>
          <h5>
            {"SERVING WHAT'S MOST IMPORTNT FOR immigrants".toLocaleUpperCase()}{" "}
          </h5>
          <div
            style={{
              borderRadius: "50%",
              border: "1px solid black",
              backgroundColor: "white",
              margin: "auto",
              height: "250px",
              width: "250px",
              padding: "20px",
              alignContent: "center",
            }}
          >
            <h6>
              We’ve served generations. Protecting what’s most important. Let us
              do the same for you.
            </h6>
            <a href="/migration">read more...</a>
          </div>
        </div>
      </section>
      <section
        class={"row"}
        style={{ paddingTop: "50px", textAlign: "center" }}
      >
        <div class="col-2"></div>
        <div class={"col-8 p-5"}>
          <h1>Educating and Migrating people for your chosen path</h1>
          <h6
            style={{
              letterSpacing: "5px",
              marginTop: "20px",
            }}
          >
            {"We've been serving people, immigrants and futures for more than 5 years.".toLocaleUpperCase()}
          </h6>
          <div class={"row p-5"}>
            <div class={"col-4 p-2"} style={{ alignContent: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "gray",
                  margin: "auto",
                }}
              ></div>
              <h2>For you and your family</h2>
              <p>We protect vehicles, property, pets and events.</p>
              <button class={"btn btn-outline-secondary"}>READ MORE</button>
            </div>
            <div class={"col-4 p-2"} style={{ alignContent: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "gray",
                  margin: "auto",
                }}
              ></div>
              <h2>For you and your family</h2>
              <p>We protect vehicles, property, pets and events.</p>
              <button class={"btn btn-outline-secondary"}>READ MORE</button>
            </div>
            <div class={"col-4 p-2"} style={{ alignContent: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "gray",
                  margin: "auto",
                }}
              ></div>
              <h2>For you and your family</h2>
              <p>We protect vehicles, property, pets and events.</p>
              <button class={"btn btn-outline-secondary"}>READ MORE</button>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </section>
      <section class={"row"} style={{ height: "65vh" }}>
        <div
          class={"col-6 p-5"}
          style={{ textAlign: "center", alignContent: "center" }}
        >
          <h1>Manpreet Kaur</h1>
          <h6>CEO</h6>
          <p style={{ textDecoration: "underline", padding: "10px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            reiciendis dolores animi quos nulla quae sapiente. Voluptate dolor
            possimus labore laudantium maiores rerum vero accusamus eligendi
            repudiandae, aliquam nobis non.
          </p>
          <div
            style={{
              backgroundColor: "rgb(31, 41, 190, 0.2)",
              textAlign: "left",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos voluptates laudantium sed odio minus. Repudiandae
              consequuntur distinctio temporibus fugiat quisquam possimus,
              inventore eligendi, facilis voluptates quasi veniam doloribus
              minus corporis.
            </p>
          </div>
          <p style={{ fontSize: "14px", paddingTop: "20px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, esse
            doloribus eos delectus laborum magni id laudantium quos itaque
            dolorem nesciunt omnis. Aspernatur exercitationem quae dignissimos
            ipsa velit quibusdam impedit.
          </p>
        </div>
        <div
          class={"col-6"}
          style={{
            backgroundColor: "rgb(31, 41, 190, 0.2)",
            alignContent: "center",
          }}
        >
          <div style={{ margin: "auto", width: "60%", height: "80%" }}>
            <img
              src={ceo}
              alt=""
              srcset=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </section>
      <section class={"row"} style={{ height: "65vh", paddingTop:"50px" }}>
        <div
          class={"col-6 p-5"}
          style={{ textAlign: "center", alignContent: "center" }}
        >
          <h1>Finding the best University for you</h1>

          <p style={{ padding: "10px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            reiciendis dolores animi quos nulla quae sapiente. Voluptate dolor
            possimus labore laudantium maiores rerum vero accusamus eligendi
            repudiandae, aliquam nobis non.
          </p>
          <div
            style={{
              backgroundColor: "rgb(31, 41, 190, 0.2)",
              textAlign: "left",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos voluptates laudantium sed odio minus. Repudiandae
              consequuntur distinctio temporibus fugiat quisquam possimus,
              inventore eligendi, facilis voluptates quasi veniam doloribus
              minus corporis.
            </p>
          </div>
          <p style={{ fontSize: "14px", paddingTop: "20px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, esse
            doloribus eos delectus laborum magni id laudantium quos itaque
            dolorem nesciunt omnis. Aspernatur exercitationem quae dignissimos
            ipsa velit quibusdam impedit.
          </p>
        </div>
        <div
          class={"col-6"}
          style={{
            backgroundColor: "rgb(31, 41, 190, 0.2)",
            alignContent: "center",
            padding:"20px"
          }}
        >
          <h3 style={{
            letterSpacing:"5px"}}>{"to find the top collage in austorila".toLocaleUpperCase()}</h3>
          <ol style={{fontSize:"15px"}}>
            <li style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit assumenda veritatis aspernatur ab tenetur voluptatum voluptatibus nesciunt repudiandae quos fugiat dicta, maxime quisquam. Reiciendis magni a vitae veniam inventore!</li>
            <li style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit assumenda veritatis aspernatur ab tenetur voluptatum voluptatibus nesciunt repudiandae quos fugiat dicta, maxime quisquam. Reiciendis magni a vitae veniam inventore!</li>
            <li style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit assumenda veritatis aspernatur ab tenetur voluptatum voluptatibus nesciunt repudiandae quos fugiat dicta, maxime quisquam. Reiciendis magni a vitae veniam inventore!</li>
            <li style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit assumenda veritatis aspernatur ab tenetur voluptatum voluptatibus nesciunt repudiandae quos fugiat dicta, maxime quisquam. Reiciendis magni a vitae veniam inventore!</li>
            <li style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit assumenda veritatis aspernatur ab tenetur voluptatum voluptatibus nesciunt repudiandae quos fugiat dicta, maxime quisquam. Reiciendis magni a vitae veniam inventore!</li>
          </ol>
        </div>
      </section>
      {/* <section class={"row"} style={{ position:"relative",height:"80vh", marginTop:"100px"}}>
      <div class={"col-6"} style={{background:"transparent"}}></div>
      <div class={"col-6"}>
        <div  style={{height:"60%", background:"white", border:"1px solid black"}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus vero ipsam consectetur soluta enim praesentium. Sint nulla distinctio quaerat incidunt exercitationem nam at, deserunt, sunt quas nobis adipisci! Blanditiis.</p>
        </div>
      </div>
      <img src={about2} alt="" srcset=""  style={{position:"absolute", objectFit:"cover", height:"100%", width:"100%"}}/>
    
      </section> */}
    </div>
  );
}
