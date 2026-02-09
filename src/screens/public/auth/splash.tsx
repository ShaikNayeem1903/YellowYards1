import { View, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../theams/images'
import LinearGradient from 'react-native-linear-gradient'
import { scale, verticalScale } from 'react-native-size-matters'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
const Splash = ({ navigation }: Props) => {

    useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView>

       <LinearGradient
        colors={['rgba(240, 111, 13, 0.31)', 'rgba(255, 255, 255, 0)']}
        style={styles.container}
         start={{ x: 0, y: 0 }} 
         end={{ x: 1, y: 1 }}>
        



      <View>
        <Image
        source={Images.splashScreenDots}
        resizeMode='cover'
        />
      </View>

      <View>

        <Image
        source={Images.splashScreenLogo}
        resizeMode='cover'
        style={styles.logo}
      
        />
      </View>


      <View>
        <Image
        source={Images.splashScreenBottomImage}
        resizeMode='cover'
        />
      </View>


</LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  logo:{
    top:40,
    width: scale(270),
height: verticalScale(270),
aspectRatio:1,
elevation:5


  }
})

export default Splash