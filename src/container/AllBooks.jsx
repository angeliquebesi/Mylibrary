import React from 'react';
import { CardBook } from '../components/cards';
import Title from '../components/title/Title';

const AllBooks = function AllBooks() {
  return (
    <div>
      <Title text="Books" />
      <CardBook />
    </div>
  );
};
export default AllBooks;
