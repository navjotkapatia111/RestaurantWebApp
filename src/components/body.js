
import React from "react";
import { Link } from "react-router";

export default function Body() {
  return (
    <div className="font-sans">
     
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-4">
      Welcome to Our Restaurant
    </h3>
    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
      At <span className="font-semibold text-orange-500">Restaurant</span>, we
      believe food is more than just a meal — it’s an experience. Our chefs
      carefully craft every dish using the freshest locally sourced ingredients,
      blending traditional recipes with modern flavors. Whether you're here for
      a family gathering, a romantic dinner, or a casual lunch with friends, we
      promise to serve you a plate full of warmth, flavor, and memories.
    </p>
    <Link to="/list">
    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-lg shadow-lg"> ORDER NOW </button>
    </Link>
  </div>
 
</section>
    </div>
  );
}
