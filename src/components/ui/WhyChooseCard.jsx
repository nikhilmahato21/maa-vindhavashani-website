import React from 'react';
import { Star } from 'lucide-react';

export const WhyChooseCard = ({ item }) => {
  const { title, description } = item;

  return (
    <li className="flex items-start space-x-3">
      <Star className="text-yellow-400 mt-1" size={20} />
      <span className="text-gray-700">
        <strong>{title}:</strong> {description}
      </span>
    </li>
  );
};
