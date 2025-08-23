import React from "react";
import MainLayout from "../components/MainLayout";
import { FaShoePrints, FaUsers, FaLeaf, FaGlobe, FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

export const metadata = {
  title: "About | Urban Kicks",
  description: "Learn more about Urban Kicks, our vision, mission, and dedication to premium footwear.",
  icons: {
    icon: "/UrbanKicks-logo-transparent.png",
  },
};

export default function About() {
  return (
    <MainLayout>
      <div className="max-w-6xl min-h-screen mx-auto p-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">About Urban Kicks</h1>
          <p className="text-lg ">
            Redefining the sneaker culture with style, comfort, and innovation.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className=" shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <FaShoePrints className="text-5xl mx-auto text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-400">
              To provide premium, stylish, and comfortable shoes that empower individuals to express their unique style.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <FaGlobe className="text-5xl mx-auto text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-400">
              To become a global leader in footwear fashion, blending tradition with innovation and sustainability.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <FaHeart className="text-5xl mx-auto text-red-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <p className="text-gray-400">
              Quality, integrity, customer satisfaction, and eco-friendly practices drive everything we do.
            </p>
          </div>
        </div>

        {/* Why We Built Urban Kicks */}
        <div className=" rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Why We Built Urban Kicks</h2>
          <p className="text-gray-400 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We started Urban Kicks to make high-quality footwear accessible to everyone. 
            Sneaker culture is more than just shoes — it’s a lifestyle. 
            Our platform ensures you stay connected with the latest sneaker drops, timeless classics, and exclusive collections. 
            We believe shopping should be simple, fun, and reliable.
          </p>
        </div>

        {/* Details About Shoes */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaStar className="text-4xl text-yellow-500 mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-400">
              Each pair is crafted using durable, sustainable materials to ensure comfort, long life, and top-notch quality.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaUsers className="text-4xl text-purple-500 mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Designed for Everyone</h3>
            <p className="text-gray-400">
              Whether you’re an athlete, fashion enthusiast, or casual walker, our shoes are built to suit every lifestyle.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaLeaf className="text-4xl text-green-500 mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-gray-400">
              We are committed to reducing carbon footprints by using eco-friendly production and packaging methods.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaShoppingCart className="text-4xl text-blue-500 mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Seamless Shopping</h3>
            <p className="text-gray-400">
              Shop with confidence on our user-friendly platform with secure checkout and fast delivery.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Thank You for Choosing Urban Kicks!</h2>
          <p className="text-gray-600 text-lg">
            We’re more than just a shoe brand — we’re a movement redefining style, comfort, and culture.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

