import React, { useState } from "react";
import "./ReservationFormStyles.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ErrorMessage } from "@hookform/error-message";
import FormModal from "./FormModal";

const ReservationForm = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setList((ls) => [data]);
  };
  return (
    <div>
      <main className="form-container">
        <h2>{props.title}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-element">
            <label htmlFor="branch">Select Branch *</label>
            <select
              id="Branch"
              {...register("branch", {
                required: { value: true, message: "Please Select a Branch" },
              })}
            >
              <ErrorMessage
                errors={errors}
                name="branch"
                render={({ message }) => <p>{message}</p>}
              />
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
            <ErrorMessage
              errors={errors}
              name="reservationDate"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="form-element">
            <h3>Select Time *</h3>
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
            <ErrorMessage
              errors={errors}
              name="time"
              render={({ message }) => <p>{message}</p>}
            />
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
                  min: {
                    value: 1,
                    message: "the minimum number of guests is 1",
                  },
                },
                {
                  max: {
                    value: 8,
                    message: "the maximum number of guests is 8",
                  },
                }
              )}
            ></input>
            <ErrorMessage
              errors={errors}
              name="numberOfGuests"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="form-element">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "please enter your full name",
                },
              })}
            ></input>
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">E-Mail *</label>
            <input
              id="email"
              {...register("email", {
                required: { value: true, message: "please enter your email" },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
            ></input>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
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
            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ message }) => <p>{message}</p>}
            />
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
            <ErrorMessage
              errors={errors}
              name="notice"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="reserve">
            <button
              className="reserve-btn"
              type="submit"
              disabled={!isValid}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Reserve a Table
            </button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </form>
        <DevTool control={control} />
        {/* {list.map((a) => (
        <div>
          <li>{a.email}</li>
        </div>
      ))} */}
      </main>
      {openModal && (
        <FormModal
          formData={list.map((a) => (
            <div>
              <li>Branch: {a.branch}</li>
              <li>Date: {a.reservationDate}</li>
              <li>Time: {a.time}</li>
              <li>Number of Guests: {a.numberOfGuests}</li>
              <li>Your Name: {a.name}</li>
              <li>your E-mail: {a.email}</li>
              <li>your Phone Number: {a.phoneNumber}</li>
            </div>
          ))}
          closeModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default ReservationForm;
