import { render, screen } from '@testing-library/react';
import App from './App';

test('renders content filtering title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Content Filtering System/i);
  expect(linkElement).toBeInTheDocument();
});
