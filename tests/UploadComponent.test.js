import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UploadComponent from '../components/UploadComponent'; // Update the path accordingly

describe('UploadComponent', () => {
  it('should handle upload', async () => {
    const { getByText } = render(<UploadComponent />);
    const uploadButton = getByText('Upload File');
    fireEvent.press(uploadButton);
    // Add assertions based on your component's behavior
  });

  // Add more test cases as needed
});
