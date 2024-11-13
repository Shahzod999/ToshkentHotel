import { Link } from "react-router-dom";
import "./errorPage.scss";

const Error = () => {
  return (
    <div className="errorPage">
      <h2>404</h2>
      <span>Oops? page not found</span>
      <Link to="/" className="errorPage__link">Go back</Link>
    </div>
  );
};

export default Error;
