import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Item from "./pages/Item/Item.jsx";
import Login from "./pages/Login/Login.jsx";
import Sellers from "./pages/Sellers/Sellers.jsx";
import SignUp from "./pages/Signup/Signup.jsx";
import initAOS from "./aos";
import { useEffect } from "react";
import Error from "./pages/Error/Error.jsx";
import Discover from "./pages/Discover/Discover.jsx";

function App() {
  useEffect(() => {
    initAOS(); // Initialize AOS animation
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/item/:itemId" element={<Item />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
