import React from 'react';
import { create } from 'react-test-renderer';
import { IconSun } from '.';

describe('<IconSun />', () => {
  it('Render component', () => {
    const componentTree = create(<IconSun />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
