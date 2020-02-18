/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React from 'react';
import ApiProvider from './ApiProvider';
import PageMetadataProvider from './PageMetadataProvider';

const AppProvider = ({ children }) => (
  <ApiProvider>
    <PageMetadataProvider>{children}</PageMetadataProvider>
  </ApiProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
