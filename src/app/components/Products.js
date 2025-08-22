"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://shoe-hub-server.vercel.app/display/shoes");
      setProducts(res.data.data.slice(0, 6)); // only first 6
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center flex justify-center items-center min-h-screen text-lg"><span class="loading loading-ring loading-xl"></span>.</p>
    );

  if (products.length === 0)
    return (
      <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
        No products found.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center ">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 flex flex-col justify-between"
          >
            {/* Product Image */}
            <figure className="h-48 flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.productName}
                  className="object-cover h-full w-full"
                />
              ) : (
                <span className="text-gray-400 dark:text-gray-500">No Image</span>
              )}
            </figure>

            {/* Price, Size, Details */}
            <div className="card-body flex flex-col justify-between p-4">
              <div className="flex justify-between mb-3">
                <span><strong>Size:</strong> {product.size || "10"}</span>
                <span><strong>Price:</strong> ${product.price || "2400"}</span>
              </div>
              <Link
                    href={`/products/${product._id}`}
                    className="btn btn-sm btn-outline rounded-lg"
                  >
                    Details
                  </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


