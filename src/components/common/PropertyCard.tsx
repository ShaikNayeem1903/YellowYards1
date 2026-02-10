import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

interface Props {
  item: any;
  navigation: any;
}

const PropertyCard = ({ item, navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PropertyDetails')}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.sqft}>{item.sqft}</Text>
      </View>

      <View>
        <Image source={{ uri: item.image }} style={styles.image} />

        <TouchableOpacity style={styles.heart}>
          <Text>♡</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: verticalScale(15),
    padding: scale(15),
    borderRadius: 12,
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  location: {
    fontSize: moderateScale(12),
    color: '#777',
    marginVertical: 4,
  },
  price: {
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  sqft: {
    fontSize: moderateScale(11),
    color: '#777',
  },
  image: {
    width: scale(90),
    height: verticalScale(90),
    borderRadius: 10,
  },
  heart: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 5,
  },
});
