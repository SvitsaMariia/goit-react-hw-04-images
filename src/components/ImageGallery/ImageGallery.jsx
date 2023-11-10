// import PropTypes from 'prop-types';
// import { ImageGalleryItem } from 'components';
// import css from './ImageGallery.module.css';

// export const ImageGallery = ({ images }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {images.map(image => (
//         <ImageGalleryItem key={image.pageURL} image={image} />
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ arr }) => {
  return (
    <ul className={css.ImageGallery}>
      {arr.map(el => (
        <ImageGalleryItem
          src={el.webformatURL}
          alt={el.tags}
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