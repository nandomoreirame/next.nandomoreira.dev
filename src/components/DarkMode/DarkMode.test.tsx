import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { DarkMode } from '.';

describe('<DarkMode />', () => {
  afterEach(cleanup);

  test('Render component', () => {
    const componentTree = render(<DarkMode />);
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with darkModeActive prop', () => {
    const componentTree = render(<DarkMode darkModeActive={false} />);
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with switchToDarkMode prop', () => {
    const componentTree = render(
      <DarkMode switchToDarkMode={() => console.log('switchToDarkMode')} />,
    );
    expect(componentTree).toMatchSnapshot();
  });

  test('Render component with switchToLightMode prop', () => {
    const componentTree = render(
      <DarkMode switchToLightMode={() => console.log('switchToLightMode')} />,
    );
    expect(componentTree).toMatchSnapshot();
  });
});
