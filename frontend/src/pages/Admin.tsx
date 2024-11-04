import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../assets/sass/admin.scss";
import { useAddProductsMutation } from "../app/api/productsApiSlice";
import { ProductFormInputs } from "../app/types/UserTypes";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormInputs>();
  const [addProducts] = useAddProductsMutation();
  const [category, setCategory] = useState<string>("Single room");

  const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]); // Assuming image file upload
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("rating", data.rating.toString());
    formData.append("price", data.price.toString());

    try {
      const response = await addProducts(formData).unwrap();
      console.log(response);
      alert("Product added successfully");
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Image:</label>
        <input type="text" {...register("image", { required: "Image is required" })} />
        {errors.image && <p>{errors.image.message}</p>}

        <label>Category:</label>
        <select {...register("category", { required: "Category is required" })} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Single room">Single room</option>
          <option value="Double room">Double room</option>
          <option value="Triple room">Triple room</option>
          <option value="Quad room">Quad room</option>
        </select>
        {errors.category && <p>{errors.category.message}</p>}

        <label>Description:</label>
        <textarea {...register("description", { required: "Description is required" })} />
        {errors.description && <p>{errors.description.message}</p>}

        <label>Rating:</label>
        <input
          type="number"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 0, message: "Minimum rating is 0" },
            max: { value: 5, message: "Maximum rating is 5" },
          })}
          step="0.1"
        />
        {errors.rating && <p>{errors.rating.message}</p>}

        <label>Price:</label>
        <input
          type="number"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 0, message: "Minimum rating is 0" },
            max: { value: 5, message: "Maximum rating is 5" },
          })}
          step="0.1"
        />
        {errors.price && <p>{errors.price.message}</p>}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Admin;
