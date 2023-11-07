import axios from 'axios';

const API_KEY = '19502637-d06b43ee367f131773b25cf8c';

const pixabayAPI = axios.create({
  baseURL: 'https://pixabay.com',
});

export const fetchImages = async ({ query, page, perPage }) => {
  return pixabayAPI.get('/api/', {
    params: {
      key: API_KEY,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });
};