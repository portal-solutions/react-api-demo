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
import ApiProvider from './ApiContext';
import PageMetadataProvider from './PageMetadataContext';

/**
 * A context provider that provides all other context providers.
 */
const AppProviders = ({ children }) => (
  <ApiProvider>
    <PageMetadataProvider>{children}</PageMetadataProvider>
  </ApiProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProviders;
