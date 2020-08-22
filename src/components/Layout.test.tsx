import React from 'react';
import { createRouter } from 'next/router';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { theme } from '@nandomoreira/styles';
import { Layout } from '.';

const router = createRouter('/', {}, '/', {
  initialProps: {},
  pageLoader: jest.fn(),
  App: jest.fn(),
  Component: jest.fn(),
});

describe('<Layout />', () => {
  test('Render component with dark theme', () => {
    const componentTree = render(
      <RouterContext.Provider value={router}>
        <Layout theme={theme.dark}>Hello Layout</Layout>
      </RouterContext.Provider>,
    );
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with light theme', () => {
    const componentTree = render(
      <RouterContext.Provider value={router}>
        <Layout theme={theme.light}>Hello Layout</Layout>
      </RouterContext.Provider>,
    );
    expect(componentTree).toMatchSnapshot();
  });
});
