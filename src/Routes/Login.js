import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
const Login = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <h1>Thanks for submitting your data.</h1>
      <h1>Your Reservation number is 1025.</h1>
      <Footer />
    </div>
  );
};

export default Login;
