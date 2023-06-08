import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Item from "./pages/Item/Item.jsx";
import Login from "./pages/Login/Login.jsx";
import Sellers from "./pages/Seller/Seller.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import initAOS from "./aos";
import { useEffect } from "react";
import Error from "./pages/Error/Error.jsx";
import Discover from "./pages/Discover/Discover.jsx";
import { useState } from "react";

function App() {
  useEffect(() => {
    initAOS(); // Initialize AOS animation
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  console.log(loggedIn);

  return (
    <Router>
      <Header loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/item/:itemId" element={<Item />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/seller/:sellerId" element={<Sellers />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer loggedIn={loggedIn} />
    </Router>
  );
}

export default App;
