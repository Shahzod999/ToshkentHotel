import { FaUtensils, FaDumbbell, FaGem, FaComments } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "../assets/sass/roomCard.scss";

const RoomCard = () => {
  return (
    <div className="card">
      <img src="./room.png" alt="Hotel Room" />
      <div className="card-content">
        <div className="card-info">
          <div className="rating">
            <CiStar /> 4.8
          </div>
          <div className="price">$120</div>
        </div>
        <div className="card-title">Deluxe Double Suite</div>
        <div className="card-subtitle">La Goerte Single Room</div>
        <div className="card-icons">
          <i>
            <FaUtensils />
          </i>
          <i>
            <FaDumbbell />
          </i>
          <i>
            <FaGem />
          </i>
          <i>
            <FaComments />
          </i>
        </div>
        <button className="card-button">EXPLORE</button>
      </div>
    </div>
  );
};

export default RoomCard;
