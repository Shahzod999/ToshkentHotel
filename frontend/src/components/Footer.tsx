import "../assets/sass/footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useAppDispatch } from "../app/hooks/hooks";
import { succesToast } from "../app/features/toastSlice";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(succesToast("Email Sended"));
  };

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
            <Link to="/contact">Q93G+W85, Andijon, Andijon Viloyati, Узбекистан</Link>
            <a href="tel:+998916101717">+998 91 6101717</a>
            <a href="#">uxury_hotels@gmail.com</a>
          </div>
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
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
