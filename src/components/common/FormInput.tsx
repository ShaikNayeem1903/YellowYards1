import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const FormInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secure,
  toggleSecure,
  showIcon,
}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#9A9A9A"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          style={styles.input}
        />

        {showIcon && (
          <TouchableOpacity onPress={toggleSecure}>
            <Feather name={secure ? "eye-off" : "eye"} size={20} color="#777" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F4EE",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E7E4D8",
  },

  label: {
    fontSize: 14,
    color: "#2B2B2B",
    marginBottom: 4,
    fontWeight: "500",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    paddingVertical: 4,
  },
});