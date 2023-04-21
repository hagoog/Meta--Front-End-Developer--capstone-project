import React from "react";
import "./ReservationFormStyles.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const ReservationForm = (props) => {
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <main className="form-container">
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="branch">Select Branch *</label>
          <select
            id="branch"
            {...register("branch", {
              required: { value: true, message: "Please Select a Branch" },
            })}
          >
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
            {...register(
              "reservationDate",
              {
                required: {
                  value: true,
                  message: "Please Select a reservation date",
                },
              },
              { valueAsDate: true }
            )}
          ></input>
        </div>
        <div className="form-element">
          <p>Select Time *</p>
          <input
            type="radio"
            id="lunch"
            {...register("time", {
              required: {
                value: true,
                message: "Please specify dinner or lunch",
              },
            })}
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
            min={1}
            max={8}
            {...register(
              "numberOfGuests",
              {
                required: {
                  value: true,
                  message: "please specify number of guests between 1 and 8",
                },
              },
              {
                min: { value: 1, message: "the minimum number of guests is 1" },
              },
              {
                max: { value: 8, message: "the maximum number of guests is 8" },
              }
            )}
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: { value: true, message: "please enter your full name" },
            })}
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="email">E-Mail *</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: { value: true, message: "please enter your email" },
            })}
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "please enter your phone number",
              },
            })}
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
          <input
            type="checkbox"
            id="notice"
            {...register("notice", {
              required: {
                value: true,
                message: "please review & approve our policy and terms",
              },
            })}
          ></input>
          <label htmlFor="notice">
            <b>I agree with the terms and conditions and privacy policy.</b>
          </label>
        </div>
        <div className="reserve">
          <button className="reserve-btn" type="submit">
            Reserve a Table
          </button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </form>
      <DevTool control={control} />
    </main>
  );
};

export default ReservationForm;
