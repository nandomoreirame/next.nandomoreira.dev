import React, { Fragment } from 'react';
import { Avatar } from '.';

export default { title: 'Components|Avatar' };

export const defaultAvatar = () => (
  <Fragment>
    <Avatar />
  </Fragment>
);

export const withSize = () => (
  <Fragment>
    <Avatar width={200} />
  </Fragment>
);
