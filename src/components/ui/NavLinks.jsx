import React from 'react';

export const NavLinks = ({ items, className = '', linkClassName = '' }) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={linkClassName}>
          {item.label}
        </a>
      ))}
    </div>
  );
};
