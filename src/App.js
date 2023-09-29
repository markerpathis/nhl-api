import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Schedule />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
