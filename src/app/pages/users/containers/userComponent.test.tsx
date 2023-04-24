import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetail from './UserDetail';

describe('test render userlist', () => {
  it('renders component user list success', async () => {
    render(<UserDetail />);

    // expect(screen.getByText('Loading ...')).toBeInTheDocument();
    // expect(screen.getByText('User List')).toBeInTheDocument();
  });
});
