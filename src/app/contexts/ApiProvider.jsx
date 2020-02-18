/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import * as config from '../../config';

const ApiContext = createContext();
const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  const getEmployees = async () => (await fetch(config.api.getEmployeesUri)).json();
  return <ApiContext.Provider value={{ getEmployees }}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ApiProvider;
export { useApi };
