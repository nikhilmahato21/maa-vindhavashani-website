import React from 'react';

export const PricingCard = ({ plan }) => {
  const { title, subtitle, price, features, featured } = plan;

  if (featured) {
    return (
      <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg transform scale-105">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-200 mb-6">{subtitle}</p>
        <div className="text-4xl font-bold text-yellow-400 mb-6">{price}</div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
        <button className="w-full bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition">
          Book Now
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div className="text-4xl font-bold text-blue-900 mb-6">{price}</div>
      <ul className="space-y-3 mb-8 text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <button className="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition">
        Book Now
      </button>
    </div>
  );
};
