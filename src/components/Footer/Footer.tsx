import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about",
  },

  {
    display: "Services",
    url: "/services",
  },
  {
    display: "Contact US",
    url: "/contact",
  }
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="row footer p-3">
      <div className={"col-12"}  >
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4" >
            <h2 className=" d-flex align-items-center gap-1">
            <div className="logo">
            {/* <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners.
              
            </h2> */}
            <img src={""} class="d-flex align-items-center gap-1" alt="" style={{width:"100px"}}/>
          </div>
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Explore</h6>
            <div className="list-group link__list">
              {footerQuickLinks.map((item, index) => (
                <div key={index} className=" list-group-item border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4" >
            <h6 className="fw-bold">Information</h6>
            <div className="list-group link__list">
              {footerInfoLinks.map((item, index) => (
                <div key={index} className=" list-group-item border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: -----------------------</p>
            <p> Phone: ---------------------</p>
            <p>Email: ----------------------</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
