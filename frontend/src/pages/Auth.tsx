import { useState } from "react";
import "../assets/sass/auth.scss";
import { PiEyesFill } from "react-icons/pi";
import { HiEyeSlash } from "react-icons/hi2";
import { IoExit } from "react-icons/io5";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Auth = () => {
  const [variant, setVariant] = useState("login");
  const [passwordVisible, setPasswordVisible] = useState(false);


  return (
    <div className="auth">
      <form action="">
        <Link to="/" className="exit cursor">
          <IoExit />
        </Link>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type={passwordVisible ? "text" : "password"} id="password" />
        <span onClick={() => setPasswordVisible(!passwordVisible)} className="visible">
          {passwordVisible ? <PiEyesFill /> : <HiEyeSlash />}
        </span>
        <div className="variants">
          <span className={`${variant == "login" ? "actived" : ""} cursor`} onClick={() => setVariant("login")}>
            Login
          </span>
          <span className={`${variant == "register" ? "actived" : ""} cursor`} onClick={() => setVariant("register")}>
            Register
          </span>
        </div>
        <button type="submit" className="cursor">
          Enter
          <FaPersonWalkingDashedLineArrowRight size={25} />
        </button>
      </form>
    </div>
  );
};

export default Auth;
