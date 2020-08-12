import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '.';

describe('<Avatar />', () => {
  test('Render component', () => {
    const component = render(<Avatar />);
    expect(component).toMatchSnapshot();
  });

  test('Render component with src prop', () => {
    const component = render(<Avatar src="/images/avatar.png" />);
    expect(component).toMatchSnapshot();
  });
});
