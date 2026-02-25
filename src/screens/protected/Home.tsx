import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import DashboardHeader from '../../components/common/DashboardHeader';
import PropertyCard from '../../components/common/PropertyCard';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import Images from '../../theams/images';

const Home = ({ navigation }: any) => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [bhk, setBhk] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [furnishing, setFurnishing] = useState(null);

  const properties = [
    {
      id: '1',
      title: 'BMR Bhoomika Mayflower',
      location: 'JP Nagar, Bangalore',
      price: '₹84.42 Lac - 1.12 cr',
      sqft: '₹6,700 /sqft',
      images: [
        Images.BMRBhoomikaMayflower,
        Images.BMRBhoomika1,
        Images.BMRBhoomika2,
        Images.BMRBhoomika3,
        Images.BMRBhoomika4,
      ],
    },
    {
      id: '2',
      title: 'Green Valley Homes',
      location: 'HSR Layout, Bangalore',
      price: '₹90 Lac - 1.30 cr',
      sqft: '₹7,200 /sqft',
      images: [
        Images.BMRBhoomikaImage2,
        Images.BMRBhoomika1,
        Images.BMRBhoomika2,
        Images.BMRBhoomika3,
        Images.BMRBhoomika4,
      ],
    },
  ];

  const bhkData = [
    { label: '1 BHK', value: '1' },
    { label: '2 BHK', value: '2' },
  ];

  const typeData = [
    { label: 'Apartment', value: '1' },
    { label: 'Villa', value: '2' },
  ];

  const furnishData = [
    { label: 'Furnished', value: '1' },
    { label: 'Unfurnished', value: '2' },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>

      <StatusBar
        backgroundColor="#FFF5E3"
        barStyle="dark-content"
      />

      {/* 🔥 TOP BEIGE HEADER SECTION */}
      <View style={styles.topSection}>
        <DashboardHeader showBackground />
      </View>

      {/* 🔥 MAIN WHITE BODY */}
      <View style={styles.bodySection}>

        {/* SEARCH BAR */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#777" />
          <Text style={styles.searchText}>
            Search by location, project...
          </Text>
          <Feather name="sliders" size={18} color="#000" />
        </View>

        {/* FILTER DROPDOWNS */}
        <View style={styles.filterRow}>
          <Dropdown
            style={styles.dropdown}
            data={bhkData}
            labelField="label"
            valueField="value"
            placeholder="BHK"
            value={bhk}
            onChange={item => setBhk(item.value)}
          />

          <Dropdown
            style={styles.dropdown}
            data={typeData}
            labelField="label"
            valueField="value"
            placeholder="Type"
            value={propertyType}
            onChange={item => setPropertyType(item.value)}
          />

          <Dropdown
            style={styles.dropdown}
            data={furnishData}
            labelField="label"
            valueField="value"
            placeholder="Furnish"
            value={furnishing}
            onChange={item => setFurnishing(item.value)}
          />
        </View>

        {/* TRENDING + TOGGLE */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.trending}>Trending Near Property</Text>
            <Text style={styles.total}>Total 20 property found</Text>
          </View>

          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                viewMode === 'list' && styles.activeToggle,
              ]}
              onPress={() => setViewMode('list')}
            >
              <Feather
                name="list"
                size={18}
                color={viewMode === 'list' ? '#FFF' : '#000'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleButton,
                viewMode === 'map' && styles.activeToggle,
              ]}
              onPress={() => setViewMode('map')}
            >
              <Feather
                name="map"
                size={18}
                color={viewMode === 'map' ? '#FFF' : '#000'}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* PROPERTY LIST */}
        {viewMode === 'list' ? (
          <FlatList
            data={properties}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PropertyCard item={item} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        ) : (
          <View style={styles.fakeMap}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              Map View (Google Map will be here)
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E6D5B8',
  },

  topSection: {
    paddingBottom: verticalScale(1),
  },

  bodySection: {
    flex: 1,
    backgroundColor: '#F9F9F4',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingTop: verticalScale(20),
    paddingHorizontal: scale(20),
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: scale(15),
    borderRadius: 15,
  },

  searchText: {
    flex: 1,
    marginLeft: scale(10),
    color: '#777',
    fontSize: moderateScale(13),
  },

  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },

  dropdown: {
    width: scale(100),
    height: verticalScale(40),
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: scale(10),
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },

  trending: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },

  total: {
    fontSize: moderateScale(12),
    color: '#777',
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    padding: 4,
  },

  toggleButton: {
    width: scale(40),
    height: scale(40),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeToggle: {
    backgroundColor: '#000',
  },

  fakeMap: {
    flex: 1,
    backgroundColor: '#DDD',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});