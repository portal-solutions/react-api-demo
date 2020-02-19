/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faExternalLinkAlt, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAsync } from 'react-async';
import { Alert, Button } from 'reactstrap';
import config from '../../config';
import Debug from '../components/Debug';
import Spinner from '../components/Spinner';
import { useApi } from '../contexts/ApiProvider';
import { usePageTitle } from '../contexts/PageMetadataProvider';

const MainPage = () => {
  usePageTitle('React API demo');

  const { getEmployees } = useApi();
  const { data, error, isPending, reload } = useAsync(getEmployees);

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
        <a href={config.api.employeesUri} rel="noopener noreferrer" target="_blank" title={config.api.employeesUri}>
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
