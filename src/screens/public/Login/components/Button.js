import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'

export default Button = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View style={props.disabled ? [styles.button,{opacity: 0.2}] : styles.button}>
        {
          props.isSubmitting
            ?
            <ActivityIndicator size="large" color="#FFF" />
            :
            <Text style={styles.buttonText}>Sign In</Text>
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00D178",
    borderRadius: 5,
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  },
})