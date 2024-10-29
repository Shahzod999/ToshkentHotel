import "../assets/sass/testimonials.scss";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__card">
        <h3>Testimonials</h3>
        <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
        <span> Mr. and Mrs. Baxter, UK</span>
      </div>
      <div className="testimonials__buttons">
        <button className="cursor">
          <MdOutlineKeyboardArrowLeft size={30} />
        </button>
        <button className="cursor">
          <MdOutlineKeyboardArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
