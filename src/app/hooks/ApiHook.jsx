/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable import/prefer-default-export */

import config from '../../config';

/**
 * XXX :: GjB :: fix or remove me!
 */
const useApi = () => {
  return {
    getEmployees: async () => (await fetch(config.api.employeesUri)).json()
  };
};

export { useApi };
