import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";

function Order() {
  const [column, setColumn] = useState("population");
  const [radio, setRadio] = useState("");
  const { filters, order, setOrder, data, setData } = useContext(Context);

  function addObjOrder() {
    const obj = {column, radio};
    setOrder(obj);
    console.log('oi');
  }

  function ordenar() {
    const { column, radio } = order;
    const copy = data.slice();
    console.log(copy);
    if (radio !== '') {
      if (radio === 'ASC') {
        copy.sort((a, b) => Number(a[column]) < Number(b[column]) ? -1 : 0);
      } else {
        copy.sort((a, b) => Number(a[column]) > Number(b[column]) ? -1 : 1);
      }
    }
    console.log(copy);
    setData(copy);
  } 

  useEffect(() => {
    ordenar();
  }, [order]);

  return (
    <form className="order">
      <select
        className='person'
        value={column}
        onChange={({ target }) => setColumn(target.value)}
        data-testid="column-sort"
      >
        {filters.map((filter) => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
      <label className={radio === 'ASC' ? 'selected person' : 'person'} htmlFor="asc">
        Crescente
        <input
          onChange={() => setRadio('ASC')}
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          name="order"
          value="ASC"
        />
      </label>
      <label className={radio === 'DESC' ? 'selected person' : 'person'} htmlFor="desc">
        Decrescente
        <input
          onChange={() => setRadio('DESC')}
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          name="order"
          value="DESC"
        />
      </label>
      <button className="button" onClick={addObjOrder} data-testid='column-sort-button' type="button">Ordenar</button>
    </form>
  );
}

export default Order;
