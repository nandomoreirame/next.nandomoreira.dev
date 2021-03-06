import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '.';

describe('<Logo />', () => {
  test('Render component', () => {
    const componentTree = render(<Logo />);
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with href prop', () => {
    const componentTree = render(<Logo href="/" />);
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with title prop', () => {
    const componentTree = render(<Logo title="Fernando" />);
    expect(componentTree).toMatchSnapshot();
  });
});
