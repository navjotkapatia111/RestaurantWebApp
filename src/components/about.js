import React from "react";
const AboutUs = () => {
    return (
      <section className="bg-white text-gray-800 py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-amber-600">About Us 🍽️</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-amber-700">Our Restaurant</span>, where passion meets the plate!
            We're not just a restaurant — we're a celebration of flavors crafted with love and served with warmth.
            Whether you're craving comfort food or curious to try something new, our menu is made to satisfy.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-amber-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-amber-700">👨‍🍳 Fresh Ingredients</h3>
              <p>
                Our chefs use locally-sourced, fresh ingredients to prepare dishes that nourish and delight.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-amber-700">🏡 Cozy Experience</h3>
              <p>
                Whether you dine in or take out, we create a space for you to relax and enjoy every bite.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-amber-700">🌎 Global Flavors</h3>
              <p>
                Our menu blends local traditions with global tastes — making every meal a flavorful journey.
              </p>
            </div>
          </div>
          <button className="mt-10 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Order Now
          </button>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  