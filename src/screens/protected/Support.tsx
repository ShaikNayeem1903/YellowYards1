import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

const Support = ({ navigation }: any) => {

  return (
    <>
      <StatusBar backgroundColor="#FFF5E3" barStyle="dark-content" />

      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>

          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Feather name="chevron-left" size={22} color="#000" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Support</Text>

            <View style={{ width: 40 }} />
          </View>

          {/* CONTENT CARD */}
          <View style={styles.card}>

            {/* PLATFORM SUPPORT */}
            <View style={styles.platformRow}>
              <View style={styles.avatarCircle} />

              <View style={{ flex: 1 }}>
                <Text style={styles.platformTitle}>
                  Platform Support
                </Text>
                <Text style={styles.platformSub}>
                  24*7 hours assistant
                </Text>
              </View>

              <TouchableOpacity style={styles.callBtn}>
                <Feather name="phone" size={18} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* HELP SECTION */}
            <Text style={styles.helpTitle}>
              How can I help you?
            </Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <View style={styles.chip}>
                <Text>I can’t send the enquiry request</Text>
              </View>

              <View style={styles.chip}>
                <Text>How many days to get enquiry reply?</Text>
              </View>

              <View style={styles.chip}>
                <Text>
                  I’m having trouble logging in — can you help me fix it?
                </Text>
              </View>
            </ScrollView>

          </View>

          {/* INPUT BOX */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type here..."
              placeholderTextColor="#777"
              style={styles.input}
            />

            <TouchableOpacity style={styles.sendBtn}>
              <Feather name="send" size={18} color="#000" />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

export default Support;


const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#FFF5E3',
  },

  container: {
    flex: 1,
    backgroundColor: '#F9F9F4',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF5E3',
  },

  backBtn: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },

  platformRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E5E5E5',
    marginRight: 15,
  },

  platformTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  platformSub: {
    fontSize: 12,
    color: '#777',
  },

  callBtn: {
    backgroundColor: '#1B1B3A',
    padding: 12,
    borderRadius: 12,
  },

  helpTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 15,
  },

  chip: {
    backgroundColor: '#F4EDE3',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },

  inputContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    elevation: 5,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
  },

  sendBtn: {
    backgroundColor: '#FFD600',
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

});