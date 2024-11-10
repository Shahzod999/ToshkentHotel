import { Link } from "react-router-dom";
import { RoomInfo } from "../../app/types/UserTypes";
import "../../assets/sass/roomCard.scss";

const RoomCardHorizontal = ({ item }: { item: RoomInfo }) => {
  return (
    <div className="horizontalCard">
      <div className="horizontalCard__text">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="horizontalCard__buttonHolder">
          <button className="card-button explore">
            <Link to={item._id}>EXPLORE</Link>
          </button>
        </div>
      </div>

      <div className="horizontalCard__imageHolder">
        <img src={item.image} alt="room" />
      </div>
    </div>
  );
};

export default RoomCardHorizontal;
