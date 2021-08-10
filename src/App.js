import React from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Relators from './layout/Relators';
import Features from './layout/Features';
import Story from './layout/Story';
import Homes from './layout/Homes';
import Gallery from './layout/Gallery';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <div className='container'>
        <Sidebar />
        <Header />
        <Relators />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
