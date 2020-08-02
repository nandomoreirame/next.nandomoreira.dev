import React from 'react';
import { create } from 'react-test-renderer';
import { Hero } from '.';

describe('<Hero />', () => {
  it('Render component', () => {
    const componentTree = create(<Hero />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('Render component with prop text', () => {
    const componentTree = create(<Hero>Hello</Hero>).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
