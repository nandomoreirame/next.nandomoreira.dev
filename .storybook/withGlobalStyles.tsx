import { Fragment } from 'react';
import { StoryFn } from '@storybook/addons';
import { GlobalStyles } from '../src/styles';

const Wrapper = (storyFn: StoryFn) => (
  <Fragment>
    <GlobalStyles />
    {storyFn()}
  </Fragment>
);

export default Wrapper;
