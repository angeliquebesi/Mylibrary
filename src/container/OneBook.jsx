import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneBook } from '../api/books';
import { CardOneBook } from '../components/cards';
import Title from '../components/title/Title';

const OneBook = function OneBook() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  const numberId = parseInt(id, 10);
  useEffect(async () => {
    await getOneBook(numberId)
      .then((res) => {
        setBook(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {book.map((b) => {
        return (
          <div key={b.id}>
            <Title text={b.title} />
            <CardOneBook item={b} />
          </div>
        );
      })}
    </div>
  );
};
export default OneBook;
