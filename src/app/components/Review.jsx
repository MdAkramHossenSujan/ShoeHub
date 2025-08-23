"use client";
import React from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing shoes! Super comfortable and stylish. Highly recommend.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    rating: 4,
    comment: "Great quality, but the size runs a bit small. Overall satisfied.",
  },
  {
    id: 3,
    name: "Michael Brown",
    rating: 3,
    comment: "Decent shoes, but I expected better performance for the price.",
  },
];

export default function UserReviews() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <FaUserCircle className="text-4xl" />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-500" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-400" />
                    )
                  )}
                </div>
              </div>
            </div>
            <p className="">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
