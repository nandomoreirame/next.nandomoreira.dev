import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image } from '.';

describe('<Image />', () => {
  afterEach(cleanup);

  test('Render component', () => {
    const componentTree = render(<Image />);
    expect(componentTree).toMatchSnapshot();
  });
});
