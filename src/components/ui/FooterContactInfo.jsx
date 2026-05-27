import React from 'react';

export const FooterContactInfo = ({ phone, email }) => {
  return (
    <>
      <p className="text-gray-400 text-sm">Phone: <a href={`tel:${phone}`} className="hover:text-white">{phone}</a></p>
      <p className="text-gray-400 text-sm">Email: <a href={`mailto:${email}`} className="hover:text-white">{email}</a></p>
    </>
  );
};
