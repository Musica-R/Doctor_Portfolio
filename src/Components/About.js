import '../StyleSheet/About.css'
import { LuGraduationCap } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import image from "../Assets/Image.png"
import { MdTaskAlt } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";


const services = [
  {
    title: "General Medicine",
    desc: "General Medicine & Health Checkups",
  },
  {
    title: "Diabetes Management",
    desc: "Diabetes Management & Care",
  },
  {
    title: "Hypertension Treatment",
    desc: "Hypertension Treatment",
  },
  {
    title: "Cardiac Care",
    desc: "Cardiac Care & ECG",
  },
  {
    title: "Preventive Health Screening",
    desc: "Preventive Health Screening",
  },
  {
    title: "Lifestyle Disease Management",
    desc: "Lifestyle Disease Management",
  },
  {
    title: "Fever",
    desc: "Fever & Infection Treatment",
  },
  {
    title: "Respiratory Care",
    desc: "Respiratory Care",
  },
];

export default function About() {

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

      <div className='About-section'>
        <h1>About Dr. Rajesh Kumar</h1>
        <p>A journey of 15+ years dedicated to healing hearts and improving lives through compassionate medical care.</p>
      </div>

      <div className="profile-wrapper">
        {/* Left Card */}
        <div className="profile-card">
          <img
            src={image}
            alt="Doctor"
            className="profile-img"
          />
          <div className="reg-box">
            <h4>Registration</h4>
            <p><div className='react-wrapper'><SlBadge className='react' />TN-MCI-12345</div></p>
          </div>
        </div>

        {/* Right Content */}
        <div className="profile-content">
          {/* Education */}
          <section className="section">
            <h2 className="section-title">
              <div className='react-wrapper'>
                <LuGraduationCap className='react' />Education & Qualifications </div></h2>

            <div className="timeline">
              <div className="time-item">
                <h3>Fellowship in Cardiology</h3>
                <span>Apollo Hospitals, Chennai (2010)</span>
                <p>Specialized training in non-invasive cardiology and cardiac care.</p>
              </div>

              <div className="time-item">
                <h3>MD (General Medicine)</h3>
                <span>AIIMS, New Delhi (2008)</span>
                <p>Gold medalist. Focused on internal medicine and diagnostics.</p>
              </div>

              <div className="time-item">
                <h3>MBBS</h3>
                <span>Madras Medical College, Chennai (2005)</span>
                <p>Graduated with distinction.</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="section">
            <h2 className="section-title">
              <div className='react-wrapper'>
                <BsSuitcaseLg className='react' /> Professional Experience </div></h2>

            <div className="exp">
              <div className="exp-item">
                <h3>Founder & Chief Physician</h3>
                <span>Healing Hands Medical Center</span>
                <label>2018 - Present</label>
                <p>Leading a team of specialists providing comprehensive care.</p>
              </div>

              <div className="exp-item">
                <h3>Visiting Consultant</h3>
                <span>Fortis Malar Hospital</span>
                <label>2015 - 2018</label>
              </div>

              <div className="exp-item">
                <h3>Senior Consultant</h3>
                <span>Apollo Hospitals</span>
                <label>2010 - 2015</label>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="section">
            <h2 className="section-title">
              <div className='react-wrapper'>
                <SlBadge className='react' />Achievements & Awards
              </div>
            </h2>

            <div className="about-badges">
              <div className="about-badge yellow"><SlBadge className='b-y' /> <div className='alignment'>Best Doctor Award 2023<br /><span>Tamil Nadu Medical Council</span></div></div>
              <div className="about-badge blue-i"><GoBook className='b-b' /><div className='alignment'>10+ Research Papers<br /><span>Published in cardiology journals</span></div></div>
              <div className="about-badge green"><MdTaskAlt className='b-g' /><div className='alignment'> 5000+ Patients<br /><span>Successfully treated</span></div></div>
              <div className="about-badge purple"><IoMdContacts className='b-v' /><div className='alignment'>50+ Schools<br /><span>Health awareness programs</span></div></div>
            </div>
          </section>
        </div>

      </div>

      <div className="treatments-page">
        <section className="treatments-section">
          <h2 className="treatments-title">Treatments & Services</h2>
          <p className="treatments-subtitle">
            Comprehensive medical solutions for your well-being
          </p>

          <div className="treatments-grid">
            {services.map((item, index) => (
              <div className="treatment-card" key={index}>
                <div className="icon-box">
                  <MdTaskAlt />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span className="learn-more">
                  Learn more →
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Clinic Section */}
        <section className="clinic-section">
          <h3 className="clinic-title">
            <div className='react-wrapper'>
              <MdOutlineInsertPhoto className='react' /> Clinic & Facilities </div>
          </h3>

          <div className="clinic-grid">
            <div className="clinic-img"></div>
            <div className="clinic-img"></div>
            <div className="clinic-img"></div>
            <div className="clinic-img"></div>
          </div>
        </section>

        {/* Tips Section */}
        <div className='wrap'>
          <section className="tips-section">
            <h3 className="tips-title">Doctor's Health Tips</h3>

            <div className="tips-grid">
              <div className="tip-card">
                <span>01</span>
                <p>Walk 30 minutes daily for heart health</p>
              </div>
              <div className="tip-card">
                <span>02</span>
                <p>Check blood pressure regularly after 40</p>
              </div>
              <div className="tip-card">
                <span>03</span>
                <p>Avoid processed foods and excess salt</p>
              </div>
              <div className="tip-card">
                <span>04</span>
                <p>Stay hydrated - drink 8 glasses of water daily</p>
              </div>
              <div className="tip-card">
                <span>05</span>
                <p>Get annual health checkups</p>
              </div>
            </div>
          </section>
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
