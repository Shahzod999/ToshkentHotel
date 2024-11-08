import { useState } from "react";
import { MdRestoreFromTrash } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import Loading from "./Loading";

interface FacilitiesTypes {
  item: {
    img: string;
    text: string;
  };
  userInfo: string;
}

const FacilitiesCard = ({ item, userInfo }: FacilitiesTypes) => {
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
  
  

  return (
    <div className="facilitiesHolder__cards" key={item.text}>
      {userInfo && (
        <div className="card__function">
          <MdRestoreFromTrash className="cursor card__function__icon" />
          <BsPenFill className="cursor card__function__icon" onClick={handleChange} />
        </div>
      )}

      <div className="card-img">
        {false && (
          <div className="handleImage">
            <Loading />
          </div>
        )}

        {edit && (
          <div className="handleImage">
            <label htmlFor="imagePreview" className="cursor">
              <BsFileEarmarkImageFill size={50} />
            </label>
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

      <input type="text" name="name" value={product.text} className="card-title" readOnly={!edit} onChange={(e) => setProduct({ ...product, text: e.target.value })} />
    </div>
  );
};

export default FacilitiesCard;
