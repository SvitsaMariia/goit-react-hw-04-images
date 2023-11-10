// import { useState } from 'react';
// import { Modal } from 'components';
// import css from './ImageGalleryItem.module.css';

// export const ImageGalleryItem = ({
//   image: { webformatURL, largeImageURL, tags },
// }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(prevState => !prevState);
//   };

//   return (
//     <>
//       <li className={css.ImageGalleryItem}>
//         <img
//           className={css.ImageGalleryItemImg}
//           src={webformatURL}
//           alt={tags}
//           onClick={toggleModal}
//         />
//       </li>

//       {showModal && (
//         <Modal
//           largeImageURL={largeImageURL}
//           tags={tags}
//           onClose={toggleModal}
//         />
//       )}
//     </>
//   );
// };

import { Modal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';
import { useState } from 'react';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, url }) => {
  const [open, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={css.ImageGalleryItemImage}
          onClick={toggleModal}
        />
      </li>
      {open ? <Modal onClose={toggleModal} src={url} alt={alt}></Modal> : null}
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  url: propTypes.string,
};