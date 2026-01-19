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
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function About() {
  const { t } = useContext(LanguageContext);
  const a = t.about;

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
        <h1>{a.title}</h1>
        <p>{a.subtitle}</p>
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
            <h4>{a.registration}</h4>
            <p><span className='react-wrapper'><SlBadge className='react' />TN-MCI-12345</span></p>
          </div>
        </div>

        {/* Right Content */}
        <div className="profile-content">
          {/* Education */}
          <section className="section">
            <h2 className="section-title">
              <div className='react-wrapper'>
                <LuGraduationCap className='react' />{a.educationTitle} </div></h2>

            <div className="timeline">
              {a.education.map((edu, index) => (
                <div className="time-item" key={index}>
                  <h3>{edu.degree}</h3>
                  <span>{edu.place}</span>
                  <p>{edu.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="section">
            <h2 className="section-title">
              <div className='react-wrapper'>
                <BsSuitcaseLg className='react' /> {a.experienceTitle} </div></h2>

            <div className="exp">
              {a.experience.map((exp, index) => (
                <div className="exp-item" key={index}>
                  <h3>{exp.role}</h3>
                  <span>{exp.place}</span>
                  {exp.time && <label>{exp.time}</label>}
                  {exp.desc && <p>{exp.desc}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="section">
            <h2 className="section-title">
              <div className='react-wrapper'>
                <SlBadge className='react' />{a.achievementsTitle}
              </div>
            </h2>

            <div className="about-badges">
              <div className="about-badge yellow"><SlBadge className='b-y' /> <div className='alignment'>{a.achievements.award}<br />
                <span>{a.achievements.awardOrg}</span></div></div>
              <div className="about-badge blue-i"><GoBook className='b-b' /><div className='alignment'> {a.achievements.research}<br />
                <span>{a.achievements.researchDesc}</span></div></div>
              <div className="about-badge green"><MdTaskAlt className='b-g' /><div className='alignment'>{a.achievements.patients}<br />
                  <span>{a.achievements.patientsDesc}</span></div></div>
              <div className="about-badge purple"><IoMdContacts className='b-v' /><div className='alignment'>{a.achievements.programs}<br />
                  <span>{a.achievements.programsDesc}</span></div></div>
            </div>
          </section>
        </div>

      </div>

      <div className="treatments-page">
        <section className="treatments-section">
          <h2 className="treatments-title">{a.treatmentsTitle}</h2>
          <p className="treatments-subtitle">
           {a.treatmentsSubtitle}
          </p>

          <div className="treatments-grid">
            {a.services.map((item, index) => (
              <div className="treatment-card" key={index}>
                <div className="icon-box">
                  <MdTaskAlt />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span className="learn-more">
                  {t.about.learnMore} →
                </span>
              </div>
            ))}
          </div>


        </section>

        {/* Clinic Section */}
        <section className="clinic-section">
          <h3 className="clinic-title">
            <div className='react-wrapper'>
              <MdOutlineInsertPhoto className='react' />{a.clinicTitle}</div>
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
            <h3 className="tips-title">{a.tipsTitle}</h3>

            <div className="tips-grid">
               {a.tips.map((tip, index) => (
                <div className="tip-card" key={index}>
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  <p>{tip}</p>
                </div>
              ))}
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
