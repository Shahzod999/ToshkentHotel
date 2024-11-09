import { useState } from "react";
import { MdRestoreFromTrash } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import Loading from "./Loading";
import { useDeleteFacilitiesMutation, useEditFacilitiesMutation } from "../app/api/facilitiesApiSlice";
import { RiSave3Fill } from "react-icons/ri";
import { FacilitiesType } from "../app/types/UserTypes";
import ClearButton from "./ClearButton";

interface FacilitiesTypes {
  item: FacilitiesType;
  userInfo: string;
}

const FacilitiesCard = ({ item, userInfo }: FacilitiesTypes) => {
  const [deleteFacilities] = useDeleteFacilitiesMutation();
  const [editFacilities, { isLoading }] = useEditFacilitiesMutation();
  const [product, setProduct] = useState({
    text: item.text,
    img: item.img,
  });

  const [edit, setEdit] = useState(false);

  const handleChange = () => {
    setEdit(!edit);
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProduct({ ...product, img: reader.result as string });
        console.log(reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  const handleDelete = async () => {
    try {
      const answer = window.confirm("Are u sure u want to delete this product?");
      if (!answer) return;
      await deleteFacilities(item._id).unwrap();
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const handleEditChanges = async () => {
    const formData = new FormData();
    formData.append("img", product.img);
    formData.append("text", product.text);

    try {
      const res = await editFacilities({ id: item._id, data: formData }).unwrap();
      alert("Nice");
      setEdit(false);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="facilitiesHolder__cards" key={item._id}>
      {userInfo && (
        <div className="card__function">
          {edit ? (
            <>
              <ClearButton setState={setProduct} clearItem={item} setEdit={setEdit} />
              <RiSave3Fill className="cursor" onClick={handleEditChanges} />
            </>
          ) : (
            <>
              <MdRestoreFromTrash className="cursor card__function__icon" onClick={handleDelete} />
              <BsPenFill className="cursor card__function__icon" onClick={handleChange} />
            </>
          )}
        </div>
      )}

      <div className="facilitiesHolder__cards-img">
        {false && (
          <div className="handleImage">
            <Loading />
          </div>
        )}

        {edit && (
          <div className="handleImage">
            {isLoading ? (
              <Loading />
            ) : (
              <label htmlFor="imagePreview" className="cursor">
                <BsFileEarmarkImageFill size={50} />
              </label>
            )}
            <input
              accept="image/*"
              type="file"
              id="imagePreview"
              style={{ display: "none" }}
              onChange={(e) => {
                handleImagePreview(e);
              }}
            />
          </div>
        )}

        <img src={product.img} alt="HotelService" />
      </div>

      <input type="text" name="name" value={product.text} className="facilitiesHolder__cards-title" readOnly={!edit} onChange={(e) => setProduct({ ...product, text: e.target.value })} />
    </div>
  );
};

export default FacilitiesCard;
