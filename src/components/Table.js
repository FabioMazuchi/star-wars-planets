import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

const NUMBER_3 = 3;

function Table() {
  const value = useContext(Context);
  const [filterOne, setFilterOne] = useState([]);
  const [filterTwo, setFilterTwo] = useState([]);
  const { data, setData, filterByName, filterByNumericValues } = value;
  const { name: nome } = filterByName;

  function filtroUm() {
    const array = [];
    let check = false;
    const { column, comparsion, value: valor } = filterByNumericValues[0];

    data.forEach((dat) => {
      const col = Number(dat[column]);
      const val = Number(valor);
      if (comparsion === 'maior que') {
        check = col > val;
        if (check) {
          array.push(dat);
        }
      }
      if (comparsion === 'menor que') {
        check = col < val;
        if (check) {
          array.push(dat);
        }
      }
      if (comparsion === 'igual a') {
        check = col === val;
        if (check) {
          array.push(dat);
        }
      }
    });
    setFilterOne(array);
    setData(array);
  }

  function filtroDois() {
    const array2 = [];
    let check = false;
    const { column, comparsion, value: valor } = filterByNumericValues[1];
    filterOne.forEach((dat) => {
      const col = Number(dat[column]);
      const val = Number(valor);
      if (comparsion === 'maior que') {
        check = col > val;
        if (check) {
          array2.push(dat);
        }
      }
      if (comparsion === 'menor que') {
        check = col < val;
        if (check) {
          array2.push(dat);
        }
      }
      if (comparsion === 'igual a') {
        check = col === val;
        if (check) {
          array2.push(dat);
        }
      }
    });
    setFilterTwo(array2);
    setData(array2);
  }

  function filtroTres() {
    const array3 = [];
    let check = false;
    const { column, comparsion, value: valor } = filterByNumericValues[2];
    filterTwo.forEach((dat) => {
      const col = Number(dat[column]);
      const val = Number(valor);
      if (comparsion === 'maior que') {
        check = col > val;
        if (check) {
          array3.push(dat);
        }
      }
      if (comparsion === 'menor que') {
        check = col < val;
        if (check) {
          array3.push(dat);
        }
      }
      if (comparsion === 'igual a') {
        check = col === val;
        if (check) {
          array3.push(dat);
        }
      }
    });
    setData(array3);
  }

  useEffect(() => {
    if (filterByNumericValues.length === 1) {
      filtroUm();
    }
    if (filterByNumericValues.length === 2) {
      filtroDois();
    }
    if (filterByNumericValues.length === NUMBER_3) {
      filtroTres();
    }
  }, [filterByNumericValues]);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      <tbody>
        {data
          .filter(({ name }) => name.toLowerCase().includes(nome.toLowerCase()))
          .map(
            ({
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ name }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films.map((film) => film)}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ),
          )}
      </tbody>
    </table>
  );
}

export default Table;
