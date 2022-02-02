import React from 'react';
import { useParams } from 'react-router-dom';
import { CardOneBook } from '../components/cards';
import Title from '../components/title/Title';

const OneBook = function OneBook() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {' '}
      <Title text="Titre du livre" />
      <CardOneBook />
    </div>
  );
};
export default OneBook;
