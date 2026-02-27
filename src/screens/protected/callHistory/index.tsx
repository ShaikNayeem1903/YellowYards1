import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./style";

const CallHistory = ({ navigation }: any) => {
  const [tab, setTab] = useState("All");

  const data = [1, 2, 3, 4];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Call History</Text>
      </View>

      {/* FILTER TABS */}
      <View style={styles.tabRow}>
        {["All", "Pending", "Completed"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.tabBtn, tab === item && styles.activeTab]}
            onPress={() => setTab(item)}
          >
            <Text style={[styles.tabText, tab === item && styles.activeText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((_, i) => (
          <View key={i} style={styles.card}>
            {/* PROPERTY */}
            <View style={styles.row}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                }}
                style={styles.propertyImg}
              />

              <View>
                <Text style={styles.propTitle}>BMR Bhoomika Mayflower</Text>
                <Text style={styles.propSub}>
                  3 BHK Flat in JP Nagar, Bangalore
                </Text>
              </View>
            </View>

            {/* CALL INFO */}
            <View style={styles.callRow}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/44.jpg",
                }}
                style={styles.avatar}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.date}>25 Oct 2025, 12:30 PM</Text>
                <Text style={styles.desc}>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution.
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CallHistory;