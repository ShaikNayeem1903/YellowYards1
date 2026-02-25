import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
 import { StatusBar } from 'react-native';
import DashboardHeader from '../../components/common/DashboardHeader';
import Images from '../../theams/images';
import { verticalScale } from 'react-native-size-matters';

const Profile = ( {navigation} : any) => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>

     

<StatusBar
  backgroundColor="#FFF5E3"
  barStyle="dark-content"
/>
      
       {/* 🔥 TOP BEIGE HEADER SECTION */}
      <View style={styles.topSection}>
        <DashboardHeader showBackground />
      </View>

      {/* WHITE BODY CONTAINER */}
      <View style={styles.bodyContainer}>
        
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
        >
          {/* PROFILE CARD */}
          <View style={styles.profileCard}>

            <Image
              source={Images.userImage}
              style={styles.bigProfileImage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Ronald Richards</Text>

              <View style={styles.infoRow}>
                <Feather name="mail" size={16} color="#F5A623" />
                <Text style={styles.infoText}>
                  johnmorrison@example.com
                </Text>
              </View>

              <View style={styles.infoRow}>
                <Feather name="phone" size={16} color="#F5A623" />
                <Text style={styles.infoText}>1234567890</Text>
              </View>

              <View style={styles.infoRow}>
                <Feather name="map-pin" size={16} color="#F5A623" />
                <Text style={styles.infoText}>Bangalore</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <Feather name="more-vertical" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          {/* POPUP MENU */}
          <Modal transparent visible={menuVisible} animationType="fade">
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setMenuVisible(false)}
            >
              <View style={styles.popupMenu}>
                <Text style={styles.popupItem}>Edit Profile</Text>
                <Text style={styles.popupItem}>Change Password</Text>
              </View>
            </TouchableOpacity>
          </Modal>

          {/* NOTIFICATION SETTINGS */}
          <Text style={styles.sectionTitle}>Notification Settings</Text>

          <View style={styles.settingsCard}>
            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Location access</Text>
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: '#E0E0E0', true: '#F5A623' }}
                thumbColor="#fff"
                style={{ transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }] }}
              />
            </View>

            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Push notifications</Text>
              <Switch
                value={pushEnabled}
                onValueChange={setPushEnabled}
                trackColor={{ false: '#E0E0E0', true: '#F5A623' }}
                thumbColor="#fff"
                style={{ transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }] }}
              />
            </View>
          </View>

          {/* INQUIRIES */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Inquiries</Text>
            <Text style={styles.viewBtn}>View All</Text>
          </View>

          {[1, 2].map((_, index) => (
            <View key={index} style={styles.inquiryCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
                }}
                style={styles.propertyImage}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.propertyTitle}>
                  BMR Bhoomika Mayflower
                </Text>
                <Text style={styles.propertySub}>
                  3 BHK Flat in JP Nagar, Bangalore
                </Text>
                <Text style={styles.date}>
                  25 Oct 2025, 12:30 PM
                </Text>
                <Text style={styles.desc}>
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </Text>
              </View>
            </View>
          ))}

          {/* CALL HISTORY */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Call History</Text>
            <Text style={styles.viewBtn}>View All</Text>
          </View>

          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.inquiryCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
                }}
                style={styles.propertyImage}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.propertyTitle}>
                  BMR Bhoomika Mayflower
                </Text>
                <Text style={styles.propertySub}>
                  3 BHK Flat in JP Nagar, Bangalore
                </Text>
                <Text style={styles.date}>
                  25 Oct 2025, 12:30 PM
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* FLOATING SUPPORT BUTTON */}
        <TouchableOpacity
  style={styles.supportBtn}
  onPress={() => navigation.navigate('Support')}
>
          <Feather name="headphones" size={18} color="#fff" />
          <Text style={styles.supportText}>Support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6D5B8',
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: '#F9F9F4',
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
  },

    topSection: {
      paddingBottom: verticalScale(1),
    },
  

  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    elevation: 4,
  },

  bigProfileImage: {
    width: 85,
    height: 85,
    borderRadius: 15,
    marginRight: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  infoText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#555',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
  },

  settingsCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
  },

  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  settingText: {
    fontSize: 14,
  },

  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  viewBtn: {
    color: '#555',
  },

  inquiryCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 16,
    marginTop: 12,
  },

  propertyImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },

  propertyTitle: {
    fontWeight: '700',
  },

  propertySub: {
    fontSize: 12,
    color: '#666',
  },

  date: {
    fontSize: 12,
    marginTop: 4,
  },

  desc: {
    fontSize: 12,
    color: '#777',
  },


  supportText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 160,
    paddingRight: 30,
  },

  popupMenu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    width: 160,
  },

  popupItem: {
    paddingVertical: 10,
    fontSize: 14,
  },

  supportBtn: {
  position: 'absolute',
  bottom: 120,        
  right: 20,
  flexDirection: 'row',
  backgroundColor: '#F5A623',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 30,
  alignItems: 'center',
  elevation: 10,     
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 6,

  zIndex: 999,
},
});