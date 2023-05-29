import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/discover" />
        <Route path="/sellers" />
        <Route path="/login" />
        <Route path="/signup" />
      </Routes>
    </Router>
  );
}

export default App;
