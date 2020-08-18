import React from 'react';
import { render } from '@testing-library/react';
import { SrOnly } from '.';

describe('<SrOnly />', () => {
  test('Render component', () => {
    const componentTree = render(<SrOnly />);
    expect(componentTree).toMatchSnapshot();
  });
});
