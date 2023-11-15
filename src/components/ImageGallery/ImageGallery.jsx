import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ arr }) => {
  return (
    <ul className={css.ImageGallery}>
      {arr.map(el => (
        <ImageGalleryItem
          src={el.webformatURL}
          alt={el.collections}
          url={el.largeImageURL}
          key={el.id}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  arr: propTypes.arrayOf(propTypes.object).isRequired,
};