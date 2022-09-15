import { render, screen } from '@testing-library/react';
import About from '.';

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
