import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Inquiries = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('All');

  const data = [1, 2, 3];

  const renderItem = () => (
    <View style={styles.card}>
      {/* TOP PROPERTY ROW */}
      <View style={styles.topRow}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          }}
          style={styles.propertyImage}
        />

        <View>
          <Text style={styles.propertyTitle}>BMR Bhoomika Mayflower</Text>
          <Text style={styles.propertySub}>3 BHK Flat in JP Nagar, Bangalore</Text>
        </View>
      </View>

      {/* MESSAGE BOX */}
      <View style={styles.messageBox}>
        <View style={styles.messageHeader}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/women/44.jpg',
            }}
            style={styles.avatar}
          />

          <Text style={styles.date}>25 Oct 2025, 12:30 PM</Text>
        </View>

        <Text style={styles.desc}>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here'.
        </Text>
      </View>
    </View>
  );

  const Tab = ({ title }: any) => (
    <TouchableOpacity
      style={[styles.tab, activeTab === title && styles.activeTab]}
      onPress={() => setActiveTab(title)}
    >
      <Text style={[styles.tabText, activeTab === title && styles.activeTabText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Inquiries</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* TABS */}
      <View style={styles.tabRow}>
        <Tab title="All" />
        <Tab title="Pending" />
        <Tab title="Completed" />
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Inquiries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F4',
    paddingHorizontal: scale(20),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },

  backBtn: {
    width: scale(40),
    height: scale(40),
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  headerTitle: {
    fontSize: moderateScale(16),
    fontWeight: '700',
  },

  tabRow: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#EEE',
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#0E1320',
  },

  tabText: {
    fontSize: 13,
    fontWeight: '600',
  },

  activeTabText: {
    color: '#fff',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginTop: verticalScale(15),
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  propertyImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 10,
  },

  propertyTitle: {
    fontWeight: '700',
  },

  propertySub: {
    fontSize: 12,
    color: '#777',
  },

  messageBox: {
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
  },

  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },

  date: {
    fontSize: 12,
    fontWeight: '600',
  },

  desc: {
    fontSize: 12,
    color: '#777',
    marginTop: 6,
  },
});