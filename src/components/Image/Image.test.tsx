import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '.';

describe('<Image />', () => {
  test('Render component', () => {
    const componentTree = render(<Image />);
    expect(componentTree).toMatchSnapshot();
  });
});
