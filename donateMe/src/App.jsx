import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donate from "./donate/Donate";
import Payment from "./pay/Payment";
import Sucess from "./success/Sucess";
import Failed from "./failed/Failed";
import Register from "./register/Register";

function App() {
  const [showNav, setshowNav] = useState(true);
  return (
    <Router>
      {showNav && (
        <nav>
          <Navbar />
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="donate" element={<Donate funcNav={setshowNav} />} />
        <Route
          path="paymentportal"
          element={<Payment funcNav={setshowNav} />}
        />
        <Route path="success" element={<Sucess funcNav={setshowNav} />} />
        <Route path="register" element={<Register />} />
        <Route path="failed" element={<Failed funcNav={setshowNav} />} />
      </Routes>
      {showNav && (
        <footer>
          <Footer />
        </footer>
      )}
    </Router>
  );
}

export default App;
