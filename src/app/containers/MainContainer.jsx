/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Container } from 'reactstrap';
import * as config from '../../config';
import { usePageMetadata } from '../contexts/PageMetadataProvider';

const PageTitle = () => {
  const { pageMetadata } = usePageMetadata();

  if (pageMetadata.pageTitle) {
    return (
      <>
        <CardHeader tag="h1" className="h4 font-weight-bold">
          {pageMetadata.pageTitle}
        </CardHeader>
      </>
    );
  }

  return null;
};

const MainContainer = ({ children }) => {
  return (
    <Container className="py-3">
      <Col md="10" lg="8" className="mx-auto">
        <div className="text-right" style={{ fontSize: '75%' }}>
          <em>
            <code>
              v{config.application.version} ({config.application.gitCommit}, {config.application.dateModified})
            </code>
          </em>
        </div>
        <Card color="light shadow">
          <PageTitle />
          <CardBody>{children}</CardBody>
        </Card>
        <div className="small text-muted text-right">
          View source on{' '}
          <a
            href="https://gccode.ssc-spc.gc.ca/iitb-dgiit/PortalSolutions/samples-and-examples/react-api-demo"
            rel="noopener noreferrer"
            target="_blank">
            GCCode
            <sup>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 small" />
            </sup>
          </a>
        </div>
      </Col>
    </Container>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContainer;
