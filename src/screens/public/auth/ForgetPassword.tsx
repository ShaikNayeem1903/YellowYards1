import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../../../components/common/AuthLayout';
import Button from '../../../components/common/Button';
import { Controller, useForm } from 'react-hook-form';
import { moderateScale, verticalScale } from 'react-native-size-matters';

type FormData = {
  email: string;
};

const ForgotPassword = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Reset email:', data.email);

    // Later:
    // Call API → Send OTP → Navigate to Verify OTP
    // navigation.navigate('VerifyOTP');

    navigation.navigate('ResetPassword')
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthLayout
        title="Forgot Password?"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of"
      >

        {/* EMAIL INPUT */}
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputBox}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                placeholder="Enter email address"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
          )}
        />

        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Button
          title="Continue"
          containerStyle={{ marginTop: verticalScale(10) }}
          onPress={handleSubmit(onSubmit)}
        />

        {/* BACK TO LOGIN */}
        <TouchableOpacity
          style={{ marginTop: verticalScale(20) }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backText}>Back To Login</Text>
        </TouchableOpacity>

      </AuthLayout>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1.5,
    borderColor: 'rgba(237, 236, 207, 1)',
    padding: 15,
    borderRadius: 8,
    height: verticalScale(60),
    backgroundColor: 'rgba(249, 249, 244, 1)',
    marginBottom: 10,
  },

  label: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },

  input: {
    fontSize: moderateScale(14),
  },

  error: {
    color: '#FF4D4F',
    marginBottom: 10,
  },

  backText: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#444',
  },
});

export default ForgotPassword;
