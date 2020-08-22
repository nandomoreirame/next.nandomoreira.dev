import React from 'react';
import { createRouter } from 'next/router';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { Head } from '.';

const router = createRouter('/', {}, '/', {
  initialProps: {},
  pageLoader: jest.fn(),
  App: jest.fn(),
  Component: jest.fn(),
});

describe('<Head />', () => {
  test('Render component', () => {
    const componentTree = render(
      <RouterContext.Provider value={router}>
        <Head />
      </RouterContext.Provider>,
    );
    expect(componentTree).toMatchSnapshot();
  });
});
