import React from 'react';
import { useParams } from 'react-router-dom';
import { CardOneBook } from '../components/cards';
import Title from '../components/title/Title';

const OneBook = function OneBook() {
  const { id } = useParams();
  return (
    <div>
      {' '}
      <Title text="Titre du livre" />
      <CardOneBook id={id} />
    </div>
  );
};
export default OneBook;
