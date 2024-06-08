import React from "react";
import LoginPage from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register";
import NotFound from "./pages/404";

const App = () => {
  return (
    <>  
        <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </>
  );
};

export default App;
