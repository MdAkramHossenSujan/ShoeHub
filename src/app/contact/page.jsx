"use client";

import React from "react";
import MainLayout from "../components/MainLayout"; // adjust path if needed
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <MainLayout>
      <div className="max-w-3xl min-h-screen mx-auto p-6 py-24">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Contact Us
        </h1>
        <h2 className="text-lg font-medium mb-6  text-center">
          We’d love to hear from you! Fill out the form below.
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4  p-6 rounded-lg shadow-lg"
        >
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-500 mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text ">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-500 mt-1">Email is required</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="label">
              <span className="label-text ">
                Message
              </span>
            </label>
            <textarea
              placeholder="Your message..."
              {...register("message", { required: true })}
              className="textarea textarea-bordered w-full"
            />
            {errors.message && (
              <p className="text-red-500 mt-1">Message is required</p>
            )}
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary rounded-lg w-full md:w-auto px-6"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
