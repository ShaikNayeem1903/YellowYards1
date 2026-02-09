import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../theams/images'
import LinearGradient from 'react-native-linear-gradient'
import { scale, verticalScale } from 'react-native-size-matters'

const Splash = () => {
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