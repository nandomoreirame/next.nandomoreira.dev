import React from 'react';
import { create } from 'react-test-renderer';
import { DarkMode } from '.';

describe('<DarkMode />', () => {
  it('Render component', () => {
    const componentTree = create(<DarkMode />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
