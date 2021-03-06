import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '.';

describe('<Avatar />', () => {
  test('Render Avatar Component', () => {
    const component = render(<Avatar />);
    expect(component).toMatchSnapshot();
  });

  test('Render component with alt and src props', () => {
    const component = render(<Avatar alt="alternative text to image" src="/images/avatar.png" />);
    expect(component).toMatchSnapshot();
  });

  test('Render component with alt, src and width props', () => {
    const component = render(
      <Avatar alt="alternative text to image" src="/images/avatar.png" width={300} />,
    );
    expect(component).toMatchSnapshot();
  });
});
