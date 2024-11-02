import "../assets/sass/facilities.scss";

const Facilities = () => {
  const facilities = [
    {
      img: "q1.png",
      text: "THE GYM",
    },
    {
      img: "q2.png",
      text: "POOLSIDE BAR",
    },
    {
      img: "q3.png",
      text: "THE SPA",
    },
    {
      img: "q4.png",
      text: "SWIMMING POOL",
    },
    {
      img: "q5.png",
      text: "RESTAURANT",
    },
    {
      img: "q6.png",
      text: "LAUNDRY",
    },
  ];
  return (
    <div className="facilities container">
      <h2> FACILITIES </h2>
      <p>
        We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for
        leisure and our modern luxury resort facilities will help you enjoy the best of all.
      </p>

      <div className="facilitiesHolder">
        {facilities.map((item) => (
          <div className="facilitiesHolder__cards" key={item.text}>
            <img src={item.img} alt="" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
