/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import preval from 'preval.macro';

const api = {
  getEmployeesUri: 'http://dummy.restapiexample.com/api/v1/employees'
};

const application = {
  dateModified: preval('module.exports = new Date().toISOString()'),
  debug: process.env.REACT_APP_DEBUG,
  gitCommit: preval(`
    module.exports = require("child_process")
      .execSync("git rev-parse HEAD")
      .toString()
      .substring(0, 8)
  `),
  version: process.env.REACT_APP_VERSION
};

export { api, application };
