/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable react/jsx-props-no-spreading */

import { faRedo, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useAsync } from 'react-async';
import { Alert, Button } from 'reactstrap';
import Debug from '../components/Debug';
import Spinner from '../components/Spinner';
import { useApi } from '../contexts/ApiProvider';
import { usePageMetadata } from '../contexts/PageMetadataProvider';
import * as config from '../../config';

const MainPage = () => {
  const { getEmployees } = useApi();
  const { setPageMetadata } = usePageMetadata();
  const { data, error, isPending, reload } = useAsync(getEmployees);

  useEffect(() => {
    setPageMetadata({ pageTitle: 'React API demo' });
  }, [setPageMetadata]);

  if (isPending) {
    return <Spinner text="Fetching API data..." />;
  }

  if (error) {
    return (
      <Alert color="danger" className="m-0">
        There was an error fetching data: &quot;<em>{error.message}</em>&quot;.
      </Alert>
    );
  }

  return (
    <>
      <h2 className="h6">
        Response from{' '}
        <a
          href={config.api.getEmployeesUri}
          rel="noopener noreferrer"
          target="_blank"
          title={config.api.getEmployeesUri}>
          Employees API
          <sup>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 small" />
          </sup>
        </a>
      </h2>
      <Debug data={data} />

      <div className="text-right">
        <Button type="button" className="shadow-sm" color="primary" size="sm" onClick={reload}>
          <FontAwesomeIcon icon={faRedo} /> Fetch again...
        </Button>
      </div>
    </>
  );
};

export default MainPage;
