
import '../styles/App.css';
import React from 'react';
import Header from './Header.js';
import SearchContainer from './SearchContainer.js';
import Gallery from './Gallery.js';
import Modal from './Modal.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchContainer />
          <Gallery />
          <Modal />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
