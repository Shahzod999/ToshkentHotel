import Navigation from "./Navigation";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiScrollToBottomLine } from "react-icons/ri";
import "../../assets/sass/header.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [headerImg, setHeaderImg] = useState("header.png");

  useEffect(() => {
    if (pathname == "/rooms") return setHeaderImg("double-room.png");
    if (pathname == "/facilities") return setHeaderImg("palm-trees.png");

    setHeaderImg("header.png");
  }, [pathname]);

  if (pathname == "/contact")
    return (
      <header style={{ background: "#14274a" }}>
        <div className="container headerWrapper">
          <Navigation />
          <div className="headerWrapper__text">
            <p className="headerContactText">CONTACT-US</p>
          </div>
        </div>
      </header>
    );

  return (
    <header style={{ backgroundImage: `linear-gradient(#00000060, #14274a5c), url(${headerImg})` }}>
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

        <Link to="/contact" className="headerWrapper__button cursor">
          <AiOutlineSchedule />
          <span>BOOK NOW</span>
        </Link>

        <a href="#main" className="scroll cursor">
          {pathname == "/" && (
            <>
              <span>Scroll</span>
              <RiScrollToBottomLine size={50} />
            </>
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
