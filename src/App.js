import React from 'react';
import './App.css';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import Provider from './context/Provider';
import Formulario from './components/Formulario';

function App() {
  return (
    <Provider>
      <InputFilter />
      <Formulario />
      <Table />
    </Provider>
  );
}

export default App;
