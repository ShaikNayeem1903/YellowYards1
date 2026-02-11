import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale, scale } from 'react-native-size-matters';
import Button from '../../../components/common/Button';
import Images from '../../../theams/images';

const GetStarted = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Images.buldingBackgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        
        <View style={styles.overlay} />

        
        <TouchableOpacity
          style={styles.skip}
          onPress={() => navigation.replace('Tabs')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        
        <View style={styles.content}>
          <Text style={styles.title}>
            Your Gateway to Exceptional Properties at the Best Prices
          </Text>

          <Text style={styles.subtitle}>
            It is a long established fact that a reader will be distracted by the readable content of
          </Text>

          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Login')}
            containerStyle={styles.getStartedBtn}
          />

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  skip: {
    position: 'absolute',
    top: verticalScale(15),
    right: scale(20),
    zIndex: 10,
  },

  skipText: {
    color: '#FFF',
    fontSize: moderateScale(14),
    fontWeight: '600',
  },

  content: {
    paddingHorizontal: scale(25),
    paddingBottom: verticalScale(40),
  },

  title: {
    color: '#FFF',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },

  subtitle: {
    color: '#DDD',
    fontSize: moderateScale(13),
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },

  getStartedBtn: {
    marginTop: verticalScale(10),
  },

  loginBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: verticalScale(44),
    width:scale(315),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },

  loginText: {
    color: '#FFF',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});


export default GetStarted;
