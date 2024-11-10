import "../assets/sass/main.scss";
import RoomInfo from "./Room/RoomInfo";

const Main = () => {
  return (
    <div className="mainHolder container" id="main">
      <h2>All our room types are including complementary breakfast</h2>

      <RoomInfo />
    </div>
  );
};

export default Main;
