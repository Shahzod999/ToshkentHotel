import { Link } from "react-router-dom";
import "../assets/sass/nav.scss";
import { RiAdminFill } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { logOut, selecteduserInfo } from "../app/features/useInfoSlice";
const Navigation = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selecteduserInfo);

  console.log(userInfo, "212");

  const handleLogout = () => {
    dispatch(logOut());
  };

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
          {userInfo ? (
            <span onClick={handleLogout}>
              <GiExitDoor />
            </span>
          ) : (
            <Link to="/admin">
              <RiAdminFill />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
