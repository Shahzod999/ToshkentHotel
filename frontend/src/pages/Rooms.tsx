import RoomCardHorizontal from "../components/RoomCardHorizontal";
import "../assets/sass/totalRooms.scss";
const Rooms = () => {

  return (
    <div className="container">
      <div className="totalRooms">
        <h2> Single room </h2>
        <RoomCardHorizontal />
        <RoomCardHorizontal />
        <RoomCardHorizontal />
      </div>
      <div className="totalRooms">
        <h2> Double room </h2>
        <RoomCardHorizontal />
        <RoomCardHorizontal />
        <RoomCardHorizontal />
      </div>
      <div className="totalRooms">
        <h2> Triple Room </h2>
        <RoomCardHorizontal />
        <RoomCardHorizontal />
        <RoomCardHorizontal />
      </div>
      <div className="totalRooms">
        <h2> Quad Room </h2>
        <RoomCardHorizontal />
        <RoomCardHorizontal />
        <RoomCardHorizontal />
      </div>
    </div>
  );
};

export default Rooms;
