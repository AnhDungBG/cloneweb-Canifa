import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import instance from "../apis";
import { useEffect, useState } from "react";
import { addProduct, editProduct } from "../redux/products/productActions";
import { useDispatch } from "react-redux";
import { productSchema } from "../utils/validate";
import { Category, Product } from "../interfaces";

const ProductForm = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const handleProduct = (product: Product) => {
    if (id) {
      dispatch(editProduct({ ...product, _id: id }));
    } else {
      dispatch(addProduct(product));
    }
    navigate("/admin/product");
  };

  useEffect(() => {
    if (id) {
      try {
        (async () => {
          const res = await instance.get(`product/${id}`);
          console.log(res);
          reset(res.data.data);
        })();
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
  }, [id, reset]);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await instance.get(`/category`);
        console.log(data);
        setCategories(data.data);
      })();
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit((data) => handleProduct(data))}>
        <h1 className="text-2xl font-bold mb-4">
          {id ? "Edit product" : "Add product"}
        </h1>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-600 text-sm">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            type="number"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <span className="text-red-600 text-sm">
              {errors?.price.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            rows={4}
            {...register("description")}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            {...register("categoryId")}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {id ? "Edit product" : "Add product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
