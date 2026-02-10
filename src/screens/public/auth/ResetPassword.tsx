import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../../../components/common/AuthLayout';
import Button from '../../../components/common/Button';
import { Controller, useForm } from 'react-hook-form';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

type FormData = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = ({ navigation }: any) => {
  const [secureNew, setSecureNew] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const newPasswordValue = watch('newPassword');

  const onSubmit = (data: FormData) => {
    console.log('Password Reset:', data);

    // API call here later
    // navigation.navigate('Login');
    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthLayout
        title="Reset Password"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of"
      >

        {/* NEW PASSWORD */}
        <Controller
          control={control}
          name="newPassword"
          rules={{
            required: 'New password is required',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters required',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputBox}>
              <Text style={styles.label}>New Password</Text>
              <View style={styles.row}>
                <TextInput
                  placeholder="Enter new password"
                  secureTextEntry={secureNew}
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => setSecureNew(!secureNew)}>
                  <Icon name={secureNew ? 'eye-off' : 'eye'} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {errors.newPassword && (
          <Text style={styles.error}>{errors.newPassword.message}</Text>
        )}

        {/* CONFIRM PASSWORD */}
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: 'Confirm password is required',
            validate: (value) =>
              value === newPasswordValue || 'Passwords do not match',
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputBox}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.row}>
                <TextInput
                  placeholder="Enter confirm password"
                  secureTextEntry={secureConfirm}
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
                  <Icon name={secureConfirm ? 'eye-off' : 'eye'} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}

        <Button
          title="Submit"
          containerStyle={{ marginTop: verticalScale(25) }}
          onPress={handleSubmit(onSubmit)}
        />

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
    height: verticalScale(65),
    backgroundColor: 'rgba(249, 249, 244, 1)',
    marginBottom: 15,
  },

  label: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: moderateScale(14),
  },

  error: {
    color: '#FF4D4F',
    marginBottom: 10,
  },
});


export default ResetPassword;
