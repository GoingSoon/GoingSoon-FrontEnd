import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import "./App.css";

const App = () => {

  return (
    <Router>
      <div className="ResponsiveLayout">
        <div className="desktop-view">
        </div>
        <div className="mobile-view">
          <div className="mobile-content" style={{border: "1px solid #d0d0d0"}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<SignIn/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
