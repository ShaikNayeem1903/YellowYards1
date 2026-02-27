import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 42,
  },

  tabRow: {
    flexDirection: "row",
    marginTop: 20,
  },

  tabBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#EDEDED",
    borderRadius: 12,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: "#0E1320",
  },

  tabText: {
    fontSize: 14,
  },

  activeText: {
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginTop: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  propertyImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  propTitle: {
    fontWeight: "700",
  },

  propSub: {
    fontSize: 12,
    color: "#666",
  },

  callRow: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  date: {
    fontSize: 12,
    fontWeight: "600",
  },

  desc: {
    fontSize: 12,
    color: "#777",
  },
});