import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

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
