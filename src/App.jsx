import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventDetails/:eventId" element={<EventDetails />} />
      </Routes>
    </>
  );
}

export default App;
