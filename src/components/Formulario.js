import React, { useContext, useState, useEffect } from 'react';
import FILTERS from '../data';
import Context from '../context/Context';
import Order from './Order';

const MENOS_UM = -1;

function Formulario() {
  const [column, setColumn] = useState('population');
  const [comparsion, setComparsion] = useState('maior que');
  const [value, setValue] = useState('0');
  const { filterByNumericValues, setFilterByNumericValues, filters, setFilters, removeFilter } = useContext(Context);
  const { removeAll } = useContext(Context);

  function addObj() {
    const obj = {
      column,
      comparsion,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, obj]);
  }

  useEffect(() => {
    setColumn('population');
    setFilters(FILTERS);
  }, [removeAll]);

  useEffect(() => {
    setComparsion('maior que');
    setValue('0');
  }, [removeFilter]);
  
  useEffect(() => {
    filterByNumericValues.forEach((element) => {
      const valor = Object.values(element)[0];
      const filtros = filters.slice();
      const indice = filtros.indexOf(valor);
      if (indice !== MENOS_UM) {
        filtros.splice(indice, 1);
      }
      setFilters(filtros);
      setColumn(filtros[0]);
    });
  }, [filterByNumericValues]);

  return (
    <section className='forms'>
      <form className='formulario'>
        <select
          className='person'
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
          data-testid="column-filter"
        >
          {filters.map((filter) => (
            <option key={ filter }>{filter}</option>
          ))}
        </select>
        <select
          className='person'
          value={ comparsion }
          onChange={ ({ target }) => setComparsion(target.value) }
          data-testid="comparison-filter"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          className='person'
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          data-testid="value-filter"
          type="number"
        />
        <button className='button' onClick={ addObj } data-testid="button-filter" type="button">
          Filtrar
        </button>
      </form>
      <Order />
    </section>
  );
}

export default Formulario;
