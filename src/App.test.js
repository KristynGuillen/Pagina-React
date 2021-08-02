import { render, screen } from '@testing-library/react';
import Navegador from './navegador';


test('renders learn react link', () => {
  render(<Navegador />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
