import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";

const FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Formulario() {
  const [column, setColumn] = useState("population");
  const [comparsion, setComparsion] = useState("maior que");
  const [value, setValue] = useState("0");
  const [filters, setFilters] = useState(FILTERS);
  const { filterByNumericValues, setFilterByNumericValues } =
    useContext(Context);

  function addObj() {
    const obj = {
      column,
      comparsion,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, obj]);
  }

  useEffect(() => {
    filterByNumericValues.forEach(element => {
      const valor = Object.values(element)[0];
      const filtros = filters.slice();
      const indice = filtros.indexOf(valor);
      console.log(indice);
      console.log('valor: ' + valor);
      if (indice !== -1) {
        filtros.splice(indice, 1);
      }
      console.log(filtros);
      setFilters(filtros);
      setColumn(filtros[0]);
    });
 
  }, [filterByNumericValues]);

  return (
    <form>
      <select
        value={column}
        onChange={({ target }) => setColumn(target.value)}
        data-testid="column-filter"
      >
        {filters.map((filter => (
          <option key={filter}>{filter}</option>
        )))}
      </select>
      <select
        value={comparsion}
        onChange={({ target }) => setComparsion(target.value)}
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        data-testid="value-filter"
        type="number"
      />
      <button onClick={addObj} data-testid="button-filter" type="button">
        Filtrar
      </button>
    </form>
  );
}

export default Formulario;
