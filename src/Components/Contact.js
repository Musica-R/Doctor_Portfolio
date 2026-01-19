import "../StyleSheet/Contact.css"
import { FaWhatsapp, } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Contact() {

  const { t } = useContext(LanguageContext);
  const c = t.contactPage;

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
      <div className="contact-header">
        <h1>{c.header.title}</h1>
        <p>{c.header.subtitle}</p>
      </div>
      <div className="contact-page">

        {/* Header */}


        <div className="contact-container">

          {/* LEFT COLUMN */}
          <div className="left-column">

            {/* Booking Form */}
            <div className="contact-card booking-contact-card Contact-contact-cards">
              <div className="contact-card-title">
                <IoCalendarClearOutline className="con-ic" />
                <h3>{c.bookingForm.title}</h3>
              </div>

              <div className="form-grid">
                <div>
                  <label>{c.bookingForm.fields.patientName}</label>
                  <input placeholder={c.bookingForm.fields.patientNamePlaceholder} />
                </div>

                <div>
                  <label>{c.bookingForm.fields.age}</label>
                  <input placeholder={c.bookingForm.fields.agePlaceholder} />
                </div>

                <div>
                  <label>{c.bookingForm.fields.gender}</label>
                  <select>
                    {c.bookingForm.fields.genderOptions.map((g, i) => (
                      <option key={i}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>{c.bookingForm.fields.mobile}</label>
                  <input placeholder={c.bookingForm.fields.mobilePlaceholder} className="labels" />
                </div>
              </div>

              <label>{c.bookingForm.fields.healthIssue}</label>
              <textarea placeholder={c.bookingForm.fields.healthIssuePlaceholder} />

              <button className="primary-btn">{c.bookingForm.confirmBtn}</button>

              <p className="form-note">{c.bookingForm.note}</p>
            </div>

            {/* FAQ */}
            <div className="faq">

              <div className="contact-card-titles">
                <GoQuestion />
               <h3>{c.faq.title}</h3>
              </div>

              <div className="flex-wrapper">
                {c.faq.questions.map((q, i) => (
                  <div className="question" key={i}>
                    <h4>{q.q}</h4>
                    <p>{q.a}</p>
                  </div>
                ))}
             </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">

            {/* Contact contact-card */}
            <div className="contact-card right-col">

              <div className="right-col call">
                 <p className="small-label">{c.contactInfo.callUs}</p>
                <h3>{c.contactInfo.phone}</h3>
              </div>

              <div className="right-col call">
                <p className="small-label">{c.contactInfo.emailUs}</p>
                <p>{c.contactInfo.email}</p>
              </div>

              <button className="whatsapp-btn"  onClick={() => {
                        window.open("https://wa.me/919876543210", "_blank");
                    }}>
                <FaWhatsapp /> {c.contactInfo.whatsappBtn}
              </button>
            </div>

            {/* Location */}
            <div className="contact-card  right-col">

              <div className="contact-card-titles">
                <IoLocationOutline />
                 <h3>{c.clinicLocation.title}</h3>
              </div>

            <p className="add">{c.clinicLocation.address}</p>

              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8061708835244!2d80.24685337482069!3d13.04800641319903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266460e565b67%3A0x1be2b80f9fef95b5!2s123%2C%20Anna%20Salai%2C%20Chokkalingam%20Nagar%2C%20Guindy%2C%20Chennai%2C%20Tamil%20Nadu%20600006!5e0!3m2!1sen!2sin!4v1768364793888!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0, borderRadius: "16px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chennai Clinic Location"
                ></iframe>

              </div>

              <button className="outline-btn">{c.clinicLocation.getDirections}</button>
            </div>

            {/* OPD Timings */}
            <div className="contact-cards">

              <div className="contact-card-titles">
                <FiClock className="fonts" />
                 <h3>{c.opdTimings.title}</h3>
              </div>

              <div className="display">
                <p>
                  {c.opdTimings.monSat}
                  <span className="contact-cards-p">
                   {c.opdTimings.monSatTime}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   {c.opdTimings.time}
                  </span>
                </p>

                <p>{c.opdTimings.sun}<span className="contact-cards-p">{c.opdTimings.sunTime}</span></p>
              </div>

            </div>

            {/* Reviews */}
            <div className="contact-cards">
              <h3>{c.reviews.title}</h3>
              <div className="rev">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} />
                  ))}
                </div>

                <p className="review-text">{c.reviews.text}</p>
                <p className="review-user">{c.reviews.user}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {showArrow && (
        <div className="scroll-top-arrow" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

    </>
  )
}
