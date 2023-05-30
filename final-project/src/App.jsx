import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Item from "./pages/Item/Item.jsx";
import Login from "./pages/Login/Login.jsx";
import Seller from "./pages/Seller/Seller.jsx";
import SignUp from "./pages/Signup/Signup.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/discover" component={Home} />
        <Route path="/sellers" component={Home} />
        <Route path="/item" component={Item} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/seller" component={Seller} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
