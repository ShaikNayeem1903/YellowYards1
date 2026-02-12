import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../theams/images';
import { useForm, Controller } from 'react-hook-form';
import { Modal, TextInput } from 'react-native';


const PropertyDetails = ({ route, navigation }: any) => {

    const [showOwnerDetails, setShowOwnerDetails] = useState(false);


  const { property } = route.params;
const [selectedImage, setSelectedImage] = useState(property.images[0]);

const [callModalVisible, setCallModalVisible] = useState(false);

const {
  control,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm();


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Property Details</Text>

          <Feather name="heart" size={22} color="#000" />
        </View>
{/* IMAGE SECTION */}
<View style={styles.imageWrapper}>

  {/* BIG IMAGE */}
  <Image
    source={selectedImage}
    style={styles.mainImage}
  />

  {/* THUMBNAIL OVERLAY */}
  <View style={styles.thumbnailOverlay}>
    {property.images.map((img: any, index: number) => (
      <TouchableOpacity
        key={index}
        onPress={() => setSelectedImage(img)}
      >
        <Image
          source={img}
          style={[
            styles.thumbnail,
            selectedImage === img && styles.activeThumbnail
          ]}
        />
      </TouchableOpacity>
    ))}
  </View>

</View>



        {/* PROPERTY INFO */}
        <View style={styles.content}>
          <Text style={styles.title}>{property.title}</Text>
          <Text style={styles.location}>{property.location}</Text>
          <Text style={styles.price}>{property.price}</Text>
          <Text style={styles.sqft}>{property.sqft}</Text>

          {/* ABOUT */}
          <Text style={styles.sectionTitle}>About The Property</Text>
          <Text style={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>

        
        {/* OWNER SECTION */}
<TouchableOpacity
  activeOpacity={0.9}
  onPress={() => setShowOwnerDetails(!showOwnerDetails)}
  style={styles.ownerBox}
>

  {/* TOP ROW */}
  <View style={styles.ownerRow}>
    <Image
      source={Images.brokerimg}
      style={styles.ownerImage}
    />

    <View style={{ flex: 1 }}>
      <Text style={styles.ownerName}>
        Owner/Broker/Builder name here
      </Text>
      <Text style={styles.listed}>Listed 15 days ago</Text>
    </View>

    {/* YELLOW TOGGLE CIRCLE */}
    <View style={styles.arrowCircle}>
      <Feather
        name={showOwnerDetails ? "chevron-up" : "chevron-down"}
        size={18}
        color="#000"
      />
    </View>
  </View>

  {/* EXPAND CONTENT */}
  {showOwnerDetails && (
    <View style={styles.ownerDetailsContainer}>

      <Text style={styles.aboutTitle}>About Broker</Text>
      <Text style={styles.aboutText}>
        The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, making it look like readable English.
      </Text>

      {/* PHONE */}
      <View style={styles.contactRow}>
        <Feather name="phone" size={18} color="#FFF" />
        <Text style={styles.contactText}>9478612456</Text>
      </View>

      {/* EMAIL */}
      <View style={styles.contactRow}>
        <Feather name="mail" size={18} color="#FFF" />
        <Text style={styles.contactText}>
          kenzi.lawson@example.com
        </Text>
      </View>

      {/* BUTTONS */}
      <TouchableOpacity style={styles.messageBtn}>
        <Text style={styles.messageText}>Send Message</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.callBtn}
  onPress={() => setCallModalVisible(true)}
>

        <Text style={styles.callText}>Schedule a Call</Text>
      </TouchableOpacity>

    </View>
  )}

</TouchableOpacity>


        {/* SIZE + PRICE BLOCK */}
        <View style={styles.sizeBlock}>
          <View style={styles.sizeRow}>
            <Text>Size In Sq.Ft</Text>
            <Text>630 sq.ft</Text>
          </View>
          <View style={styles.sizeRow}>
            <Text>Price</Text>
            <Text>24.42 Lac</Text>
          </View>
        </View>

        {/* UNIT CARDS */}
        <View style={styles.unitCard}>
          <Text style={styles.unitTitle}>Unit Type</Text>
          <Text>2 BHK Apartment</Text>

          <View style={styles.sizeRow}>
            <Text>Size In Sq.Ft</Text>
            <Text>850 sq.ft</Text>
          </View>

          <View style={styles.sizeRow}>
            <Text>Price</Text>
            <Text>42.51 Lac</Text>
          </View>
        </View>

        <View style={styles.unitCard}>
          <Text style={styles.unitTitle}>Unit Type</Text>
          <Text>3 BHK Apartment</Text>

          <View style={styles.sizeRow}>
            <Text>Size In Sq.Ft</Text>
            <Text>1150 sq.ft</Text>
          </View>

          <View style={styles.sizeRow}>
            <Text>Price</Text>
            <Text>1.12 Cr</Text>
          </View>
        </View>

        {/* PROPERTY DETAILS */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Property Details</Text>

          <View style={styles.sizeRow}>
            <Text>Property Location</Text>
            <Text>101 Road JP Nagar, Bangalore</Text>
          </View>

          <View style={styles.sizeRow}>
            <Text>Total Land Area</Text>
            <Text>11.6 Acres</Text>
          </View>

          <View style={styles.sizeRow}>
            <Text>No. Of Units</Text>
            <Text>524 Units</Text>
          </View>

          <View style={styles.sizeRow}>
            <Text>Unit Variant</Text>
            <Text>1, 2, 3 BHK</Text>
          </View>
        </View>

        {/* AMENITIES */}
<View style={styles.amenitiesSection}>
  <Text style={styles.sectionTitle}>Amenities</Text>

  {[
    { label: 'Kitchen', icon: 'coffee' },
    { label: 'Wifi', icon: 'wifi' },
    { label: 'Free on-street parking', icon: 'circle' },
    { label: 'TV', icon: 'monitor' },
    { label: 'AC – split-type ductless system', icon: 'wind' },
    { label: 'Bath', icon: 'droplet' },
    { label: 'Swimming Pool', icon: 'activity' },
    { label: 'Banquet Hall', icon: 'home' },
  ].map((item, index) => (
    <View key={index} style={styles.amenityRow}>
      <View style={styles.amenityIcon}>
        <Feather name={item.icon} size={18} color="#F5A623" />
      </View>
      <Text style={{ fontSize: 14 }}>{item.label}</Text>
    </View>
  ))}
</View>


        {/* MAP SECTION */}
        <View style={styles.mapSection}>
          <Text style={styles.sectionTitle}>Location On Map</Text>

          <View style={styles.mapBox}>
            <Text>Map will be integrated here</Text>
          </View>
        </View>

      </ScrollView>


      <Modal
  visible={callModalVisible}
  transparent
  animationType="fade"
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>

      {/* CLOSE BUTTON */}
      <TouchableOpacity
        style={styles.closeCircle}
        onPress={() => {
          setCallModalVisible(false);
          reset();
        }}
      >
        <Feather name="x" size={18} color="#000" />
      </TouchableOpacity>

      <Text style={styles.modalTitle}>Schedule a Call</Text>
      <Text style={styles.modalSubtitle}>
        Please share the details required to arrange a call for these properties
      </Text>

      {/* PHONE INPUT */}
      <Text style={styles.inputLabel}>Contact Phone Number</Text>
      <Controller
        control={control}
        rules={{
          required: 'Phone number is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Enter valid 10 digit number'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Enter phone number"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="phone"
      />
      {errors.phone && (
        <Text style={styles.errorText}>{errors.phone.message as string}</Text>
      )}

      {/* EMAIL INPUT */}
      <Text style={styles.inputLabel}>Contact Email Address</Text>
      <Controller
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Enter valid email'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            value={value}
            onChangeText={onChange}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message as string}</Text>
      )}

      {/* MESSAGE INPUT */}
      <Text style={styles.inputLabel}>Message</Text>
      <Controller
        control={control}
        rules={{ required: 'Message is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Write your message"
            multiline
            value={value}
            onChangeText={onChange}
          />
        )}
        name="message"
      />
      {errors.message && (
        <Text style={styles.errorText}>{errors.message.message as string}</Text>
      )}

      <TouchableOpacity
        style={styles.requestBtn}
        onPress={handleSubmit((data) => {
          console.log(data);
          setCallModalVisible(false);
          reset();
        })}
      >
        <Text style={styles.requestText}>Request For a Call</Text>
      </TouchableOpacity>

    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F9F9F4',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
  },

  headerTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },

  mainImageContainer: {
    paddingHorizontal: scale(20),
  },

 

  thumbnailRow: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },

  // thumbnail: {
  //   width: scale(70),
  //   height: scale(70),
  //   borderRadius: 12,
  // },

  content: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },

  title: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },

  location: {
    color: '#777',
    marginTop: 4,
  },

  price: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginTop: 10,
  },

  sqft: {
    color: '#777',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },

  description: {
    color: '#555',
    lineHeight: 20,
  },

  ownerBox: {
    backgroundColor: '#0C0F2E',
    marginTop: verticalScale(20),
    padding: scale(20),
  },

  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ownerImage: {
    width: scale(50),
    height: scale(50),
    borderRadius: 50,
    marginRight: 12,
  },

  ownerName: {
    color: '#FFF',
    fontWeight: '600',
  },

  listed: {
    color: '#CCC',
    fontSize: 12,
  },

  arrowCircle: {
    position: 'absolute',
    right: scale(20),
    top: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sizeBlock: {
    backgroundColor: '#EEE',
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    padding: scale(15),
    borderRadius: 12,
  },

  unitCard: {
    backgroundColor: '#F3F3F3',
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    padding: scale(15),
    borderRadius: 15,
  },

  unitTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },

  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  detailsSection: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },

  amenitiesSection: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },

  amenityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  amenityIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#FFF4E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  mapSection: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(40),
  },

  mapBox: {
    height: verticalScale(200),
    backgroundColor: '#DDD',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ownerDetailsContainer: {
  marginTop: verticalScale(15),
},

aboutTitle: {
  color: '#FFF',
  fontSize: moderateScale(15),
  fontWeight: '600',
  marginBottom: 5,
},

aboutText: {
  color: '#CCC',
  fontSize: moderateScale(13),
  marginBottom: verticalScale(15),
},

contactRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  marginBottom: verticalScale(10),
},

