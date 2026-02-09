// import React, { useRef } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import { verticalScale, moderateScale } from 'react-native-size-matters';
// import SmsRetriever from 'react-native-sms-retriever';
// import { useEffect } from 'react';

// interface Props {
//   value: string;
//   onChange: (val: string) => void;
// }

// const OTPInput = ({ value = '', onChange }: Props) => {
//   const inputs = useRef<Array<TextInput | null>>([]);

//   const handleChange = (text: string, index: number) => {
//     if (!/^[0-9]?$/.test(text)) return; 

//     const otpArray = value.split('');
//     otpArray[index] = text;
//     const newOtp = otpArray.join('');
//     onChange(newOtp);

//     if (text && index < 3) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   useEffect(() => {
//   const startSmsListener = async () => {
//     try {
//       await SmsRetriever.startSmsRetriever();

//       SmsRetriever.addSmsListener(event => {
//         const message = event.message || '';
       









        

//         const otp = message.match(/\d{4}/)?.[0]; 

//         if (otp) {
//           console.log('OTP:', otp);
          
//         }

//         SmsRetriever.removeSmsListener();
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   startSmsListener();
// }, []);

//   return (
//     <View style={styles.container}>
//         <View style={styles.box}>
//       {[0, 1, 2, 3].map((_, index) => (
//         <TextInput
//         placeholder='-'
//           key={index}
//            ref={(ref) => {
//             inputs.current[index] = ref;
//           }}
//           style={styles.input}
//           textContentType="oneTimeCode"
//           keyboardType="number-pad"
//           maxLength={1}
//           value={value[index] || ''}
//           onChangeText={(text) => handleChange(text, index)}
//         />
//       ))}
//     </View>
//     </View>
//   );
// };





import React, { useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import SmsRetriever from 'react-native-sms-retriever';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const OTPInput = ({ value = '', onChange }: Props) => {
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (!/^[0-9]?$/.test(text)) return;

    const otpArray = value.split('');
    otpArray[index] = text;
    const newOtp = otpArray.join('');
    onChange(newOtp);

    // move forward
    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (!value[index] && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  // 🔥 Android SMS Auto Read
  useEffect(() => {
    const startSmsListener = async () => {
      try {
        await SmsRetriever.startSmsRetriever();

        SmsRetriever.addSmsListener(event => {
          const message = event.message || '';
          const otp = message.match(/\d{4}/)?.[0];

          if (otp) {
            onChange(otp); // 👈 auto fill boxes
          }

          SmsRetriever.removeSmsListener();
        });
      } catch (error) {
        console.log(error);
      }
    };

    startSmsListener();

    return () => {
      SmsRetriever.removeSmsListener();
    };
  }, []);

  return (
    <View style={styles.box}>
      {[0, 1, 2, 3].map((_, index) => (
        <TextInput
        placeholder="_"
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
          }}
          style={styles.input}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          maxLength={1}
          value={value[index] || ''}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          autoFocus={index === 0} 
        />
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    gap:20,
    marginVertical: 10,
    backgroundColor: 'rgb(249, 249, 244)',
  },

  input: {
    width: 70,
    height: verticalScale(55),
    borderWidth: .5,
    alignItems:'center',
    
    borderRadius: 8,
    
    textAlign: 'center',
    fontSize: moderateScale(18),
  },

  box:{
    flexDirection:'row',
    justifyContent:'center',
    gap:15
  }
});


export default OTPInput;
