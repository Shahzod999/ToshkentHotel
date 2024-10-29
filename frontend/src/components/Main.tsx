import "../assets/sass/main.scss";
import RoomInfo from "./RoomInfo";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <div className="mainHolder">
      <h2>All our room types are including complementary breakfast</h2>

      <RoomInfo />

      <Testimonials />
    </div>
  );
};

export default Main;
