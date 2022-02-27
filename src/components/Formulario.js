import React, { useContext, useState } from "react";
import Context from "../context/Context";

function Formulario() {
  const [column, setColumn] = useState("population");
  const [comparsion, setComparsion] = useState("maior que");
  const [value, setValue] = useState('0');
  const { filterByNumericValues, setFilterByNumericValues, setFiltrou } =
    useContext(Context);

  function addObj() {
    const obj = {
      column,
      comparsion,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, obj]);
    setFiltrou(true);
  }

  return (
    <form>
      <select
        value={column}
        onChange={({ target }) => setColumn(target.value)}
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
