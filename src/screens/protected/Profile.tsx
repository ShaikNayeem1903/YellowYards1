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
import { useForm, Controller } from "react-hook-form";
import FormInput from '../../components/common/FormInput';
import FormDropdown from '../../components/common/FormDropdown';
import Inquiries from './Inquiries';


const Profile = ( {navigation} : any) => {
 const [editVisible, setEditVisible] = useState(false);
const [passwordVisible, setPasswordVisible] = useState(false);
const [cityVisible, setCityVisible] = useState(false);
const [locationEnabled, setLocationEnabled] = useState(false);
const [pushEnabled, setPushEnabled] = useState(true);
const [menuVisible, setMenuVisible] = useState(false);
const [city, setCity] = useState("");
const [showOld, setShowOld] = useState(true);
const [showNew, setShowNew] = useState(true);
const [showConfirm, setShowConfirm] = useState(true);
const { control, handleSubmit, watch, formState:{errors} } = useForm<any>();

const newPass = watch("newPassword");

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
            <TouchableOpacity onPress={ () =>navigation.navigate('Inquiries')}>
              <Text style={styles.viewBtn} >View All</Text>
            </TouchableOpacity>
            
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
           <TouchableOpacity onPress={ () =>navigation.navigate('CallHistory')}>
              <Text style={styles.viewBtn} >View All</Text>
            </TouchableOpacity>
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

          {/* POPUP MENU */} 
          <Modal transparent visible={menuVisible} animationType="fade">
             <View style={styles.modalOverlay}> 
              {/* OUTSIDE TOUCH */} 
              <TouchableOpacity style={StyleSheet.absoluteFill} onPress={() => setMenuVisible(false)} /> 
                {/* MENU */} 
                <View style={styles.popupMenu}> 
                  <TouchableOpacity onPress={() => { setMenuVisible(false); setEditVisible(true); }} > 
                    <Text style={styles.popupItem}>Edit Profile</Text>

                     </TouchableOpacity> 
                     
                     <TouchableOpacity onPress={() => { setMenuVisible(false); setPasswordVisible(true); }} >
                       <Text style={styles.popupItem}>Change Password</Text>
                        </TouchableOpacity> 

                        </View> 
                        </View> 
                        </Modal>
      

    <Modal transparent visible={editVisible} animationType="fade">


  
<View style={styles.overlay}>
  <View style={styles.sheetWrapper}>
    

    <TouchableOpacity style={styles.figmaClose} onPress={()=>setEditVisible(false)}>
      <Text style={{fontSize:30}}>×</Text>
    </TouchableOpacity>

    
  <View style={styles.sheet}>
    <Text style={styles.sheetTitle}>Edit Profile</Text>
    <Text style={styles.sheetSub}>
      Please review, update, and save your profile information to keep your information current.
    </Text>

    {/* NAME */}
    <Controller
      control={control}
      name="name"
      rules={{required:"Name required"}}
      render={({field:{onChange,value}})=>(
        <FormInput label="Name" placeholder="Enter your name" value={value} onChangeText={onChange}/>
      )}
    />
    {errors.name && <Text style={styles.err}>{String(errors.name.message)}</Text>}

    {/* EMAIL */}
    <Controller
      control={control}
      name="email"
      rules={{
        required:"Email required",
        pattern:{value:/^\S+@\S+\.\S+$/,message:"Invalid email"}
      }}
      render={({field:{onChange,value}})=>(
        <FormInput label="Email Address" placeholder="Enter email address" value={value} onChangeText={onChange}/>
      )}
    />
    {errors.email && <Text style={styles.err}>{String(errors.email.message)}</Text>}

    {/* PHONE */}
    <Controller
      control={control}
      name="phone"
      rules={{
        required:"Phone required",
        pattern:{value:/^[0-9]{10}$/,message:"Enter 10 digit phone"}
      }}
      render={({field:{onChange,value}})=>(
        <FormInput label="Phone Number" placeholder="Enter phone number" value={value} onChangeText={onChange}/>
      )}
    />
    {errors.phone && <Text style={styles.err}>{String(errors.phone.message)}</Text>}

    {/* CITY */}
    <TouchableOpacity onPress={()=>setCityVisible(true)}>
      <FormDropdown label="Preferred City" value={city}/>
    </TouchableOpacity>

    {/* SUBMIT */}
    <TouchableOpacity
      style={styles.saveBtn}
      onPress={handleSubmit((d)=>{console.log(d,city);setEditVisible(false)})}
    >
      <Text style={styles.saveTxt}>Save and Update</Text>
    </TouchableOpacity>

  </View>
</View>
</View>
</Modal>



<Modal transparent visible={cityVisible} animationType="fade">
<TouchableOpacity style={styles.overlay} onPress={()=>setCityVisible(false)}>
  <View style={styles.cityBox}>
    {['Bangalore','Hyderabad','Chennai','Mumbai'].map(c=>(
      <TouchableOpacity key={c} onPress={()=>{setCity(c);setCityVisible(false)}}>
        <Text style={styles.cityItem}>{c}</Text>
      </TouchableOpacity>
    ))}
  </View>
</TouchableOpacity>
</Modal>

<Modal transparent visible={passwordVisible} animationType="fade">
<View style={styles.overlay}>
  <View style={styles.sheetWrapper}>

    <TouchableOpacity style={styles.figmaClose} onPress={()=>setPasswordVisible(false)}>
      <Text style={{fontSize:30}}>×</Text>
    </TouchableOpacity>

  
    </View>

  <View style={styles.sheet}>
    <Text style={styles.sheetTitle}>Change Password</Text>
    <Text style={styles.sheetSub}>
      Secure your account by updating your password regularly.
    </Text>

    <Controller
      control={control}
      name="old"
      rules={{required:"Required"}}
      render={({field:{onChange,value}})=>(
        <FormInput label="Old Password" placeholder="Enter old password"
          value={value} onChangeText={onChange}
          secure={showOld} showIcon toggleSecure={()=>setShowOld(!showOld)}
        />
      )}
    />

    <Controller
      control={control}
      name="newPassword"
      rules={{required:"Required",minLength:6}}
      render={({field:{onChange,value}})=>(
        <FormInput label="New Password" placeholder="Enter new password"
          value={value} onChangeText={onChange}
          secure={showNew} showIcon toggleSecure={()=>setShowNew(!showNew)}
        />
      )}
    />

    <Controller
      control={control}
      name="confirm"
      rules={{
        validate:(v:any)=> v===newPass || "Passwords not match"
      }}
      render={({field:{onChange,value}})=>(
        <FormInput label="Confirm Password" placeholder="Enter confirm password"
          value={value} onChangeText={onChange}
          secure={showConfirm} showIcon toggleSecure={()=>setShowConfirm(!showConfirm)}
        />
      )}
    />

    <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit(()=>setPasswordVisible(false))}>
      <Text style={styles.saveTxt}>Save and Update</Text>
    </TouchableOpacity>

  </View>
