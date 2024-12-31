import React from "react";
import "./blogCard.css";
import about1 from "../../assets/about-1.jpg";

const BlogCard = () => {
  return (
    <div class={"col-4 p-2"}>
      <div class={"blog-card"}>
        <div class={"blog-card-img-div"}>
          <img src={about1} alt="" class={"blog-img-warp"} />
        </div>
        <div class={"row blog-card-text-div p-3"}>
          <a href="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            provident vel natus maiores nam accusamus aut. Voluptatum
            perferendis earum similique fuga id ex libero, repudiandae vero
            totam ea a illo.
          </a>
          <p>
            Genuine Student Requirement update will make the impact. As per the
            meeting held last year the Australian Government gave the signs to
            review the nation’s migration system and announced that time the
            several changes will be implemented soon.
          </p>
           <a href=""><button class={"btn btn-outline-primary"}>Read More »</button></a>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
