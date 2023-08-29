import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PDFReader = ({ pdfUrl }) => {
  const [pdfSource, setPdfSource] = useState(null);
  const [orientation, setOrientation] = useState('PORTRAIT'); // Default orientation

  useEffect(() => {
    const loadPdf = async () => {
      // Check if the PDF is downloaded
      const pdfPath = await AsyncStorage.getItem(pdfUrl);
      if (pdfPath) {
        setPdfSource({ uri: pdfPath });
      }
    };

    loadPdf();
  }, [pdfUrl]);

  const handleDownloadPdf = async () => {
    const response = await fetch(pdfUrl);
    const pdfBlob = await response.blob();

    const pdfPath = `${FileSystem.cacheDirectory}${pdfUrl.split('/').pop()}`;
    await AsyncStorage.setItem(pdfUrl, pdfPath);

    setPdfSource({ uri: pdfPath });
  };

  const handleOrientationChange = ({ window: { width, height } }) => {
    setOrientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <View>
      <Pdf
        source={pdfSource}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of Pages: ${numberOfPages}, File Path: ${filePath}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current Page: ${page}/${numberOfPages}`);
        }}
        onError={(error) => {
          console.log('Error while loading PDF:', error);
        }}
        style={orientation === 'LANDSCAPE' ? { width: '100%', height: '100%' } : { flex: 1 }}
      />
      {!pdfSource && <Button title="Download PDF" onPress={handleDownloadPdf} />}
    </View>
  );
};

export default PDFReader;
