import React, { Fragment } from 'react';
import { Hero } from '@nandomoreira/components';

const NotFoundPage = () => {
  return (
    <Fragment>
      <Hero>
        <h1>Oops...</h1>
        <p>Page not found :,(</p>
      </Hero>
    </Fragment>
  );
};

export default NotFoundPage;
