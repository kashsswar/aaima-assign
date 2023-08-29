import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Button } from 'react-native-paper';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here
  };

  return (
    <View style={styles.container}>
      <OTPInputView
        style={styles.otpInput}
        pinCount={6}
        code={otp}
        onCodeChanged={setOtp}
        autoFocusOnLoad
      />
      <Button mode="contained" onPress={handleVerifyOtp}>
        Verify OTP
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    width: '80%',
    height: 100,
  },
});

export default OtpScreen;
