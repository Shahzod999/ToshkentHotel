import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../app/api/productsApiSlice";
import Loading from "../components/Actions/Loading";
import Error from "../components/Actions/Error";
import "../assets/sass/singleRoom.scss";

const SingleRoomPage = () => {
  const { id } = useParams();
  const { data: room, isLoading, isError } = useGetSingleProductQuery(id);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div
      className="single"
      style={{
        backgroundImage: `url(${room.image})`,
      }}>
      <div className="single-room-page">
        <h1>{room.name}</h1>
        <img src={room.image} alt={room.name} className="room-image" />
        <p className="room-description">{room.description}</p>
        <p className="category">Category: {room.category}</p>
        <p className="price">Price: ${room.price}</p>
        <div className="room-details">
          <p className="detail-item">Rating: {room.rating}</p>
          <p className="detail-item highlight">Main Room: {room.mainRoom}</p>
          <p className="detail-item">Created at: {new Date(room.createdAt).toLocaleDateString()}</p>
          <p className="detail-item">Last updated: {new Date(room.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomPage;
