import { Link } from "react-router-dom";
import "../assets/sass/nav.scss";
import { RiAdminFill } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
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
          <Link to="/facilities">Facilities</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/contact">Contact-us</Link>
        </li>
        <li>
          <Link to="/admin">
            <RiAdminFill />
            <GiExitDoor />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
