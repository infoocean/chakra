import React from 'react';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import Myroutes from './Myroutes/Router';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Myroutes/>
      <Footer />
    </div>
  );
}
