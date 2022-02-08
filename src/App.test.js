import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('App test suite', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('tests that App is rendered', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });

  it("tests if div element has the class 'App'", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('App');
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
