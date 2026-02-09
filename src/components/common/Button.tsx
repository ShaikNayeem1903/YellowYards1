import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Button = ({title,onPress}:any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        backgroundColor:'yellow',
        width:scale(315),
height: verticalScale(52),



    },
    text:{
        fontWeight:500,
        fontSize:moderateScale(16),
        textAlign:'center',

    }
})

export default Button