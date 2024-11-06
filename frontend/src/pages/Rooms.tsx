import RoomCardHorizontal from "../components/RoomCardHorizontal";
import "../assets/sass/totalRooms.scss";
import { useAllProductQuery } from "../app/api/productsApiSlice";

const Rooms = () => {
  const { data } = useAllProductQuery();

  const categories = ["Single room", "Double room", "Triple room", "Quad room"];

  return (
    <div className="container">
      {categories.map((category) => {
        const rooms = data?.filter((item) => item.category === category);
        if (rooms?.length == 0) {
          return;
        }
        return (
          <div className="totalRooms" key={category}>
            <h2>{category}</h2>
            {rooms?.map((item) => (
              <RoomCardHorizontal key={item._id} item={item} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Rooms;
