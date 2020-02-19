/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { getDateModified, getGitCommit } from './app/utils/MiscUtils';

const config = {
  api: {
    employeesUri: process.env.REACT_APP_API_EMPLOYEES_URI
  },

  application: {
    dateModified: getDateModified(),
    debug: process.env.REACT_APP_DEBUG,
    gitCommit: getGitCommit(),
    version: process.env.REACT_APP_VERSION
  }
};

export default config;
