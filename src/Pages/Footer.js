import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { MdOutlineCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function Footer() {
   
  const navigate = useNavigate();


  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <div className="Nav-head">
            <div className="Nav-icon"><FaStethoscope /></div>
            <div>
              <h3 className="dr">Dr. Rajesh Kumar</h3>
              <p className="para MBBS">MBBS, MD, Fellowship in Cardiology</p>
            </div>
          </div>

          <p className="footer-desc">
            Dedicated to providing comprehensive medical care with a
            patient-first approach. Specializing in general medicine and
            cardiology.
          </p>

          <div className="footer-icon">
            <SiYoutube className="footer-iconS" />
            <FaInstagram className="footer-iconS" />
            <ImFacebook2 className="footer-iconS" />
          </div>

        </div>


        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li onClick={() => {
                        navigate("/");
                    }}>Home</li>
            <li onClick={() => {
                        navigate("/about");
                    }}>About Dr. Rajesh</li>
            <li onClick={() => {
                        navigate("/contact");
                    }}>Book Appointment</li>
            <li onClick={() => {
                        navigate("/");
                    }}>Treatments</li>
            <li onClick={() => {
                        navigate("/contact");
                    }}>Contact Us</li>
          </ul>
        </div>


        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>

          <div className="footer-contact">
            <SlLocationPin className="blue" />
            <span>
              123, Anna Salai, T. Nagar,
              Chennai - 600017, Tamil Nadu
            </span>
          </div>

          <div className="footer-contact">
            <FiPhone  className="blue" />
            <span>+91 98765 43210</span>
          </div>

          <div className="footer-contact">
            <MdOutlineMailOutline  className="blue" />
            <span>dr.rajeshkumar@healinghands.com</span>
          </div>
        </div>


        <div className="footer-col">
          <h4 className="footer-heading">OPD Timings</h4>

          <div className="timing">
            <span>Mon - Sat:</span>
            <span className="time">9:00 AM - 1:00 PM</span>
          </div>

          <div className="timing">
            <span></span>
            <span className="time">5:00 PM - 8:00 PM</span>
          </div>
           <br />
          <div className="timing">
            <span>Sunday:</span>
            <span className="time">9:00 AM - 12:00 PM</span>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <span><MdOutlineCopyright /> 2026 Dr. Rajesh Kumar. All rights reserved.</span>
        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Medical Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}
