import "./testimonial.css";


const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section id="testimonials_section">
      <div className={"container"} style={{ paddingTop: "50px" }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 m-auto">
            <div>
              <h2 className="mb-4">Our Clients Testimonials</h2>

              <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item" data-bs-interval="10000">
                    <div className="container carousel-item-style">
                      <h1>Heading 1</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique debitis suscipit at dolorum, obcaecati tempore
                        odio culpa aut laborum quos velit necessitatibus
                        perferendis asperiores doloremque non exercitationem
                        eveniet natus illum!
                      </p>
                      <div className="btn btn-primary">Button1</div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <div className="container carousel-item-style">
                      <h1>Heading 2</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique debitis suscipit at dolorum, obcaecati tempore
                        odio culpa aut laborum quos velit necessitatibus
                        perferendis asperiores doloremque non exercitationem
                        eveniet natus illum!
                      </p>
                      <div className="btn btn-primary">Button1</div>
                    </div>
                  </div>
                  <div class="carousel-item active">
                    <div className="container carousel-item-style">
                      <h1>Heading 3</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique debitis suscipit at dolorum, obcaecati tempore
                        odio culpa aut laborum quos velit necessitatibus
                        perferendis asperiores doloremque non exercitationem
                        eveniet natus illum!
                      </p>
                      <div className="btn btn-primary">Button1</div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
