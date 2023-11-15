
import axios from 'axios';

const apiCreate = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const imagesApi = async searchParams => {

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