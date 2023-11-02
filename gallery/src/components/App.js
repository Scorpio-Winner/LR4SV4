import React from 'react';
import Header from './Header';
import SearchContainer from './SearchContainer';
import Gallery from './Gallery';
import Modal from './Modal';
import Footer from './Footer';

import '../styles/App.css';

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