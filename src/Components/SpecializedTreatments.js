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
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";


export default function SpecializedTreatments() {

  const icons = [
    <RiPulseLine />,
    <RiHeartLine />,
    <RiFileList3Line />,
    <RiHeartPulseLine />,
    <RiShieldCheckLine />,
    <RiStethoscopeLine />
  ];


  const { t } = useContext(LanguageContext);
  const data = t.treatments;

  return (
    <section className="treatments">
      <div className="container">
        <h2>{data.title}</h2>
        <p className="subtitle">{data.subtitle}</p>

        <div className="grid">

          {data.items.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon-tre">{icons[index]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="learn">
                <span className="span-learn">{data.learnMore}</span>
                <span><VscArrowSmallRight /></span>
              </p>
            </div>
          ))}

        </div>

        <button className="cta"> {data.viewAll} <VscArrowSmallRight /></button>
      </div>
    </section>
  );
}
