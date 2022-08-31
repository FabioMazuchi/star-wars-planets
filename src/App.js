import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import Formulario from './components/Formulario';
import Filtros from './components/Filtros';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <Header />
      <Formulario />
      <Filtros />
      <Table />
      <Footer />
    </Provider>
  );
}

export default App;
