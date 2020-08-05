import React from 'react';
import { create } from 'react-test-renderer';
import { Social } from '.';

describe('<Social />', () => {
  it('Render component', () => {
    const componentTree = create(<Social />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
