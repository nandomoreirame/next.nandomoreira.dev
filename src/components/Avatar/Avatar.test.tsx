import React from 'react';
import { create } from 'react-test-renderer';
import { Avatar } from '.';

describe('<Avatar />', () => {
  it('Render component', () => {
    const componentTree = create(<Avatar />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('Render component with src prop', () => {
    const componentTree = create(<Avatar src="/images/avatar.png" />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
