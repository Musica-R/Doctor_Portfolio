import { FaRegStar } from "react-icons/fa";
import '../StyleSheet/Testimonial.css'
import { FiPhone } from "react-icons/fi";

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <h3 className="h3">Patient Stories</h3>

            <div className="test-cont">

                <div className="testimonial-container">
                    <div className="star"><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /> </div>
                    <p>"Dr. Rajesh is very caring and explains everything clearly. My diabetes is now under control thanks to his treatment."</p>
                    <div className="Nav-head">
                        <div className="Nav-icons">L</div>
                        <div>
                            <h3 className="Test-text">Lakshmi S.</h3>
                            <p className="paras">Patient</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-container">
                    <div className="star"><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /> </div>
                    <p>"Excellent doctor! He diagnosed my heart
                        condition early and saved my life. Highly recommended."</p>
                    <div className="Nav-head">
                        <div className="Nav-icons">v</div>
                        <div>
                            <h3 className="Test-text">Venkat R.</h3>
                            <p className="paras">Patient</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-container">
                    <div className="star"><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /><FaRegStar className="test-star" /> </div>
                    <p>"Very professional and friendly. The clinic is
                        clean and well-equipped. Best doctor in Chennai!"</p>
                    <div className="Nav-head">
                        <div className="Nav-icons">P</div>
                        <div>
                            <h3 className="Test-text">Priya M.</h3>
                            <p className="paras">Patient</p>
                        </div>
                    </div>
                </div>

            </div>

            <section className="box-test">
                <h2>Ready to prioritize your health?</h2>
                <p>Book an appointment today for a comprehensive checkup. We are here to help you live a healthier life.</p>
                <div className="buttonss">
                    <button className="primary-btns">Book Appointment</button>
                    <button className="outline-btns"><FiPhone />  WhatsApp Booking</button>
                </div>
            </section>

        </div>
    )
} 
