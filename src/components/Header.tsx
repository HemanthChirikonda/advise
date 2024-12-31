import { useLocation } from "preact-iso";
// import logo from "../assets/edvise_education_consultants_white.png";
import logo from "../assets/edvise_education_consultants_colour.png";
export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <div class={"logoContainer"}>
        <img class={"header-logo"} src={logo} />
      </div>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/about-us" class={url == "/about-us" && "active"}>
          About us
        </a>
        <a href="/study" class={url == "/study" && "active"}>
          Study
        </a>
        <a href="/migration" class={url == "/migration" && "active"}>
          Migration
        </a>
        <a href="/services" class={url == "/services" && "active"}>
          Services
        </a>
        <a href="/blog" class={url == "/services" && "active"}>
          Blog
        </a>
        <a href="/contact" class={url == "/contact" && "active"}>
          Contact
        </a>
      </nav>
      <div class={"consultBtnContainer"}>
       <a href="/contact"> <button class={"consultBtn btn"}> <i class="bi bi-telephone-forward-fill p-2"></i>GET CONSULTATION</button></a>
      </div>
    </header>
  );
}
