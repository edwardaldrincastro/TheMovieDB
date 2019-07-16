import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default InputField = (props) => {
  const [showPassword, handleShow] = useState(0);
  return (
    props.secured
      ?
      <View style={styles.fieldContainer}>
        <TextInput {...props} style={styles.passwordField} secureTextEntry={!showPassword} placeholderTextColor="#B3B3B3" />
        <TouchableOpacity onPress={() => handleShow(showPassword ? false : true)}>
          <Text style={styles.showPassword}>{showPassword ? "HIDE" : "SHOW"}</Text>
        </TouchableOpacity>
      </View>
      :
      <TextInput {...props} style={styles.usernameField} placeholderTextColor="#B3B3B3" />
  )
}
const styles = StyleSheet.create({
  usernameField: {
    backgroundColor: "#333333",
    color: "#B3B3B3",
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    height: 50
  },
  passwordField: {
    backgroundColor: "#333333",
    color: "#B3B3B3",
    flex: 1,
    height: 50
  },
  fieldContainer: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#333333",
    width: "100%",
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  showPassword: {
    color: "#B3B3B3",
    fontSize: 13
  }
})