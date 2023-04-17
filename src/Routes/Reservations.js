import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ReservationHero from "../Components/ReservationHero";
import ReserveImage from "../Assets/Images/restaurant.jpg";
import ReservationForm from "../Components/ReservationForm";

const Reservations = () => {
  return (
    <div>
      <NavBar />
      <ReservationHero img={ReserveImage} title="BOOK NOW!" />
      <ReservationForm title="to book a reservation, please fill-out this form." />
      <Footer />
    </div>
  );
};

export default Reservations;
