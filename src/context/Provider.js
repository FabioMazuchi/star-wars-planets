import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../helpers/fetchApi';
import removeKeyObj from '../helpers/removeKeyObj';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  async function getApi() {
    const listApi = await fetchApi();
    const results = removeKeyObj(listApi, 'residents');
    setData(results);
  }

  useEffect(() => {
    getApi();
  }, []);

  const value = { data };

  return <Context.Provider value={ value }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default Provider;
