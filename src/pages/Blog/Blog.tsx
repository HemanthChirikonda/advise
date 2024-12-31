import React from "react";
import "./blog.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import about1 from "../../assets/about-1.jpg";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blog = () => {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <HeroSection
        image={about1}
        heading={"Blog"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit a saepe voluptas, iste cum nesciunt ad exercitationem magnam culpa, doloribus recusandae velit ducimus provident earum, consequuntur aspernatur quo iusto."
        }
        buttonText={"Book an appointment"}
        backgroundDivClass={"blog-hero-inner-div"}
      />
      <section class={"row"} style={{ padding: "50px 150px" }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

        <BlogCard />
      </section>
    </div>
  );
};

export default Blog;
