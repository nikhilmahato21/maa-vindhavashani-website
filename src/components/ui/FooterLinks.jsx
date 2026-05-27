import React from 'react';

export const FooterLinks = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <ul className="space-y-1 text-gray-400 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="hover:text-white">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
