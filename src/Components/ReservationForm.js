import React from "react";
import "./ReservationFormStyles.css";

const ReservationForm = (props) => {
  return (
    <main className="form-container">
      <h2>{props.title}</h2>
    </main>
  );
};

export default ReservationForm;
