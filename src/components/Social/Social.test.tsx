import React from 'react';
import { render } from '@testing-library/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { Social } from '.';

describe('<Social />', () => {
  test('Render component', () => {
    const componentTree = render(<Social />);
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with socialLinks prop', () => {
    const componentTree = render(
      <Social
        socialLinks={[
          {
            title: 'Github',
            link: 'https://github.com/nandomoreirame',
            icon: <AiOutlineGithub />,
          },
        ]}
      />,
    );
    expect(componentTree).toMatchSnapshot();
  });
});
