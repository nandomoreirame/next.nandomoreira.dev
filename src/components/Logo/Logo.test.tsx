import React from 'react';
import { create } from 'react-test-renderer';
import { Logo } from '.';

describe('<Logo />', () => {
  it('Render component', () => {
    const componentTree = create(<Logo />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
