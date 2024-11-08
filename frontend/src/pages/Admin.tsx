import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../assets/sass/admin.scss";
import { useAddProductsMutation } from "../app/api/productsApiSlice";
import { ErrorStateRoomAdd, ProductFormInputs } from "../app/types/UserTypes";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormInputs>();
  const [addProducts] = useAddProductsMutation();
  const [category, setCategory] = useState<string>("Single room");
  const [commonError, setCommonError] = useState("");

  const [imagePreview, setImagePreview] = useState<string>("");

  const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
    setCommonError("");
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", imagePreview);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("rating", data.rating.toString());
    formData.append("price", data.price.toString());
    formData.append("mainRoom", data.mainRoom ? "true" : "false");

    try {
      const response = await addProducts(formData).unwrap();
      console.log(response);
      alert("Product added successfully");
      setImagePreview("");
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
        setImagePreview(reader.result as string);
        console.log(reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  return (
    <div className="admin-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register("name", { required: "Name is required" })} />
        <span className="errorText">{errors.name?.message}</span>

        <label>Image:</label>
        {imagePreview && <img src={imagePreview} alt="Preview" />}
        <input
          accept="image/*"
          type="file"
          {...register("image", { required: "Image is required" })}
          onChange={(e) => {
            handleImagePreview(e);
          }}
        />

        <span className="errorText">{errors.image?.message} </span>

        <label>Category:</label>
        <select {...register("category", { required: "Category is required" })} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Single room">Single room</option>
          <option value="Double room">Double room</option>
          <option value="Triple room">Triple room</option>
          <option value="Quad room">Quad room</option>
        </select>
        <span className="errorText">{errors.category?.message} </span>

        <label>Description:</label>
        <textarea {...register("description", { required: "Description is required" })} />
        <span className="errorText">{errors.description?.message} </span>

        <label>Rating:</label>
        <input
          type="number"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 0, message: "Minimum rating is 0" },
            max: { value: 5, message: "Maximum rating is 5" },
          })}
          max={5}
          step="0.1"
        />
        <span className="errorText">{errors.rating?.message}</span>

        <label>Price:</label>
        <input
          type="number"
          {...register("price", {
            required: "Price is required",
            min: { value: 0, message: "Price must be positive" },
          })}
          step="0.1"
        />
        <span className="errorText">{errors.price?.message} </span>

        <div className="mainRoomCheck">
          <label htmlFor="mainRoom">Презентационная Комната?</label>
          <input type="checkbox" id="mainRoom" {...register("mainRoom")} />
        </div>

        <span className="errorText">{commonError}</span>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Admin;
