import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ cb }) => {
  return (
    <button onClick={cb} className={css.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  cb: propTypes.func.isRequired,
};