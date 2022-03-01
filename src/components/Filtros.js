import React, { useContext, useEffect } from "react";
import Context from "../context/Context";

const FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filtros() {
  const { filterByNumericValues, setFilterByNumericValues, setFilters, setColumn, removeAll, setRemoveAll} =
    useContext(Context);

  function removerFiltros(i, column) {
    const filtros = filterByNumericValues.slice();
    filtros.splice(i, 1);
    setFilterByNumericValues(filtros);
    setFilters((prev) => [...prev, column]);
  }

  function removerAll() {
    setFilterByNumericValues([]);
    setFilters(FILTERS);
    setRemoveAll(!removeAll);
  }

  return (
    <>
      <ul>
        {filterByNumericValues.map(({ column, comparsion, value }, i) => (
          <li data-testid="filter" key={column}>
            {`${column} ${comparsion} ${value}`}
            <button
              type="button"
              onClick={() => removerFiltros(i, column)}
              data-testid="button-remove-filters"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button onClick={removerAll} data-testid='button-remove-filters' type="button">Remover All</button>
    </>
  );
}

export default Filtros;
