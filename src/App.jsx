import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import BookingFlow from "./BookingFlow";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book" element={<BookingFlow />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
