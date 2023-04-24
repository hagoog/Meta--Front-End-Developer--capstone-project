import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ReservationForm from "./ReservationForm";
import { Link } from "react-router-dom";
import "./FormModalStyles.css";

const FormModal = (props, closeModal) => {
  return (
    <main className="modal">
      <div className="modal-container">
        <AiFillCloseCircle
          size={40}
          onClick={() => {
            props.closeModal(false);
          }}
        />
        <h1>You are almost done!</h1>
        <h1>Please Review Your Submitted Data</h1>
        <h2>{props.formData}</h2>
        <h3>Are you sure you want to proceed ?</h3>
        <div className="buttons">
          <Link to="/Login">
            <button className="btn" type="submit">
              Confirm
            </button>
          </Link>
          <Link to="/Reservations">
            <button
              className="btn"
              onClick={() => {
                props.closeModal(false);
              }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FormModal;
