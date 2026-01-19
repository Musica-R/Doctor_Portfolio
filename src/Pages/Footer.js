import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { MdOutlineCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Footer() {

  const navigate = useNavigate();

  const { t } = useContext(LanguageContext);
  const f = t.footer;


  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <div className="Nav-head">
            <div className="Nav-icon"><FaStethoscope /></div>
            <div>
              <h3 className="dr">{f.doctorName}</h3>
              <p className="para MBBS">{f.qualification}</p>
            </div>
          </div>

          <p className="footer-desc">{f.description}</p>

          <div className="footer-icon">
            <SiYoutube className="footer-iconS" />
            <FaInstagram className="footer-iconS" />
            <ImFacebook2 className="footer-iconS" />
          </div>

        </div>


        <div className="footer-col">
          <h4 className="footer-heading">{f.quickLinks}</h4>
          <ul className="footer-links">
            <li onClick={() => { navigate("/"); }}>{f.home}</li>
            <li onClick={() => { navigate("/about"); }}>{f.about}</li>
            <li onClick={() => { navigate("/contact"); }}>{f.book}</li>
            <li onClick={() => { navigate("/"); }}>{f.treatments}</li>
            <li onClick={() => { navigate("/contact"); }}>{f.contact}</li>
          </ul>
        </div>


        <div className="footer-col">
          <h4 className="footer-heading">{f.contactTitle}</h4>

          <div className="footer-contact">
            <SlLocationPin className="blue" />
            <span>{f.address}</span>
          </div>

          <div className="footer-contact">
            <FiPhone className="blue" />
            <span>{f.phone}</span>
          </div>

          <div className="footer-contact">
            <MdOutlineMailOutline className="blue" />
            <span>{f.email}</span>
          </div>
        </div>


        <div className="footer-col">
          <h4 className="footer-heading">{f.timingsTitle}</h4>

          <div className="timing">
            <span>{f.monSat}</span>
            <span className="time">{f.morning}</span>
          </div>

          <div className="timing">
            <span></span>
            <span className="time">{f.evening}</span>
          </div>
          <br />
          <div className="timing">
            <span>{f.sunday}</span>
            <span className="time">{f.sundayTime}</span>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <span><MdOutlineCopyright />{f.copyright}</span>
        <div className="footer-policy">
          <span>{f.privacy}</span>
          <span>|</span>
          <span>{f.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
