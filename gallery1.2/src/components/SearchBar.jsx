import React from 'react';

import '../styles/SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { input: '' }
        this.searchHandler = this.searchHandler.bind(this);

        this.searchHandler();
    }

    componentDidMount() {
        this.inputRef.focus();
    }

    async searchHandler() {
        const apiUrl = 'https://api.flickr.com/services/rest/';
        const apiKey = '1febc1f31c0768da279d56263b6fec8a';

        const request = this.state.input.trim();
        let response;

        try {
            if (request === '') {
                response = await fetch(`${apiUrl}?method=flickr.photos.search&api_key=${apiKey}&text=tree&per_page=12&format=json&nojsoncallback=1&safe_search=1`)
            }
            else {
                response = await fetch(`${apiUrl}?method=flickr.photos.search&api_key=${apiKey}&text=${request}&per_page=12&format=json&nojsoncallback=1&safe_search=1`)
            }

            var data = await response.json();

            this.props.updateGallery(data.photos.photo.map(image => (
                {
                    id: image.id,
                    imageUrl: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
                    imageAlt: image.title,
                }
            )));
        }
        catch (error) {
            console.log('Error has occured while loading the photos.');
            this.props.updateGallery([]);
        }
    }

    render() {
        return <div className="SearchBar">
            <input
                type="search"
                ref={ref => (this.inputRef = ref)}
                id="search-input"
                value={this.state.input}
                onChange={event => this.setState({ input: event.target.value })}
                onKeyUp={event => {
                    if (event.key === 'Enter') {
                        this.searchHandler();
                    }
                }}
                autoComplete="off"
                placeholder="Type here to search"
            />
            <button id="search-button" onClick={this.searchHandler}>search</button>
        </div>
    }
}

export default SearchBar;