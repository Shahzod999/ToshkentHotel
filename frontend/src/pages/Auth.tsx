import { useState } from "react";
import "../assets/sass/auth.scss";
import { PiEyesFill } from "react-icons/pi";
import { HiEyeSlash } from "react-icons/hi2";
import { IoExit } from "react-icons/io5";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginUserMutation, useUserRegisterMutation } from "../app/api/userApiSlice";
import { ErrorState, UserState } from "../app/types/UserTypes";
import { addUserInfo } from "../app/features/useInfoSlice";
import { useAppDispatch } from "../app/hooks/hooks";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [variant, setVariant] = useState("login");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [totalError, setTotalError] = useState("");
  const { register, handleSubmit } = useForm();
  const [userRegister, { isLoading: registerLoading }] = useUserRegisterMutation();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();

  const onSubmit = async (data: UserState) => {
    const { email, password, confirmPassword } = data;
    if (!email || !password) return setTotalError("Заполните все поля");
    if (password.length <= 4) return setTotalError("Пароль должен быть больше 4");
    let res;
    try {
      if (variant == "register") {
        if (!confirmPassword) return setTotalError("Заполните все поля");
        if (password !== confirmPassword) return setTotalError("Пароли не совпали");
        res = await userRegister(data).unwrap();
      } else if (variant == "login") {
        res = await loginUser(data).unwrap();
      }
      dispatch(addUserInfo(res?.email));
      setTotalError("");
      navigate("/");
      console.clear();
    } catch (error) {
      const errorMessage = (error as ErrorState)?.data?.message || "An unknown error occurred";
      setTotalError(errorMessage);
    }
  };

  return (
    <div className="auth">
      <div className="variants">
        <span className={`${variant == "login" ? "actived" : ""} cursor`} onClick={() => setVariant("login")}>
          Login
        </span>
        <span className={`${variant == "register" ? "actived" : ""} cursor`} onClick={() => setVariant("register")}>
          Register
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Link to="/" className="exit cursor">
          <IoExit />
        </Link>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type={passwordVisible ? "text" : "password"} id="password" {...register("password")} />

        {variant == "register" && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type={passwordVisible ? "text" : "password"} id="confirmPassword" {...register("confirmPassword")} />
          </>
        )}
        <span className="errorText">{totalError}</span>

        <span onClick={() => setPasswordVisible(!passwordVisible)} className="visible">
          {passwordVisible ? <PiEyesFill /> : <HiEyeSlash />}
        </span>

        <button type="submit" className="cursor" disabled={registerLoading || loginLoading}>
          <span>{variant}</span>
          <FaPersonWalkingDashedLineArrowRight size={25} />
        </button>
      </form>
    </div>
  );
};

export default Auth;
