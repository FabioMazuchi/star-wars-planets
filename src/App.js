import React from 'react';
import './App.css';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputFilter />
      <Table />
    </Provider>
  );
}

export default App;
