import { FaStethoscope, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const { lang, setLang, t } = useContext(LanguageContext);
    const n = t.navbar;

    return (
        <div className="Navbar">
            <div className="Nav-head">
                <div className="Nav-icon"><FaStethoscope /></div>
                <div>
                    <h3>{n.doctorName}</h3>
                    <p className="para">{n.speciality}</p>
                </div>
            </div>



            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation */}
            <div className={`Nav-List ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>{n.home}</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>{n.about}</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{n.contact}</Link></li>
                </ul>

                <div
                    className="book"
                    onClick={() => {
                        setMenuOpen(false);
                        navigate("/contact");
                    }}>
                    <p><FiPhone /></p>
                    <p>{n.book}</p>
                </div>
                {/*Language Select */}
                <select
                    className="lang-select dark"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}>

                    <option value="en">English</option>
                    <option value="ta">தமிழ்</option>
                </select>

            </div>

        </div>
    );
}
