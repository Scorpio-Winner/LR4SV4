import React from 'react';
import Photo from './Photo';

import '../styles/Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const photos = this.props.images.map(image =>
            <Photo currentImage={image} key={image.id} />
        );

        const message = this.props.images.length === 0 ? <p>No photos</p> : <></>;

        return (
            <div className='Gallery'>
                {photos}
                {message}
            </div>
        )
    }
}

export default Gallery;