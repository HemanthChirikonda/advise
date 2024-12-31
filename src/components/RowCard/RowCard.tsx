import React from "react";
import about1 from "../../assets/about-1.jpg";
import "./rowcard.css"

const RowCard = ({ title, para, image, reverse }) => {
  return (
    <div class={"col-12 row-card"}>
      <div class={"row"}>
        {reverse ? (
          <div class={"col-8 p-5"}>
            <h1 class={"row-card-title"}>{title}</h1>
            <p class={"row-card-p"}>
              {para}
            </p>
          </div>
        ) : (
          <div class={"col-4"}>
            <img src={image} alt="" class={"migration-img-warp"} />
          </div>
        )}
        {reverse ? (
          <div class={"col-4"}>
            <img src={image} alt="" class={"migration-img-warp"} />
          </div>
        ) : (
          <div class={"col-8 p-5"}>
            <h1 class={"row-card-title"}>{title}</h1>
            <p class={"row-card-p"}>
           {para}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RowCard;
