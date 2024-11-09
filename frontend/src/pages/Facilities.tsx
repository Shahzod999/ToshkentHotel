import { useState } from "react";
import { selecteduserInfo } from "../app/features/useInfoSlice";
import { useAppSelector } from "../app/hooks/hooks";
import { BsFileEarmarkImageFill } from "react-icons/bs";

import "../assets/sass/facilities.scss";
import { useAddFacilitiesMutation, useAllFacilitiesQuery } from "../app/api/facilitiesApiSlice";
import { ErrorStateRoomAdd } from "../app/types/UserTypes";
import ClearButton from "../components/Actions/ClearButton";
import Loading from "../components/Actions/Loading";
import FacilitiesCard from "../components/Facilities/FacilitiesCard";

const Facilities = () => {
  const userInfo = useAppSelector(selecteduserInfo);
  const { data: facilities, isLoading, isFetching } = useAllFacilitiesQuery();
  const [addFacilities, { isLoading: addFacilitiLoading }] = useAddFacilitiesMutation();

  const [newFacility, setNewFacility] = useState({ img: "", text: "" });
  const [commonError, setCommonError] = useState("");

  const handleAddFacility = async () => {
    const { img, text } = newFacility;

    if (!img || !text) {
      return alert("All fields are required");
    }

    const formData = new FormData();
    formData.append("img", img);
    formData.append("text", text);

    try {
      const res = await addFacilities(formData).unwrap();
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
      if (file.size > 1 * 1024 * 1024) {
        alert("Please upload an image that is 1MB or smaller.");
        return;
      }

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

  if (isLoading) return <Loading />;
  return (
    <div className="facilities container">
      <h2> FACILITIES </h2>
      <p>
        We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for
        leisure and our modern luxury resort facilities will help you enjoy the best of all.
      </p>

      {userInfo && (
        <div className="facility-form">
          {(newFacility.img || newFacility.text) && <ClearButton setState={setNewFacility} clearItem={{ img: "", text: "" }} />}
          <h4 className="facility-form__title">Add New Facility</h4>
          {addFacilitiLoading ? (
            <Loading />
          ) : (
            <label htmlFor="img" className="facility-form__input">
              <span>Enter image URL</span> <BsFileEarmarkImageFill size={25} />
              <div className="facility-form-newImg">
                <img src={newFacility.img} alt="foto" />
              </div>
            </label>
          )}
          <span className="errorText">{commonError}</span>
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

          <button onClick={handleAddFacility} className="facility-form__button" disabled={addFacilitiLoading}>
            Add Facility
          </button>
        </div>
      )}

      {isFetching && <Loading />}

      <div className="facilitiesHolder">
        {facilities?.map((item) => (
          <FacilitiesCard item={item} userInfo={userInfo} key={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
