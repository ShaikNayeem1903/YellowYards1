import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { messagesData } from '../../data/messagesData';

const MessagesScreen = ({ navigation }: any) => {

  const renderItem = ({ item }:any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ChatScreen', { user: item })}
    >
      <Image source={item.image} style={styles.avatar} />

      <View style={{ flex: 1 }}>
        <View style={styles.rowBetween}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.message} numberOfLines={1}>
            {item.message}
          </Text>

          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔥 REUSABLE HEADER CALL HERE */}
      {/* <MainHeader />  👈 Nuvvu already create chesinadhi use cheyyi */}

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
        <Icon name="search" size={18} color="#999" />
        <TextInput
          placeholder="Search message"
          placeholderTextColor="#999"
          style={{ flex: 1, marginLeft: 10 }}
        />
      </View>

      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F4',
    paddingHorizontal: 20,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    padding: 12,
    borderRadius: 12,
    marginVertical: 15,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: 'center',
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 15,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  time: {
    fontSize: 12,
    color: '#999',
  },

  message: {
    fontSize: 13,
    color: '#777',
    flex: 1,
  },

  unreadBadge: {
    backgroundColor: '#F5A623',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },

  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
