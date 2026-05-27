import React from 'react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-yellow-400 text-blue-900 font-bold px-3 py-2 rounded">
        MAA
      </div>
      <span className="text-xl font-bold hidden sm:inline">{BUSINESS_INFO.name.split(' ')[1]}</span>
    </div>
  );
};
