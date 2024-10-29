import "../assets/sass/contacts.scss";
import { FaArrowRightLong } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="contacts container">
      <div className="contacts__text">
        <h2>WE ARE HERE FOR YOU</h2>
        <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.</p>
      </div>

      <div className="contacts__card">
        <div className="contacts__card__text">
          <h3>497 Evergreen Rd. Roseville, CA 95673</h3>
          <span>
            View map <FaArrowRightLong />
          </span>
          <a href="#">Phone: +44 345 678 903</a>
          <a href="#">Email: luxury_hotels@gmail.com</a>
        </div>
        <div className="contacts__card__form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" cols={30} rows={10}></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
