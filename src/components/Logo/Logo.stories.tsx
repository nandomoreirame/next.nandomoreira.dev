import React, { Fragment } from 'react';
import { Logo } from '.';

export default { title: 'Components|Logo' };

export const defaultLogo = () => (
  <Fragment>
    <Logo />
  </Fragment>
);

export const withLink = () => (
  <Fragment>
    <Logo href="https://nandomoreira.dev" />
  </Fragment>
);
