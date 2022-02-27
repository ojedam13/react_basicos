import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // obetener la fecha
    const fecha = new Date().getFullYear();
    
  return (
    <Fragment>
      <Header 
        titulo='Tienda virtual'
        numero= {20}
      />

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;

