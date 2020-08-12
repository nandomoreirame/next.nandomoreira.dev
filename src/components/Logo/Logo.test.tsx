import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '.';

describe('<Logo />', () => {
  test('Render component', () => {
    const componentTree = render(<Logo />);
    expect(componentTree).toMatchSnapshot();
  });
});
