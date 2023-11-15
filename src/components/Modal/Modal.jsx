
import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  closeOnEsc = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };
  handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  
  componentDidMount() {

    document.addEventListener('keydown', this.closeOnEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEsc);
  }

  render() {
    const { src, alt } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleOutsideClick}>
        <div className={css.Modal}>
          <img src={src} alt={alt} width="800px" height="600px" />
        </div>
      </div>
    );
  }
}