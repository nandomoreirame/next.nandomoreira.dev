import React from 'react';
import { render } from '@testing-library/react';
import { DarkMode } from '.';

describe('<DarkMode />', () => {
  test('Render component', () => {
    const componentTree = render(<DarkMode />);
    expect(componentTree).toMatchSnapshot();
  });
});
