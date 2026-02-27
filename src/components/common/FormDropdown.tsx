import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const FormDropdown = ({ label, value }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.row}>
        <Text style={styles.value}>{value || "Select city"}</Text>
        <Feather name="chevron-down" size={20} color="#777" />
      </View>
    </View>
  );
};

export default FormDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F4EE",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E7E4D8",
  },

  label: { fontSize: 14, marginBottom: 4, fontWeight: "500" },

  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  value: { color: "#9A9A9A" },
});