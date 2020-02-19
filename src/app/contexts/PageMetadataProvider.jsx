/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const PageMetadataContext = createContext();

const PageMetadataProvider = ({ children }) => {
  const [pageMetadata, setPageMetadata] = useState({
    pageTitle: 'React API demo'
  });

  return (
    <PageMetadataContext.Provider value={{ pageMetadata, setPageMetadata }}>{children}</PageMetadataContext.Provider>
  );
};

const usePageMetadata = () => useContext(PageMetadataContext);

PageMetadataProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageMetadataProvider;
export { usePageMetadata };
