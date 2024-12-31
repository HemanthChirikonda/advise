import React from 'react'
import "./buttonCard.css"

 const ButtonCard = ({text, iconClass}) => {
  return (
    <button
    class={"btn btn-outline-primary p-2 m-1 animation-color-blink"}
    style={{ fontSize: "20px", textAlign: "left" }}
  >
    {" "}
    <i class={"bi "+ iconClass +" p-4"}></i>{" "}
    <span >{text}</span>
  </button>
  )
}

export default ButtonCard;