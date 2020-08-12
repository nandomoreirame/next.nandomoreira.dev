import React from 'react';
import { render } from '@testing-library/react';
import { IconSun } from '.';

describe('<IconSun />', () => {
  test('Render component', () => {
    const componentTree = render(<IconSun />);
    expect(componentTree).toMatchSnapshot();
  });
});
