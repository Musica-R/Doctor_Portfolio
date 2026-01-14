import "../StyleSheet/treatment.css";
import {
  RiPulseLine,
  RiHeartLine,
  RiFileList3Line,
  RiHeartPulseLine,
  RiShieldCheckLine,
  RiStethoscopeLine,
} from "react-icons/ri";
import { VscArrowSmallRight } from "react-icons/vsc";

export default function SpecializedTreatments() {
  return (
    <section className="treatments">
      <div className="container">
        <h2>Specialized Treatments</h2>
        <p className="subtitle">
          Comprehensive care for your family with advanced medical facilities and expert diagnosis.
        </p>

        <div className="grid">

          <div className="card">
            <div className="icon-tre"><RiPulseLine /></div>
            <h3>General Medicine</h3>
            <p>Complete health checkups, fever treatment, and management of common illnesses.</p>
            <p className="learn"><span className="span-learn">Learn more </span><span><VscArrowSmallRight /></span></p>
          </div>

          <div className="card">
            <div className="icon-tre"><RiHeartLine /></div>
            <h3>Cardiac Care & ECG</h3>
            <p>Expert heart care, ECG monitoring, and preventive cardiology services.</p>
            <p className="learn"><span className="span-learn">Learn more </span><span><VscArrowSmallRight /></span></p>
          </div>

          <div className="card">
            <div className="icon-tre"><RiFileList3Line /></div>
            <h3>Diabetes Management</h3>
            <p>Comprehensive diabetes care, diet counseling, and sugar level monitoring.</p>
            <p className="learn"><span className="span-learn">Learn more </span><span><VscArrowSmallRight /></span></p>
          </div>

          <div className="card">
            <div className="icon-tre"><RiHeartPulseLine /></div>
            <h3>Hypertension Treatment</h3>
            <p>Blood pressure management and lifestyle modification plans.</p>
            <p className="learn"><span className="span-learn">Learn more </span><span><VscArrowSmallRight /></span></p>
          </div>

          <div className="card">
            <div className="icon-tre"><RiShieldCheckLine /></div>
            <h3>Preventive Screening</h3>
            <p>Full body checkups to detect potential health issues early.</p>
            <p className="learn"><span className="span-learn">Learn more </span><span><VscArrowSmallRight /></span></p>
          </div>

          <div className="card">
            <div className="icon-tre"><RiStethoscopeLine /></div>
            <h3>Respiratory Care</h3>
            <p>Treatment for asthma, allergies, and other respiratory conditions.</p>
            <p className="learn"><span className="span-learn">Learn more </span><span><VscArrowSmallRight /></span></p>
          </div>
        </div>

        <button className="cta">View All Services <VscArrowSmallRight /></button>
      </div>
    </section>
  );
}
