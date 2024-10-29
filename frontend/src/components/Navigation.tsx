import { Link } from "react-router-dom";
import "../assets/sass/nav.scss";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        LUXURY <span>HOTEL</span>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact-us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
