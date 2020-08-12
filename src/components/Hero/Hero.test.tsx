import React from 'react';
import { render } from '@testing-library/react';
import { Hero } from '.';

describe('<Hero />', () => {
  test('Render component', () => {
    const componentTree = render(<Hero />);
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with children prop', () => {
    const componentTree = render(
      <Hero>
        <h1>Hello</h1>
      </Hero>,
    );
    expect(componentTree).toMatchSnapshot();
  });
});
