// Import the render and screen functions from the testing library
import { render, screen } from '@testing-library/react';

// Import the App component
import App from './App';

// Define a test case
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Search for an element that contains the text "learn react"
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
