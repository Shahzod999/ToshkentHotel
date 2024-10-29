import "../assets/sass/footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <div className="arrow">
        <div></div>
        <div></div>
      </div>

      <div className="footer container">
        <div className="footer__text">
          <h3>
            LUXURY <span>HOTELS</span>
          </h3>

          <div className="footer__links">
            <a href="#">497 Evergreen Rd. Roseville, CA 95673</a>
            <a href="#">+44 345 678 903</a>
            <a href="#">uxury_hotels@gmail.com</a>
          </div>
        </div>

        <div className="footer__links">
          <span>About Us</span>
          <span>Contact</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="footer__links">
          <span>
            <FaFacebookSquare size={25} /> Facebook
          </span>
          <span>
            <AiFillTwitterSquare size={25} />
            Twitter
          </span>
          <span>
            <PiInstagramLogoFill size={25} />
            Instagram
          </span>
        </div>

        <div className="footer__links">
          <span>Subscribe to our newsletter</span>
          <form>
            <input type="text" placeholder="Email Address" />
            <button>OK</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
