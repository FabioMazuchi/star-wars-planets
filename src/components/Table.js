import React, { useContext, useEffect } from "react";
import Context from "../context/Context";

function Table() {
  const value = useContext(Context);
  const { data, filterByName, filterByNumericValues } = value;

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
          .filter(({ name }) =>
            name.toLowerCase().includes(filterByName.name.toLowerCase())
          )
          .filter((dat) => {
            let check = false;
            if (filterByNumericValues.length === 0) {
              check = true;
            } else {
              filterByNumericValues.forEach(({ column, comparsion, value }) => {
                if (comparsion === 'menor que') {
                  check = Number(dat[column]) < Number(value);
                }
                if (comparsion === 'maior que') {
                  check = Number(dat[column]) > Number(value);
                }
                if (comparsion === 'igual a') {
                  check = Number(dat[column]) === Number(value);
                }
              });
              return check;
            }
            return check;
          })
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
