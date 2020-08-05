import React, { Fragment } from 'react';
import { Avatar } from '.';

export default { title: 'Components|Avatar' };

export const defaultAvatar = () => (
  <Fragment>
    <Avatar />
  </Fragment>
);

export const wisthSize = () => (
  <Fragment>
    <Avatar size={200} />
  </Fragment>
);
