import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function InputFilter() {
  const { setFilterByName, filterByName } = useContext(Context);
  console.log(filterByName);

  useEffect(() => {
    console.log('atualizei');
  });

  function handleChange({ target }) {
    const obj = { name: target.value };
    setFilterByName(obj);
    // console.log(target);
  }

  return (
    <input
      value={ filterByName.name }
      onChange={ handleChange }
      data-testid="name-filter"
      type="text"
    />
  );
}

export default InputFilter;
