import React from 'react';
import { render } from '@testing-library/react';
import { Skippy } from '.';

describe('<Skippy />', () => {
  test('Render component', () => {
    const componentTree = render(<Skippy />);
    expect(componentTree).toMatchSnapshot();
  });
});
