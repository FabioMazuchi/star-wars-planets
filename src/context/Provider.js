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
  const [removeFilter, setRemoveFilter] = useState(false);
  const [filterOne, setFilterOne] = useState([]);
  const [filterTwo, setFilterTwo] = useState([]);
  const [order, setOrder] = useState({ column: '', sort: ''});

  async function getApi() {
    const listApi = await fetchApi();
    const results = removeKeyObj(listApi, 'residents');
    setData(results);
  }

  useEffect(() => {
    if (filterByNumericValues.length === 0) {
      getApi();
    }
  }, [removeAll, removeFilter]);

  const value = {
    data,
    filterByName,
    filterByNumericValues,
    filters,
    removeAll,
    removeFilter,
    filterOne,
    filterTwo,
    order,
    setOrder,
    setFilterOne,
    setFilterTwo,
    setRemoveFilter,
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
