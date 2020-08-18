import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Skippy } from '.';

describe('<Skippy />', () => {
  afterEach(cleanup);

  test('Render component', () => {
    const componentTree = render(<Skippy />);
    expect(componentTree).toMatchSnapshot();
  });
});
