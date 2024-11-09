import { FaUtensils, FaDumbbell, FaGem, FaComments } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "../assets/sass/roomCard.scss";
import { RoomInfo } from "../app/types/UserTypes";
import { useAppSelector } from "../app/hooks/hooks";
import { selecteduserInfo } from "../app/features/useInfoSlice";
import { MdRestoreFromTrash } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import { useDeleteProductMutation, useEditProductMutation } from "../app/api/productsApiSlice";
import { useState } from "react";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import Loading from "./Loading";
import ClearButton from "./ClearButton";

const RoomCard = ({ item }: { item: RoomInfo }) => {
  const userInfo = useAppSelector(selecteduserInfo);
  const [editProduct, { isLoading: updateLoading }] = useEditProductMutation();
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState<RoomInfo>(item);
  const [deleteProduct, { isLoading, error }] = useDeleteProductMutation();

  const handleChange = () => {
    setEdit(!edit);
  };

  const handleDelete = async () => {
    try {
      const answer = window.confirm("Are u sure u want to delete this product?");
      if (!answer) return;
      const { data } = await deleteProduct(item._id).unwrap();
      console.log(data);
    } catch (err) {
      console.error("Failed to delete product:", error || err);
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" ? Number(value) : value,
    }));
  };

  const handleSendEdit = async () => {
    try {
      const formData = new FormData();

      for (const key in product) {
        formData.append(key, product[key as keyof RoomInfo]?.toString() || "");
      }
      const { data } = await editProduct({ id: product._id, formData });

      alert("Nice");
      setEdit(false);
      console.log(data);
    } catch (err) {
      console.log(err);
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
        setProduct({ ...product, image: reader.result as string });
        console.log(reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  return (
    <div className="card">
      {userInfo && (
        <div className="card__function">
          {edit ? <ClearButton setState={setProduct} clearItem={item} /> : <MdRestoreFromTrash className="cursor card__function__icon" onClick={handleDelete} />}
          {isLoading && <span>Loading..</span>}
          <BsPenFill className="cursor card__function__icon" onClick={handleChange} />
        </div>
      )}

      <div className="card-img">
        {updateLoading && (
          <div className="handleImage">
            <Loading />
          </div>
        )}

        {edit && !updateLoading && (
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

        <img src={product.image} alt="Hotel Room" />
      </div>

      <div className="card-content">
        <div className="card-info">
          <div>
            <CiStar />
            <input type="number" name="rating" min="1" max="5" step={0.1} value={product.rating} className="rating" readOnly={!edit} onChange={handleEditChange} />
          </div>
          <div>
            $
            <input type="number" name="price" value={product.price} className="price" readOnly={!edit} onChange={handleEditChange} />
          </div>
        </div>

        <input type="text" name="name" value={product.name} className="card-title" readOnly={!edit} onChange={handleEditChange} />
        <input type="text" name="description" className="card-subtitle" value={product.description.split(" ").slice(0, 2).join(" ")} readOnly={!edit} onChange={handleEditChange} />

        <div className="card__select-wrapper">
          <select name="category" value={product.category} onChange={handleEditChange} disabled={!edit}>
            <option value="Single room">Single room</option>
            <option value="Double room">Double room</option>
            <option value="Triple room">Triple room</option>
            <option value="Quad room">Quad room</option>
          </select>
        </div>

        <div className="card-icons">
          <i>
            <FaUtensils />
          </i>
          <i>
            <FaDumbbell />
          </i>
          <i>
            <FaGem />
          </i>
          <i>
            <FaComments />
          </i>
        </div>

        {edit ? (
          <button className="card-button edit" disabled={updateLoading} onClick={handleSendEdit}>
            SAVE
          </button>
        ) : (
          <button className="card-button explore">EXPLORE</button>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
