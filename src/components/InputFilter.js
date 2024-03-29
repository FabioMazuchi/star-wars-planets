import React, { useContext } from 'react';
import Context from '../context/Context';

function InputFilter() {
  const { setFilterByName, filterByName } = useContext(Context);

  function handleChange({ target }) {
    const obj = { name: target.value };
    setFilterByName(obj);
  }

  return (
    <input
      className='person'
      value={ filterByName.name }
      onChange={ handleChange }
      data-testid="name-filter"
      type="text"
      placeholder='Pesquise pelo nome do planeta...'
    />
  );
}

export default InputFilter;
