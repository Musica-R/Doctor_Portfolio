import pic from "../Assets/Frame 3.png"
import { FiPhone } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import SpecializedTreatments from "./SpecializedTreatments";
import VisitClinic from "./Address";
import { IoMdContacts } from "react-icons/io";
import Testimonial from "./Testimonial";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <span className="badge"><SlBadge className="badge-icon" />  Best Doctor Award 2023 - Tamil Nadu Medical Council</span>
          <h1> Your Health,<br /><span>Our Priority</span></h1>
          <h3>Dr. Rajesh Kumar</h3>
          <p className="degree">MBBS, MD (General Medicine), Fellowship in Cardiology</p>
          <p className="speciality">General Physician & Cardiologist</p>
          <p className="description">
            With over 15 years of experience, Dr. Rajesh provides comprehensive
            medical care with a patient-first approach.
          </p>
          <div className="buttons">
            <button className="primary-btn"  onClick={() => {
                        navigate("/contact");
                    }}>Book Appointment</button>
            <button className="outline-btn"><FiPhone /> Call Now</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={pic} alt="Doctor-Img" />

          <div className="stats-card">
            <strong><IoMdContacts /> 5000+</strong>
            <span>Patients Treated</span>
          </div>
        </div>
      </section>

      <section className="barsection">
        <div><h1>15+</h1><p>Years Experience</p> </div>
        <div><h1>5000+</h1><p>Happy Patients</p> </div>
        <div><h1>10+</h1><p>Research Papers</p> </div>
        <div><h1>50+</h1><p>Health Camps</p> </div>
      </section>

      <section>
        <SpecializedTreatments />
      </section>

      <section>
        <VisitClinic />
      </section>

      <section>
        <Testimonial />
      </section>
      {showArrow && (
        <div className="scroll-top-arrow" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

    </>
  )
}

