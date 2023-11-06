import React from 'react';

import '../styles/Photo.css';

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className='Photo'>
                <img src={this.props.currentImage.imageUrl} alt={this.props.currentImage.imageAlt} />
            </div>
        )
    }
}

export default Photo;