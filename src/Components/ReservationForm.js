import React from "react";
import "./ReservationFormStyles.css";
import { useForm } from "react-hook-form";

const ReservationForm = (props) => {
  const form = useForm();
  const { register } = form;

  return (
    <main className="form-container">
      <h2>{props.title}</h2>
      <form>
        <div className="form-element">
          <label htmlFor="branch">Select Branch *</label>
          <select id="branch" {...register("branch")}>
            <option value="" selected disabled hidden>
              Select below
            </option>
            <option value="Southern">Southern</option>
            <option value="Eastern">Eastern</option>
            <option value="Northern">Northern</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="reservationDate">Select Date *</label>
          <input
            type="date"
            id="reservationDate"
            {...register("reservationDate")}
          ></input>
        </div>
        <div className="form-element">
          <p>Select Time *</p>
          <input
            type="radio"
            id="lunch"
            {...register("time")}
            value="lunch"
          ></input>
          <label htmlFor="lunch">Lunch</label>
          <input
            type="radio"
            id="dinner"
            {...register("time")}
            value="dinner"
          ></input>
          <label htmlFor="dinner">Dinner</label>
        </div>
        <div className="form-element">
          <label htmlFor="numberOfGuests">
            Number of Guests (between 1 and 8) *
          </label>
          <input
            type="number"
            id="numberOfGuests"
            {...register("numberOfGuests")}
            min={1}
            max={8}
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" {...register("name")}></input>
        </div>
        <div className="form-element">
          <label htmlFor="email">E-Mail *</label>
          <input type="email" id="email" {...register("email")}></input>
        </div>
        <div className="form-element">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="specialRequest">Special Request</label>
          <textarea
            id="specialRequest"
            {...register("specialRequest")}
            rows="5"
            cols="40"
          ></textarea>
        </div>
        <div className="terms">
          <input type="checkbox" id="notice" {...register("notice")}></input>
          <label htmlFor="notice">
            <b>I agree with the terms and conditions and privacy policy.</b>
          </label>
        </div>
        <div className="reserve">
          <button className="reserve-btn">Reserve a Tabel</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default ReservationForm;
