import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/index";
import Navbar from "../components/navbar/index";
import HomePage from "../pages/homepage/index";
import LoginPage from "../pages/login/index";
import SignupPage from "../pages/signup/index";

const Routers = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default Routers;
