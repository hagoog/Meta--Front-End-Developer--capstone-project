import React from "react";
import "./ReservationHeroStyles.css";

const ReservationHero = (props) => {
  return (
    <main className="reservation-hero">
      <img src={props.img} alt="restaurant" />
      <h1>{props.title}</h1>
    </main>
  );
};

export default ReservationHero;
