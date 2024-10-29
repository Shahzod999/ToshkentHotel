import "../assets/sass/roomCard.scss";

const RoomCardHorizontal = () => {
  return (
    <div className="horizontalCard">
      <div className="horizontalCard__text">
        <h2>Luxury redefined</h2>
        <p>Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.</p>
        <div className="horizontalCard__buttonHolder">
          <button className="card-button">EXPLORE</button>
        </div>
      </div>

      <div className="horizontalCard__imageHolder">
        <img src="room.png" alt="room" />
      </div>
    </div>
  );
};

export default RoomCardHorizontal;
