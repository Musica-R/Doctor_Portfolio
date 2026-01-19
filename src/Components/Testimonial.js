import { FaRegStar } from "react-icons/fa";
import '../StyleSheet/Testimonial.css'
import { FiPhone } from "react-icons/fi";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function Testimonial() {

    const { t } = useContext(LanguageContext);
    const data = t.testimonial;
    const navigate = useNavigate();

    return (
        <div className='testimonial'>
            <h3 className="h3">{data.title}</h3>

            <div className="test-cont">

                {data.reviews.map((item, index) => (
                    <div className="testimonial-container" key={index}>
                        <div className="star">
                            {[...Array(5)].map((_, i) => (
                                <FaRegStar key={i} className="test-star" />
                            ))}
                        </div>

                        <p>"{item.message}"</p>

                        <div className="Nav-head">
                            <div className="Nav-icons">{item.initial}</div>
                            <div>
                                <h3 className="Test-text">{item.name}</h3>
                                <p className="paras">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

            <section className="box-test">
                <h2>{data.ctaTitle}</h2>
                <p>{data.ctaDesc}</p>
                <div className="buttonss">
                    <button className="primary-btns" onClick={() => {
                        navigate("/contact");
                    }}>{data.book}</button>
                    <button className="outline-btns" onClick={() => {
                        window.open("https://wa.me/919876543210", "_blank");
                    }}><FiPhone /> {data.whatsapp}</button>
                </div>
            </section>

        </div>
    )
} 
