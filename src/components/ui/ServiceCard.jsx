import React from 'react';

export const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-900 font-semibold hover:text-blue-700">Learn More →</button>
    </div>
  );
};
