import api from './routing';

const AllBooks = () => {
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

const GetOneBook = (id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/book/${id}`);
        console.log(response.data[0]);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

export { AllBooks, GetOneBook };
