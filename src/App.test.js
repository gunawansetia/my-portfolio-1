import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app loading or initial screen', () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});
