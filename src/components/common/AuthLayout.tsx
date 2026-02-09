import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, scale } from 'react-native-size-matters';

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: Props) => {
  return (
    <LinearGradient
      colors={['#FFF9D6', '#FFFFFF']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>

        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}

        <View style={styles.content}>
          {children}
        </View>
      </View>
    </LinearGradient>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    
  },
  title: {
    // width:scale(120),
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginTop: 40,
  },
   innerContainer: {
    flex: 1,
    paddingHorizontal: 20, 
    paddingTop: 40,
  },
  subtitle: {
    marginTop: 10,
    color: '#666',
  },
  content: {
    marginTop: 30,
  },
});
