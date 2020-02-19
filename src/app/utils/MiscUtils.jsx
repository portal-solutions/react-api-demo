/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import preval from 'preval.macro';

const getDateModified = () => {
  return preval(`
    module.exports = new Date()
      .toISOString()
  `);
};

const getGitCommit = () => {
  return preval(`
    module.exports = require("child_process")
      .execSync("git rev-parse HEAD")
      .toString()
      .substring(0, 8)
  `);
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export { getDateModified, getGitCommit, sleep };
