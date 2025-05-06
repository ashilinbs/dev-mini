import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

// Mock useNavigate globally
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login Component', () => {
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
          store[key] = value.toString();
        },
        clear: () => {
          store = {};
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    mockNavigate.mockClear(); // Clear mockNavigate calls before each test
  });

  test('renders login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('shows alert for invalid login', () => {
    window.alert = jest.fn(); // Mock alert

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'wrongpassword' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(window.alert).toHaveBeenCalledWith('Invalid email or password');
  });

  test('logs in successfully with valid credentials', () => {
    window.alert = jest.fn(); // Mock alert

    // Set up a mock user in localStorage
    const mockUser = { email: 'test@example.com', password: 'password123' };
    localStorage.setItem('users', JSON.stringify([mockUser]));

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(window.alert).toHaveBeenCalledWith('Login successful!');
    expect(localStorage.getItem('loggedInUser')).toEqual(JSON.stringify(mockUser));
    expect(mockNavigate).toHaveBeenCalledWith('/register');
  });
});