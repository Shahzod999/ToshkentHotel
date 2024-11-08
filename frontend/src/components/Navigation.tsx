import { Link } from "react-router-dom";
import "../assets/sass/nav.scss";
import { RiAdminFill } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { logOutState, selecteduserInfo } from "../app/features/useInfoSlice";
import { useLogOutMutation } from "../app/api/userApiSlice";
const Navigation = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selecteduserInfo);
  const [logOut] = useLogOutMutation();

  const handleLogout = async () => {
    try {
      await logOut({}).unwrap();
      dispatch(logOutState());
    } catch (error) {
      console.error("Logout error:", error);
    }
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
        {userInfo ? (
          <>
            <li>
              <Link to="/admin">
                <RiAdminFill />
              </Link>
            </li>
            <li>
              <span onClick={handleLogout}>
                <GiExitDoor />
              </span>
            </li>
          </>
        ) : (
          <li>
            <Link to="/auth">
              <RiAdminFill />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
