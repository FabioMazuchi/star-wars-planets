import React, { useContext } from "react";
import Context from "../context/Context";
import FILTERS from "../data";

function Filtros() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setFilters,
    removeAll,
    setRemoveAll,
    removeFilter,
    setRemoveFilter,
    filterOne,
    filterTwo,
    setData,
  } = useContext(Context);

  function removerFiltros(i, column) {
    const filtros = filterByNumericValues.slice();
    filtros.splice(i, 1);
    setFilterByNumericValues(filtros);
    setFilters((prev) => [...prev, column]);
    setRemoveFilter(!removeFilter);
    if (i === 0) {
      setData(filterTwo);
    }
    if (i === 1) {
      setData(filterOne);
    }
  }

  function removerAll() {
    setFilterByNumericValues([]);
    setFilters(FILTERS);
    setRemoveAll(!removeAll);
  }

  return (
    <section className="filtros">
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
      <button
        className="button"
        onClick={removerAll}
        data-testid="button-remove-filters"
        type="button"
      >
        Remover Filtros
      </button>
    </section>
  );
}

export default Filtros;
