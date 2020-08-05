import React from 'react';
import { create } from 'react-test-renderer';
import { Hero } from '.';

describe('<Hero />', () => {
  it('Render component', () => {
    const componentTree = create(<Hero />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('Render component with children prop', () => {
    const componentTree = create(
      <Hero>
        <h1>Hello</h1>
      </Hero>,
    ).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
