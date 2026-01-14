import Navbar from "./Pages/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
import "./StyleSheet/Stylse.css";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
