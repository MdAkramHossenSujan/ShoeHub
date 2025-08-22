"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { GiRunningShoe } from "react-icons/gi";
export default function AddShoe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can call your Next.js API route to save to MongoDB
    reset(); // reset form after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Shoe</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Product Name */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("productName", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.productName && <p className="text-red-500">Product name is required</p>}
        </div>

        {/* Size */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Size</span>
          </label>
          <input
            type="number"
            placeholder="Enter size"
            {...register("size", { required: true, min: 1 })}
            className="input input-bordered w-full"
          />
          {errors.size && <p className="text-red-500">Size is required</p>}
        </div>

        {/* Quality */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Quality</span>
          </label>
          <select {...register("quality", { required: true })} className="select select-bordered w-full">
            <option value="">Select Quality</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Luxury">Luxury</option>
          </select>
          {errors.quality && <p className="text-red-500">Please select quality</p>}
        </div>

        {/* Price */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Price ($)</span>
          </label>
          <input
            type="number"
            placeholder="Enter price"
            {...register("price", { required: true, min: 1 })}
            className="input input-bordered w-full"
          />
          {errors.price && <p className="text-red-500">Price is required</p>}
        </div>

        {/* Comment */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Comment</span>
          </label>
          <textarea
            placeholder="Additional comment"
            {...register("comment")}
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Availability</span>
          </label>
          <select {...register("availability", { required: true })} className="select select-bordered w-full">
            <option value="">Select Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          {errors.availability && <p className="text-red-500">Select availability</p>}
        </div>

        {/* Color */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Color</span>
          </label>
          <input
            type="text"
            placeholder="Enter color"
            {...register("color")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Performance */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Performance</span>
          </label>
          <select {...register("performance")} className="select select-bordered w-full">
            <option value="">Select Performance</option>
            <option value="Casual">Casual</option>
            <option value="Sports">Sports</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
         {/* Material */}
        <div>
          <label className="block font-medium">Material</label>
          <input
            type="text"
            placeholder="Lather"
            {...register("material")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium">Brand</label>
          <input
            type="text"
            placeholder="Black-Yellow"
            {...register("brand")}
            className="input input-bordered w-full"
          />
        </div>
    {/* Image Upload */}
        <div>
          <label className="block font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            className="input p-2 w-full"
          />
        </div>
        {/* Submit Button */}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-outline rounded-2xl btn-block">
            <GiRunningShoe size={18}/> Add Shoe
          </button>
        </div>
      </form>
    </div>
  );
}

