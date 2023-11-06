import React, { Component } from 'react';

import '../styles/Gallery.css';


class Gallery extends Component {
  render() {
    const { galleryItems } = this.props;

    if (!galleryItems || galleryItems.length === 0) {
      return <p>Нет результатов</p>;
    }

    return (
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.imageUrl} alt={item.imageAlt} />
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;