// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import Login from './Login';
import Home from './Home';
import Product from './Product';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Mock modules to isolate the modules
jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('App', () => {
  // Reset mocks after each test
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Test 1: Renders App component
  test('renders App component', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
  });

  // Test 2: Renders 'learn react' link
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Test 3: Test Login
  test('submits the correct username and password', () => {
    const mockOnLogin = jest.fn();
    const { getByLabelText, getByRole } = render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.submit(getByRole('button'));

    expect(mockOnLogin).toHaveBeenCalledWith({ username: 'testuser', password: 'password123' });
  });

  // Test 4: Home
  test('Explore button opens the correct URL', () => {
    global.open = jest.fn();
    const { getByText } = render(<Home />);
    fireEvent.click(getByText(/explore/i));
    expect(global.open).toHaveBeenCalledWith('/workouts');
  });

  // Test 5: Products
  test('renders with correct content', () => {
    render(<Product />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Helping you reach our goals faster')).toBeInTheDocument();
    expect(screen.getByAltText('Exercise Illustration')).toBeInTheDocument();
  });
});