</View>
</Modal>


      
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

  zIndex: 9999,
  elevation: 9999,
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


input:{borderWidth:1,borderColor:'#ddd',padding:12,borderRadius:12,marginVertical:8},


bottomOverlay:{
 flex:1,
 backgroundColor:'rgba(0,0,0,0.45)',
 justifyContent:'flex-end'
},


close:{
 alignSelf:'center',
 backgroundColor:'#F5F4EE',
 width:42,
 height:42,
 borderRadius:21,
 alignItems:'center',
 justifyContent:'center',
 marginBottom:10
},

modalTitle:{
 fontSize:20,
 fontWeight:'700',
 textAlign:'center'
},

modalSub:{
 textAlign:'center',
 color:'#777',
 marginTop:6,
 marginBottom:18,
 fontSize:13,
 lineHeight:18
},

sheetWrapper:{
 width:'100%',
 alignItems:'center'
},

overlay:{flex:1,backgroundColor:'rgba(0,0,0,0.35)',justifyContent:'flex-end',alignItems:'center'},

figmaClose:{
 position:'absolute',
 top:-verticalScale(50),
 alignSelf:'center',
 backgroundColor:'#F5F4EE',
 width:46,
 height:46,
 borderRadius:23,
 alignItems:'center',
 justifyContent:'center',
 zIndex:10,
 elevation:10
},
sheet:{
 backgroundColor:'#fff',
 borderTopLeftRadius:28,
 borderTopRightRadius:28,
 paddingHorizontal:24,
 paddingTop:20,
 paddingBottom:30,
 width:'100%'
},

sheetTitle:{fontSize:20,fontWeight:'700',textAlign:'center'},
sheetSub:{textAlign:'center',color:'#777',marginVertical:8},

saveBtn:{backgroundColor:'#FFE600',padding:16,borderRadius:12,marginTop:16,alignItems:'center'},
saveTxt:{fontWeight:'700'},

err:{color:'red',fontSize:12,marginLeft:6},

cityBox:{backgroundColor:'#fff',padding:20,borderRadius:16,width:'80%'},
cityItem:{paddingVertical:12,fontSize:16}
});