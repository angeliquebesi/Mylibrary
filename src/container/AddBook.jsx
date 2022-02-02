import React from 'react';
import { InputNumber, InputText, InputTextArea } from '../components/input';
import Title from '../components/title/Title';

const AddBook = function AddBook() {
  return (
    <div>
      <Title text="Add a book" />
      <div className='"flex justify-center items-center h-screen w-full'>
        <div className="mx-2 md:mx-auto md:w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <InputText
            titreLabel="Title"
            defaultValue="ex : Harry Potter and the
Philosopher's Stone"
          />
          <InputText titreLabel="Author" defaultValue="ex : J.K. Rowling " />
          <InputText titreLabel="Category" defaultValue="ex : Fantasy" />
          <InputNumber titreLabel="Year" />
          <InputText titreLabel="Image" defaultValue="link http:// " />
          <InputTextArea titreLabel="Summary" />
        </div>
      </div>
    </div>
  );
};
export default AddBook;
