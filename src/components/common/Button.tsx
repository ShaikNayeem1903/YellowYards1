import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Button = ({title,onPress, containerStyle}:any) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        backgroundColor:'yellow',
        width:scale(315),
height: verticalScale(45),



    },
    text:{
        fontWeight:'600',
        fontSize:moderateScale(18),
        textAlign:'center',

    }
})

export default Button