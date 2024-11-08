import { useState } from "react";
import { selecteduserInfo } from "../app/features/useInfoSlice";
import { useAppSelector } from "../app/hooks/hooks";
import { BsFileEarmarkImageFill } from "react-icons/bs";

import "../assets/sass/facilities.scss";
import FacilitiesCard from "../components/FacilitiesCard";
import { useAddFacilitiesMutation, useAllFacilitiesQuery } from "../app/api/facilitiesApiSlice";
import { ErrorStateRoomAdd } from "../app/types/UserTypes";

const Facilities = () => {
  const userInfo = useAppSelector(selecteduserInfo);
  const { data: fasilitiesData, isLoading } = useAllFacilitiesQuery({});
  const [addFacilities, { data: addFacilitiesData }] = useAddFacilitiesMutation();

  console.log(fasilitiesData);

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

  const [newFacility, setNewFacility] = useState({ img: "", text: "" });
  const [commonError, setCommonError] = useState("");

  const handleAddFacility = async () => {
    const { img, text } = newFacility;

    if (!img || !text) {
      return alert("All fields are required");
    }

    try {
      const res = await addFacilities(newFacility).unwrap();
      console.log(res);
      setNewFacility({ img: "", text: "" });
      setCommonError("");
    } catch (error) {
      console.error(error);
      setCommonError((error as ErrorStateRoomAdd).data);
    }
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewFacility({ ...newFacility, img: reader.result as string });
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  console.log(newFacility);

  return (
    <div className="facilities container">
      <h2> FACILITIES </h2>
      <p>
        We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for
        leisure and our modern luxury resort facilities will help you enjoy the best of all.
      </p>

      {userInfo && (
        <div className="facility-form">
          <h4 className="facility-form__title">Add New Facility</h4>
          <label htmlFor="img" className="facility-form__input">
            <span>Enter image URL</span> <BsFileEarmarkImageFill size={25} />
          </label>

          <input
            accept="image/*"
            type="file"
            id="img"
            style={{ display: "none" }}
            onChange={(e) => {
              handleImagePreview(e);
            }}
          />

          <label htmlFor="text">Enter facility description</label>
          <input type="text" id="text" value={newFacility.text} onChange={(e) => setNewFacility({ ...newFacility, text: e.target.value })} className="facility-form__input" />

          <button onClick={handleAddFacility} className="facility-form__button">
            Add Facility
          </button>
        </div>
      )}

      <div className="facilitiesHolder">
        {facilities.map((item) => (
          <FacilitiesCard item={item} userInfo={userInfo} key={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
