import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../helpers/fetchApi';
import removeKeyObj from '../helpers/removeKeyObj';
import Context from './Context';

const FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filters, setFilters] = useState([FILTERS]);
  const [removeAll, setRemoveAll] = useState(false);

  async function getApi() {
    const listApi = await fetchApi();
    const results = removeKeyObj(listApi, 'residents');
    setData(results);
  }

  useEffect(() => {
    getApi();
  }, []);

  const value = {
    data,
    filterByName,
    filterByNumericValues,
    filters,
    removeAll,
    setData,
    setRemoveAll,
    setFilters,
    setFilterByNumericValues,
    setFilterByName,
  };

  return <Context.Provider value={ value }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default Provider;
