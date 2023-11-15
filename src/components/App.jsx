import { Component } from 'react';
import { imagesApi } from 'services/pixabay-api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery }  from './ImageGallery/ImageGallery';
import  { Button } from './Button/Button';
import { Loader } from './Loader/Loader';



export class App extends Component {
  state = {
    images: [],
    page: 1,
    q: '',
    loading: false,
    modalOpen: false,
    showBtn: false,
  };
  fetchData = async () => {
    const { page, q } = this.state;
  
    try {
      this.setState({ loading: true });
      const data = await imagesApi({
        q,
        page,
      });

      this.setState(prev => ({
        images: [...prev.images, ...data.data.hits],
        showBtn: page < Math.ceil(data.data.totalHits / 12),
      }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleChangeQuery = q => {
    this.setState({ q, images: [], page: 1, loading: false, modalOpen: false });
  };

  componentDidUpdate = (_, prevState) => {
    const { q, page } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      this.fetchData();
    }
  };
  handleBtnClick = () => {
    this.setState(prewState => ({
      page: prewState.page + 1,
    }));

  };
  
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />

        <>
          {this.state.loading && <Loader />}

          <ImageGallery arr={this.state.images} />

          {this.state.showBtn && <Button cb={this.handleBtnClick} />}
        </>
      </>
    );
  }
}