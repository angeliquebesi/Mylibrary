import React from 'react';
import { InputText, InputTextArea } from '../components/input';
import Title from '../components/title/Title';

const AddBook = function AddBook() {
  return (
    <div>
      <Title text="Add a book" />
      <div>
        <InputText
          titreLabel="Title"
          defaultValue="ex : Harry Potter and the
Philosopher's Stone"
        />
        <InputText titreLabel="Author" defaultValue="ex : J.K. Rowling " />
        <InputText titreLabel="Category" defaultValue="ex : Fantasy" />
        <InputTextArea titreLabel="Summary" />
      </div>
    </div>
  );
};
export default AddBook;
