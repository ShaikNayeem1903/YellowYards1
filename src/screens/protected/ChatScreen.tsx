import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

const ChatScreen = ({ route, navigation }: any) => {

  const { user } = route.params;

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} />
        </TouchableOpacity>

        <Image source={user.image} style={styles.avatar} />

        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.online}>Online</Text>
        </View>
      </View>

      {/* CHAT BODY */}
      <View style={styles.chatContainer}>
        <View style={styles.messageLeft}>
          <Text>Lorem Ipsum is simply dummy text</Text>
        </View>

        <View style={styles.messageRight}>
          <Text>It is a long established fact that a reader will be distracted</Text>
        </View>
      </View>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <Icon name="plus" size={20} color="#999" />

        <TextInput
          placeholder="Type here..."
          style={{ flex: 1, marginHorizontal: 10 }}
        />

        <TouchableOpacity style={styles.sendBtn}>
          <Icon name="send" size={18} color="#000" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F9F9F4',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDE4CF',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginHorizontal: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  online: {
    fontSize: 12,
    color: 'green',
  },

  chatContainer: {
    flex: 1,
    padding: 20,
  },

  messageLeft: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  messageRight: {
    backgroundColor: '#EDE4CF',
    padding: 12,
    borderRadius: 15,
    alignSelf: 'flex-end',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
  },

  sendBtn: {
    backgroundColor: '#F5E500',
    padding: 12,
    borderRadius: 25,
  },
});
