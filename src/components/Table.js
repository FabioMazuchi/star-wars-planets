import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";

function Table() {
  const value = useContext(Context);
  const [filter_one, setFilter_one] = useState([]);
  const [filter_two, setFilter_two] = useState([]);
  const [filter_tree, setFilter_tree] = useState([]);
  const { data, setData, filterByName, filterByNumericValues } = value;
  const { name: nome } = filterByName;

  function filterOne() {
    let array = [];
    const { column, comparsion, value } = filterByNumericValues[0];
    data.forEach((dat) => {
      const col = Number(dat[column]);
      const val = Number(value);
      if (comparsion === "maior que") {
        if (col > value) {
          array.push(dat);
        }
      }
      if (comparsion === "menor que") {
        if (col < val) {
          array.push(dat);
        }
      }
      if (comparsion === "igual a") {
        console.log("IGUAL");
        if (col === val) {
          console.log("IGUAL");
          array.push(dat);
        }
      }
    });
    console.log(array);
    setFilter_one(array);
    setData(array);
  }

  function filterTwo() {
    let array = [];
    const { column, comparsion, value } = filterByNumericValues[1];
    filter_one.forEach((dat) => {
      const col = Number(dat[column]);
      const val = Number(value);
      if (comparsion === "maior que") {
        if (col > value) {
          array.push(dat);
        }
      }
      if (comparsion === "menor que") {
        if (col < val) {
          array.push(dat);
        }
      }
      if (comparsion === "igual a") {
        console.log("IGUAL");
        if (col === val) {
          console.log("IGUAL");
          array.push(dat);
        }
      }
    });
    console.log(array);
    setFilter_two(array);
    setData(array);
  }

  function filterTree() {
    let array = [];
    const { column, comparsion, value } = filterByNumericValues[2];
    filter_two.forEach((dat) => {
      const col = Number(dat[column]);
      const val = Number(value);
      if (comparsion === "maior que") {
        if (col > value) {
          array.push(dat);
        }
      }
      if (comparsion === "menor que") {
        if (col < val) {
          array.push(dat);
        }
      }
      if (comparsion === "igual a") {
        console.log("IGUAL");
        if (col === val) {
          console.log("IGUAL");
          array.push(dat);
        }
      }
    });
    console.log(array);
    setFilter_tree(array);
    setData(array);
  }

  useEffect(() => {
    if (filterByNumericValues.length === 1) {
      filterOne();
    }
    if (filterByNumericValues.length === 2) {
      filterTwo();
    }
    if (filterByNumericValues.length === 3) {
      filterTree();
    }
  }, [filterByNumericValues]);

  {
    /* .filter((dat) => {
            let check = false;
            if (filterByNumericValues.length === 0) {
              check = true;
            } else {
              filterByNumericValues.forEach(({ column, comparsion, value: valor }) => {
                if (comparsion === 'menor que') {
                  check = Number(dat[column]) < Number(valor);
                  setData(dat);
                }
                if (comparsion === 'maior que') {
                  check = Number(dat[column]) > Number(valor);
                  setData(dat);
                }
                if (comparsion === 'igual a') {
                  check = Number(dat[column]) === Number(valor);
                }
              });
            }
            return check;
          }) */
  }

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
              <tr key={name}>
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
            )
          )}
      </tbody>
    </table>
  );
}

export default Table;
