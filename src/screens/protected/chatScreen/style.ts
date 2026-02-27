import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

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
