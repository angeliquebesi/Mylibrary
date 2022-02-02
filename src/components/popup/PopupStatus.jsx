import React from 'react';

const PopupStatus = function PopupStatus() {
  const value = ['Unread', 'Reading', 'Finished'];
  return (
    <div className="mb-6 w-52">
      <p className="mb-4 text-sm text-gray-500">Status</p>
      {/** Ajouter le onchange */}
      <select
        className="w-full border border-gray-300 rounded-md"
        name="filter"
        id="filter"
      >
        <option value="all">Tous</option>
        {value.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default PopupStatus;
