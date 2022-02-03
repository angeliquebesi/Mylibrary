import api from './routing';

const allBooks = () => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/book`);
        resolve(response.data[0]);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

const getOneBook = (id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/book/${id}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

const deleteBook = (id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.delete(`/book/${id}`);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

const updateBook = (data, id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.put(`/book/${id}`, data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    })();
  });
};

const postBook = (data) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.post('/book/', data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    })();
  });
};

export { allBooks, getOneBook, deleteBook, updateBook, postBook };
