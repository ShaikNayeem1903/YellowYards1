import React from 'react'
import AuthLayout from '../../../components/common/AuthLayout'
import Button from '../../../components/common/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, View, Text } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { Controller, useForm } from 'react-hook-form'
import OTPInput from '../../../components/common/OtpComponent'


const Verify = ({navigation}:any) => {


    const {
  control,
  handleSubmit,
} = useForm({
  defaultValues: {
    otp: '',
  },
});

const onSubmit = () => {
    
      navigation.navigate('SetPassword');
  };
  

   

  return (
    <SafeAreaView style={styles.container}>
      <AuthLayout
  title="Verify OTP"
  subtitle="We have sent an OTP to your registered email address ron****@gmail.com"
>


<Controller
  control={control}
  name="otp"
  rules={{
    required: 'OTP is required',
    minLength: {
      value: 4,
      message: 'Enter complete OTP',
    },
  }}
  render={({ field: { onChange, value } }) => (
    <OTPInput value={value} onChange={onChange} />
  )}
/>


      
      
 <Button title="Submit" containerStyle={styles.button} onPress={handleSubmit(onSubmit)}/>

<View style={styles.continueWithView}>
  <Text style={styles.continueWithText}>Didn’t got OTP? Resend</Text>
</View>


  
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
        
  color: '#FF4D4F', 
  fontSize: 15,
  marginBottom: verticalScale(15),
},

 
    label: {
  fontSize: moderateScale(14),
  fontWeight:'bold',
  color: '#444',
  marginBottom: moderateScale(5),
  paddingLeft:moderateScale(5)

              },
continueWithView:{

  marginTop:verticalScale(20)
},
continueWithText:{
  textAlign:'center',
  fontWeight:'semibold',
  fontSize:moderateScale(16)
},
button:{
    marginTop:verticalScale(25

    )
}


})

export default Verify