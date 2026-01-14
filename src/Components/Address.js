import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import "../StyleSheet/address.css";


export default function VisitClinic() {
  return (
    <section className="visit-clinic">
      <div className="visit-container">


        <div className="clinic-info">
          <div>
            <h2>Visit Our Clinic</h2>
            <h4 className="clinic-name">Healing Hands Medical Center</h4>
          </div>

          <div className="info-item">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <h5>Address</h5>
              <p className="address">
                123, Anna Salai, T. Nagar, <br />
                Chennai - 600017, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">
              <FaClock />
            </span>
            <div>
              <h5>OPD Timings</h5>
              <p className="address">Mon-Sat: 9:00 AM - 1:00 PM, 5:00 PM - 8:00 PM</p>
              <p className="address">Sunday: 9:00 AM - 12:00 PM</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <div>
              <h5>Contact</h5>
              <p className="address">+91 98765 43210</p>
              <p className="emergency">Emergency: +91 98765 43211</p>
            </div>
          </div>
        </div>


        <div className="clinic-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8061708835244!2d80.24685337482069!3d13.04800641319903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266460e565b67%3A0x1be2b80f9fef95b5!2s123%2C%20Anna%20Salai%2C%20Chokkalingam%20Nagar%2C%20Guindy%2C%20Chennai%2C%20Tamil%20Nadu%20600006!5e0!3m2!1sen!2sin!4v1768364793888!5m2!1sen!2sin"
            width="100%"
            height="300px"
            style={{ border: 0, borderRadius: "16px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chennai Clinic Location"
          ></iframe>

        </div>

      </div>
    </section>
  );
}
