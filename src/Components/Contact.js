import "../StyleSheet/Contact.css"
import {
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Contact() {

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
        <h1>Contact Us</h1>
        <p>We are here to help. Book an appointment or reach out for queries.</p>
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
                <h3>Book Appointment</h3>
              </div>

              <div className="form-grid">
                <div>
                  <label>Patient Name</label>
                  <input placeholder="Enter full name" />
                </div>

                <div>
                  <label>Age</label>
                  <input placeholder="Age" />
                </div>

                <div>
                  <label>Gender</label>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label>Mobile Number</label>
                  <input placeholder="+91 98765 43210" className="labels" />
                </div>
              </div>

              <label>Health Issue / Symptoms</label>
              <textarea placeholder="Describe your problem briefly..." />

              <button className="primary-btn">Confirm Booking</button>

              <p className="form-note">
                By booking, you agree to our privacy policy.
                Emergency? Call +91 98765 43210
              </p>
            </div>

            {/* FAQ */}
            <div className="faq">

              <div className="contact-card-titles">
                <GoQuestion />
                <h3>Frequently Asked Questions</h3>
              </div>

              <div className="flex-wrapper">

                <div className="question">
                  <h4>Do you accept insurance?</h4>
                  <p>Yes, we accept all major health insurance providers. Please bring your card.</p>
                </div>

                <div className="question">
                  <h4>Do you provide home visits?</h4>
                  <p>Yes, home visits are available for emergency cases and senior citizens within 5km radius.</p>
                </div>

                <div className="question">
                  <h4>What languages do you speak?</h4>
                  <p>Dr. Rajesh speaks Tamil, English, and Hindi.</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">

            {/* Contact contact-card */}
            <div className="contact-card right-col">

              <div className="right-col call">
                <p className="small-label">Call Us</p>
                <h3>+91 98765 43210</h3>
              </div>

              <div className="right-col call">
                <p className="small-label">Email Us</p>
                <p>dr.rajeshkumar@healinghands.com</p>
              </div>

              <button className="whatsapp-btn">
                <FaWhatsapp /> Chat on WhatsApp
              </button>
            </div>

            {/* Location */}
            <div className="contact-card  right-col">

              <div className="contact-card-titles">
                <IoLocationOutline />
                <h3>Clinic Location</h3>
              </div>

              <p className="add">
                Healing Hands Medical Center<br />
                123, Anna Salai, T. Nagar,<br />
                Chennai - 600017
              </p>

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

              <button className="outline-btn">Get Directions</button>
            </div>

            {/* OPD Timings */}
            <div className="contact-cards">

              <div className="contact-card-titles">
                <FiClock className="fonts" />
                <h3>OPD Timings</h3>
              </div>

              <div className="display">
                <p>
                  Mon – Sat
                  <span className="contact-cards-p">
                    9:00 AM – 1:00 PM <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    5:00 PM – 8:00 PM
                  </span>
                </p>

                <p>Sunday  <span className="contact-cards-p">9:00 AM – 12:00 PM </span></p>
              </div>

            </div>

            {/* Reviews */}
            <div className="contact-cards">
              <h3>Patient Reviews</h3>

              <div className="rev">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} />
                  ))}
                </div>

                <p className="review-text">
                  “Very professional and friendly. The clinic is clean and well-equipped.”
                </p>

                <p className="review-user">Priya M. – Patient</p>
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
