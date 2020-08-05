import React from 'react';
import { create } from 'react-test-renderer';
import { IconMoon } from '.';

describe('<IconMoon />', () => {
  it('Render component', () => {
    const componentTree = create(<IconMoon />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
