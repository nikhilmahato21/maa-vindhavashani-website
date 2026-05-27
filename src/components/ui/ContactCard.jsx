import React from 'react';

export const ContactCard = ({ icon: Icon, title, subtitle, value, link }) => {
  return (
    <div className="bg-blue-800 p-8 rounded-lg text-center">
      <Icon className="mx-auto mb-4 text-yellow-400" size={40} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 mb-2">{subtitle}</p>
      <a href={link} className="text-yellow-400 font-bold hover:text-yellow-300">
        {value}
      </a>
    </div>
  );
};
