// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoPlasma title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoPlasma/i);
    expect(titleElement).toBeInTheDocument();
});
