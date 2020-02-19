/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';
import React from 'react';

const Debug = ({ data }) => (
  <pre className="bg-white border overflow-auto small" style={{ maxHeight: '250px' }}>
    {JSON.stringify(data, null, 2)}
  </pre>
);

Debug.propTypes = {
  data: PropTypes.object.isRequired
};

export default Debug;
