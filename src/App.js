import React from 'react';

import { Footer, Men, Features, Women, Header } from './containers';
import { Cart, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />    
    <Footer />
  </div>
);

export default App;
