import Navigation from "./Navigation";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiScrollToBottomLine } from "react-icons/ri";
import "../assets/sass/header.scss";

const Header = () => {
  return (
    <header>
      <div className="container headerWrapper">
        <Navigation />
        <div className="headerWrapper__text">
          <p>
            WELCOME TO
            <span>LUXURY</span>
            HOTELS
          </p>

          <span>Book your stay and enjoy Luxury redefined at the most affordable rates.</span>
        </div>

        <button className="cursor">
          <AiOutlineSchedule />
          <span>BOOK NOW</span>
        </button>

        <div className="scroll cursor">
          <span>Scroll</span>
          <RiScrollToBottomLine size={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
