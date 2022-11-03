import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';

// it('renders without crashing', () => {
//   const root = ReactDOM.createRoot(document.createElement('div'));
//   render(<App />);
// });
it('renders without crashing', () => {
  act(() => {
    const root = ReactDOM.createRoot(document.createElement('div'));
    root.render(<App />)
  })
});

it('renders h1', () => {
  render(<App />);
  const h1 = screen.getByText(/My React Page/i);
  expect(h1).toBeInTheDocument();
});

it('renders h2', () => {
  render(<App />);
  const h2 = screen.getByText(/This is my first react page.+/i);
  expect(h2).toBeInTheDocument();
});