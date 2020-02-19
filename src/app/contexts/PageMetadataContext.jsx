/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const Context = createContext();
const usePageMetadata = () => useContext(Context);

usePageMetadata.types = {
  pageTitle: 'PAGE_TITLE'
};

const reducer = (state, action) => {
  switch (action.type) {
    case usePageMetadata.types.pageTitle:
      return { pageTitle: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const PageMetadataProvider = ({ children }) => {
  const [pageMetadata, dispatch] = useReducer(reducer, {});
  return <Context.Provider value={{ dispatch, pageMetadata }}>{children}</Context.Provider>;
};

const usePageTitle = (pageTitle) => {
  const { dispatch } = usePageMetadata();
  useEffect(() => dispatch({ type: usePageMetadata.types.pageTitle, payload: pageTitle }), [dispatch, pageTitle]);
};

PageMetadataProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageMetadataProvider;
export { usePageMetadata, usePageTitle };
