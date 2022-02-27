import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchApi from "../helpers/fetchApi";
import removeKeyObj from "../helpers/removeKeyObj";
import Context from "./Context";

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: "" });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filtrou, setFiltrou] = useState(false);

  // function filter() {
  //   const final = data.filter((res) => {
  //     let check = false;
  //     filterByNumericValues.forEach((({column, comparsion, value}) => {
  //       if (comparsion === 'maior que') {
  //         check = res[column] > value;
  //       }
  //       if (comparsion === 'menor que') {
  //         check = res[column] < value;
  //       }
  //       if (comparsion === 'igual a') {
  //         check = res[column] === value;
  //       }
  //       console.log(check);
  //     }));
  //     return check;
  //   });
  //   setData(final);
  // }

  async function getApi() {
    const listApi = await fetchApi();
    const results = removeKeyObj(listApi, "residents");
    setData(results);
    // if (filtrou) {
    //   filter();
    // }
  }

  useEffect(() => {
    getApi();
  }, [filterByNumericValues]);

  const value = {
    data,
    filterByName,
    filterByNumericValues,
    setFiltrou,
    setFilterByNumericValues,
    setFilterByName,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default Provider;
