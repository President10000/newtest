import "./App.css";
import Details from "./Pages/details/Details.jsx";
import Home from "./Pages/home/Home.jsx";
import Booking from "./Pages/booking/Booking.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
