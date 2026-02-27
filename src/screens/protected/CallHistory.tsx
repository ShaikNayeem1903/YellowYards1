// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Feather from "react-native-vector-icons/Feather";

// const CallHistory = ({ navigation }: any) => {
//   const [tab, setTab] = useState("All");

//   const data = [1, 2, 3, 4];

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* HEADER */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => navigation.goBack()}
//         >
//           <Feather name="arrow-left" size={20} />
//         </TouchableOpacity>

//         <Text style={styles.title}>Call History</Text>
//       </View>

//       {/* FILTER TABS */}
//       <View style={styles.tabRow}>
//         {["All", "Pending", "Completed"].map((item) => (
//           <TouchableOpacity
//             key={item}
//             style={[styles.tabBtn, tab === item && styles.activeTab]}
//             onPress={() => setTab(item)}
//           >
//             <Text style={[styles.tabText, tab === item && styles.activeText]}>
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* LIST */}
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {data.map((_, i) => (
//           <View key={i} style={styles.card}>
//             {/* PROPERTY */}
//             <View style={styles.row}>
//               <Image
//                 source={{
//                   uri: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//                 }}
//                 style={styles.propertyImg}
//               />

//               <View>
//                 <Text style={styles.propTitle}>BMR Bhoomika Mayflower</Text>
//                 <Text style={styles.propSub}>
//                   3 BHK Flat in JP Nagar, Bangalore
//                 </Text>
//               </View>
//             </View>

//             {/* CALL INFO */}
//             <View style={styles.callRow}>
//               <Image
//                 source={{
//                   uri: "https://randomuser.me/api/portraits/women/44.jpg",
//                 }}
//                 style={styles.avatar}
//               />

//               <View style={{ flex: 1 }}>
//                 <Text style={styles.date}>25 Oct 2025, 12:30 PM</Text>
//                 <Text style={styles.desc}>
//                   The point of using Lorem Ipsum is that it has a more-or-less
//                   normal distribution.
//                 </Text>
//               </View>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default CallHistory;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F4F4F4",
//     paddingHorizontal: 16,
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },

//   backBtn: {
//     width: 42,
//     height: 42,
//     borderRadius: 21,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   title: {
//     flex: 1,
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "700",
//     marginRight: 42,
//   },

//   tabRow: {
//     flexDirection: "row",
//     marginTop: 20,
//   },

//   tabBtn: {
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     backgroundColor: "#EDEDED",
//     borderRadius: 12,
//     marginRight: 10,
//   },

//   activeTab: {
//     backgroundColor: "#0E1320",
//   },

//   tabText: {
//     fontSize: 14,
//   },

//   activeText: {
//     color: "#fff",
//   },

//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 12,
//     marginTop: 14,
//   },

//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   propertyImg: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     marginRight: 10,
//   },

//   propTitle: {
//     fontWeight: "700",
//   },

//   propSub: {
//     fontSize: 12,
//     color: "#666",
//   },

//   callRow: {
//     flexDirection: "row",
//     marginTop: 10,
//     alignItems: "center",
//   },

//   avatar: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     marginRight: 10,
//   },

//   date: {
//     fontSize: 12,
//     fontWeight: "600",
//   },

//   desc: {
//     fontSize: 12,
//     color: "#777",
//   },
// });