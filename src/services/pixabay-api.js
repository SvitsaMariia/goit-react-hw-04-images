// import axios from 'axios';

// const API_KEY = '19502637-d06b43ee367f131773b25cf8c';

// const pixabayAPI = axios.create({
//   baseURL: 'https://pixabay.com/api/?key=19502637-d06b43ee367f131773b25cf8c&q=yellow+flowers&image_type=photo',
// });

// export const fetchImages = async ({ query, page, perPage }) => {
//   return pixabayAPI.get('/api/', {
//     params: {
//       key: API_KEY,
//       q: query,
//       page,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: perPage,
//     },
//   });
// };

import axios from 'axios';

const apiCreate = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const imagesApi = async searchParams => {
  // console.log(searchParams);
  return await apiCreate.get('', {
    params: {
      key: '19502637-d06b43ee367f131773b25cf8c',
      per_page: 12,
      orientation: 'horizontal',
      image_type: 'photo',
      ...searchParams,
    },
  });
};