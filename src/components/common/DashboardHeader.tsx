import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../theams/images';

interface Props {
  showBackground?: boolean;   
}

const DashboardHeader: React.FC<Props> = ({
  showBackground = false,    
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
         backgroundColor: showBackground ? '#FFF5E3' : 'transparent'
        },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Image
            source={Images.userImage}
            style={styles.avatar}
          />

          <View style={{ marginLeft: scale(10) }}>
            <Text style={styles.name}>Ronald Richards</Text>
            <Text style={styles.email}>blissandes@example.com</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bellContainer}>
          <Feather name="bell" size={20} color="#000" />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: scale(10),
    borderRadius: 30,
    elevation: 2,
  },

  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: 20,
  },

  name: {
    fontSize: moderateScale(14),
    fontWeight: '600',
  },

  email: {
    fontSize: moderateScale(11),
    color: '#777',
  },

  bellContainer: {
    backgroundColor: '#FFFFFF',
    padding: scale(12),
    borderRadius: 30,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});