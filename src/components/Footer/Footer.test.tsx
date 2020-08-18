import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  test('Render component', () => {
    const componentTree = render(<Footer />);
    expect(componentTree).toMatchSnapshot();
  });
});
