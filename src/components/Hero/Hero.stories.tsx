import React, { Fragment } from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Hero } from '.';

export default { title: 'Components|Hero', decorators: [withKnobs] };

export const defaultComponent = () => (
  <Fragment>
    <Hero />
  </Fragment>
);

export const withCustomText = () => (
  <Fragment>
    <Hero>{text('text', 'Soma+')}</Hero>
  </Fragment>
);

export const withCustomDom = () => (
  <Fragment>
    <Hero>
      <h1>Hello</h1>
      <small>This is small</small>
    </Hero>
  </Fragment>
);