contactText: {
  color: '#FFF',
  fontSize: 14,
},

messageBtn: {
  backgroundColor: '#FFD600',
  paddingVertical: verticalScale(12),
  borderRadius: 10,
  marginTop: verticalScale(15),
  alignItems: 'center',
},

messageText: {
  fontWeight: '600',
  fontSize: 14,
},

callBtn: {
  backgroundColor: '#2E2E4F',
  paddingVertical: verticalScale(12),
  borderRadius: 10,
  marginTop: verticalScale(10),
  alignItems: 'center',
},

callText: {
  color: '#FFF',
  fontWeight: '600',
  fontSize: 14,
},
imageWrapper: {
  marginHorizontal: scale(20),
  position: 'relative',
},

mainImage: {
  width: '100%',
  height: verticalScale(240),
  borderRadius: 20,
},

thumbnailOverlay: {
  position: 'absolute',
  bottom: 15,
  left: 15,
  right: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#FFF',
  padding: 8,
  borderRadius: 15,
},

thumbnail: {
  width: 60,
  height: 60,
  borderRadius: 10,
},

activeThumbnail: {
  borderWidth: 2,
  borderColor: '#FFD600',
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.6)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  width: '85%',
  backgroundColor: '#FFF',
  borderRadius: 20,
  padding: 20,
},

closeCircle: {
  position: 'absolute',
  top: -20,
  alignSelf: 'center',
  backgroundColor: '#FFF',
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
},

modalTitle: {
  fontSize: 18,
  fontWeight: '600',
  textAlign: 'center',
  marginTop: 20,
},

modalSubtitle: {
  fontSize: 13,
  color: '#777',
  textAlign: 'center',
  marginVertical: 10,
},

inputLabel: {
  marginTop: 15,
  fontWeight: '500',
},

input: {
  borderWidth: 1,
  borderColor: '#DDD',
  borderRadius: 10,
  padding: 12,
  marginTop: 5,
},

errorText: {
  color: 'red',
  fontSize: 12,
},

requestBtn: {
  backgroundColor: '#FFD600',
  paddingVertical: 14,
  borderRadius: 10,
  marginTop: 20,
  alignItems: 'center',
},

requestText: {
  fontWeight: '600',
  fontSize: 14,
},





});
