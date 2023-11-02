import React, { Component } from 'react';
import '../styles/SearchContainer.css';
import Gallery from './Gallery';

class SearchContainer extends Component {
  state = {
    searchText: '',
    galleryItems: [],
    showModal: false,
    modalMessage: '',
  };

  componentDidMount() {
    this.getRandomPhotos();
  }

  openModal = (message) => {
    this.setState({ showModal: true, modalMessage: message });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  getRandomPhotos = () => {
    const { apiUrl, apiKey } = this.props;
    const randomUrl = `${apiUrl}?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=12&format=json&nojsoncallback=1&safe_search=1`;

    fetch(randomUrl)
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos.photo;
        const galleryItems = photos.map((photo) => ({
          imageUrl: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          imageAlt: photo.title,
        }));
        this.setState({ galleryItems });
      })
      .catch((error) => {
        console.error('Ошибка при загрузке изображений:', error);
      });
  };

  searchPhotos = () => {
    const { apiUrl, apiKey } = this.props;
    const { searchText } = this.state;

    if (searchText.trim() === '') {
      return;
    }

    fetch(
      `${apiUrl}?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&per_page=12&format=json&nojsoncallback=1&safe_search=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos.photo;
        if (photos.length === 0) {
          this.openModal('Нет результатов для вашего запроса.');
        }
        const galleryItems = photos.map((photo) => ({
          imageUrl: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          imageAlt: photo.title,
        }));
        this.setState({ galleryItems });
      })
      .catch((error) => {
        console.error('Ошибка при загрузке изображений:', error);
      });
  };

  handleInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleSearchButtonClick = () => {
    this.searchPhotos();
  };

  handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchPhotos();
    }
  };

  handleClearInputClick = () => {
    this.setState({ searchText: '' });
  };

  render() {
    const { galleryItems } = this.state;

    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            id="search-input"
            placeholder="Введите поисковый запрос"
            value={this.state.searchText}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnterKeyPress}
          />
          <button id="search-button" onClick={this.handleSearchButtonClick}>
            Поиск
          </button>
          <span
            id="clear-input"
            className={this.state.searchText ? '' : 'hidden'}
            onClick={this.handleClearInputClick}
          >
            &times;
          </span>
        </div>

        <Gallery galleryItems={galleryItems} />
      </div>
    );
  }
}

export default SearchContainer;
