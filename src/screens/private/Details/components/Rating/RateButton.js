import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DEVICE_WIDTH } from "../../../../../common/helpers/dimensions";

export default RateButton = (props) => {
  const { disabled, isRated } = props;
  return (
    <TouchableOpacity {...props}>
      <View style={disabled ? [styles.button, { backgroundColor: "#232323" }] : styles.button}>
        <OpenSansText style={styles.buttonText} bold>{isRated ? "Delete Rating" : "Rate"}</OpenSansText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: DEVICE_WIDTH - 60,
    height: 35,
    borderRadius: 4,
    backgroundColor: "#0B91E8",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
  }
})