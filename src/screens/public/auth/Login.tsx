import React from 'react'
import AuthLayout from '../../../components/common/AuthLayout'
import Button from '../../../components/common/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters'


type FormData = {
  email: string;
};

const Login = () => {

    const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Email:', data.email);
  };


  return (
    <SafeAreaView style={styles.container}>
      <AuthLayout
  title="Login or Sign Up"
  subtitle="It is a long established fact that a reader will be distracted by the readable content of"
>

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
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.textInputBox}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Enter email address"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              
            />
          </View>
        )}
      />

      {errors.email && (
        <Text style={styles.emailTextError}>
          {errors.email.message}
        </Text>
      )}
  
  <Button title="Continue" onPress={onSubmit} />
  
</AuthLayout>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

    textInputBox:{
             borderWidth: 1.5,
                borderColor: ' rgba(237, 236, 207, 1)',
                padding: 15,
                borderRadius: 8,
                height:verticalScale(60),
                backgroundColor:' rgba(249, 249, 244, 1)',
                marginBottom:20
                

    },
    emailTextError:{
         color: 'red', marginTop: 5
    },
    label: {
  fontSize: moderateScale(14),
  fontWeight:'bold',
  color: '#444',
  marginBottom: moderateScale(5),
  paddingLeft:moderateScale(5),
},
})

export default Login