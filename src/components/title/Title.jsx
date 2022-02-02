import React from 'react';
import CardBook from '../cards/CardBook';

const Title = function Title({ text }) {
  return (
    <div>
      <h2 className="text-center text-5xl font-normal leading-normal mt-0 mb-2 text-indigo-800">
        {text}
      </h2>
      <CardBook />
    </div>
  );
};
export default Title;
