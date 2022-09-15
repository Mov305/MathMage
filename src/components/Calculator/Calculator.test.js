import { render, screen } from '@testing-library/react';
import Calculator from '.';

test('renders learn react link', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/some math/i);
  expect(linkElement).toBeInTheDocument();
});
