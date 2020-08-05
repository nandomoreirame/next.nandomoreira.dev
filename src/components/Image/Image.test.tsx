import React from 'react';
import { create } from 'react-test-renderer';
import { Image } from '.';

describe('<Image />', () => {
  it('Render component', () => {
    const componentTree = create(<Image />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
