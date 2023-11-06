import React from 'react';
import Header from './Header';
import SearchContainer from './SearchContainer';
import Gallery from './Gallery';
import Footer from './Footer';


import '../styles/App.css';

class App extends React.Component {
  render() {
    const apiUrl = 'https://api.flickr.com/services/rest/';
    const apiKey = '1febc1f31c0768da279d56263b6fec8a';

    return (
      <div className="App">
        <Header />
        <main>
          <SearchContainer apiUrl={apiUrl} apiKey={apiKey} />
          <Gallery/>
        </main>
        <Footer /> 
      </div>
    );
  }
}

export default App;