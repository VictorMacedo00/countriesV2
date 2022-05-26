import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Countrie from "./components/Countrie/Countrie";
import Header from "./components/Header/Header";
import Homepage from "./components/Hompage/Homepage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/countrie/:name" element={<Countrie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
