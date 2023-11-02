import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    const { galleryItems } = this.props;

    return (
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <img key={index} src={item.imageUrl} alt={item.imageAlt} />
        ))}
      </div>
    );
  }
}

export default Gallery;