/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';
import React from 'react';
import { Spinner as ReactSpinner } from 'reactstrap';

const Spinner = ({ text, ...props }) => (
  <div className="text-center">
    <p>{text}</p>
    <ReactSpinner size="xl" {...props} />
  </div>
);

Spinner.propTypes = {
  text: PropTypes.string.isRequired
};

export default Spinner;
