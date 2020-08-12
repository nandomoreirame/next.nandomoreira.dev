import React from 'react';
import { render } from '@testing-library/react';
import { Social } from '.';

describe('<Social />', () => {
  test('Render component', () => {
    const componentTree = render(<Social />);
    expect(componentTree).toMatchSnapshot();
  });
});
