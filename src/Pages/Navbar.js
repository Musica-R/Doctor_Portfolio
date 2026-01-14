import { FaStethoscope, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="Navbar">
            <div className="Nav-head">
                <div className="Nav-icon"><FaStethoscope /></div>
                <div>
                    <h3>Dr. Rajesh Kumar</h3>
                    <p className="para">General Physician & Cardiologist</p>
                </div>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation */}
            <div className={`Nav-List ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>

                <div
                    className="book"
                    onClick={() => {
                        setMenuOpen(false);
                        navigate("/contact");
                    }}
                >
                    <p><FiPhone /></p>
                    <p>Book Appointment</p>
                </div>

            </div>
        </div>
    );
}
