import {browserRouter, Route, Routes} from "react-router-dom"
import "./index.css"
import './App.css';
import Home from "./Routes/Home"
import About from "./Routes/About"
import Menu from "./Routes/Menu"
import Login from "./Routes/Login"
import OrderOnline from "./Routes/OrderOnline"
import Reservations from "./Routes/Reservations"


function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element= {<Home />}/>
      <Route path= "/About" element= {<About />}/>
      <Route path= "/Menu" element= {<Menu />}/>
      <Route path= "/Reservations" element= {<Reservations />}/>
      <Route path= "/OrderOnline" element= {<OrderOnline />}/>
      <Route path= "/Login" element= {<Login />}/>
    </Routes>
    </>

  );
}

export default App;
