import React from 'react'
import "./card.css"

 const Card = ({image, title, size}) => {
  return (
    <div class={ size+" p-3"}>
    <div class={"course-card animation-card-grow"}>
      <div class={"course-card-div"}>
        <img
          src={image}
          alt=""
          srcset=""
          class={"study-img-warp"}
          style={{ opacity: "1" }}
        />
      </div>
      <h5 class={"display-7"}>{title}</h5>
    </div>
  </div>
  )
}


export default Card;