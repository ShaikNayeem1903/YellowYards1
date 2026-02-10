import React from 'react'
import AuthLayout from '../../../components/common/AuthLayout'
import Button from '../../../components/common/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons';




type FormData = {
  email: string;
};

const Login = ({navigation}:any) => {

  

    const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Email:', data.email);
      navigation.navigate('Verify');
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
  
 <Button title="Continue" onPress={handleSubmit(onSubmit)} />

<View style={styles.continueWithView}>
  <Text style={styles.continueWithText}>Or Continue with</Text>
</View>

<TouchableOpacity style={styles.mobileNumberBtn}>
      <Icon name="phone" size={30} color="#F39519" />
      <Text style={styles.mobileNumberText}>Mobile Number</Text>
</TouchableOpacity>
  
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
  paddingLeft:moderateScale(5),
},
continueWithView:{

  marginTop:verticalScale(20)
},
continueWithText:{
  textAlign:'center',
  fontWeight:'semibold',
  fontSize:moderateScale(16)
},
mobileNumberBtn:{
  flexDirection:'row',
  borderWidth:2,
justifyContent:'center',
alignItems:'center',
borderRadius:8,
marginTop:verticalScale(20),
borderColor:'#F39519',
height:verticalScale(40),
gap:30
},
mobileNumberText:{
  fontSize:18




  }
})

export default Login