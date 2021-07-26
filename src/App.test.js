import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const titleElement = screen.getByText(/Simply/i);
  expect(titleElement).toBeInTheDocument();
});
