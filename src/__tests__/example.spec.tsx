import { render } from '@testing-library/react-native';

import App from '@src/app';

const sum = (a: number, b: number) => a + b;

describe('Test example', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should render App', () => {
    render(<App />);
  });
});
