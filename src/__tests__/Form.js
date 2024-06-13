import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Components/Form';

describe('Form Component', () => {
  test('renders the form with all fields', () => {
    const { asFragment } = render(<Form />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(asFragment).toMatchSnapshot();

  });

  test('submits the form with the correct data', () => {
    render(<Form />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });

    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello!');
  });
});
