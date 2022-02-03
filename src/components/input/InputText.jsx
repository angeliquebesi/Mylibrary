import React from 'react';

const InputText = function InputText({ titreLabel, defaultValue, funct }) {
  return (
    <label htmlFor="id" className="block">
      <span className="text-gray-700">{titreLabel}</span>

      <input
        defaultValue={defaultValue}
        onChange={(e) => funct(e.target.value)}
        type="text"
        className="text-gray-400 block w-full mt-1 mb-3 bg-gray-100 border border-gray-200 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default InputText;
