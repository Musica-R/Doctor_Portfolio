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
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Home() {
  const navigate = useNavigate();


  const { t, lang } = useContext(LanguageContext);

  const h = t.home;

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

     window.addEventListener("scroll", handleScroll, { passive: true });
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
          <span className="badge"><SlBadge className="badge-icon" />{h.badge}</span>

          <h1 className={`hero-title ${lang === "ta" ? "hero-title-ta" : "hero-title-en"}`}>
            {h.heroTitle1}
            <br />
            <span >{h.heroTitle2}</span>
          </h1>

          <h3>{h.doctorName}</h3>
          <p className="degree">{h.degree}</p>
          <p className="speciality">{h.speciality}</p>
          <p className="description">
            {h.description}
          </p>
          <div className="buttons">
            <button className="primary-btn" onClick={() => {
              navigate("/contact");
            }}>{t.navbar.book}</button>
            <button className="outline-btn" onClick={() => {
              window.location.href = "tel:+919876543210";
            }}><FiPhone />{h.call}</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={pic} alt="Doctor-Img" />

          <div className="stats-card">
            <strong><IoMdContacts /> 5000+</strong>
            <span>{h.patientsTreated}</span>
          </div>
        </div>
      </section>

      <section className="barsection">
        <div><h1>15+</h1><p>{h.yearsExp}</p> </div>
        <div><h1>5000+</h1><p>{h.happyPatients}</p></div>
        <div><h1>10+</h1><p>{h.researchPapers}</p> </div>
        <div><h1>50+</h1><p>{h.healthCamps}</p> </div>
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

