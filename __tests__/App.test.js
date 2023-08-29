import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App'; // Update the path accordingly

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
    // No need to add assertions here; if rendering succeeds, the test will pass
  });
});
