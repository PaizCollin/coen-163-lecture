import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Item from "./pages/Item/Item.jsx";
import Login from "./pages/Login/Login.jsx";
import Seller from "./pages/Seller/Seller.jsx";
import SignUp from "./pages/Signup/Signup.jsx";
import initAOS from "./aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initAOS(); // Initialize AOS animation
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Home />} />
        <Route path="/sellers" element={<Home />} />
        <Route path="/item" element={<Item />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
