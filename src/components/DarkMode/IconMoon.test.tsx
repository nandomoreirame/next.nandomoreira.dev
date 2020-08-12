import React from 'react';
import { render } from '@testing-library/react';
import { IconMoon } from '.';

describe('<IconMoon />', () => {
  test('Render component', () => {
    const componentTree = render(<IconMoon />);
    expect(componentTree).toMatchSnapshot();
  });
});
