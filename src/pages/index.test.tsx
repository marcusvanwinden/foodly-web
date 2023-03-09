import { render, screen } from '@testing-library/react';
import HomePage from './index';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<HomePage />);

    const heading = screen.getByText(/foodly/i);

    expect(heading).toBeInTheDocument();
  });
});
