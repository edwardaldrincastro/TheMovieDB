import React from 'react';
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default CloseButton = (props) => {
  return (
    <View style={[styles.closeCircle, props.style]}>
      <Icon name="md-close" size={20} color="#FFF" solid {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeCircle: {
    width: 24,
    height: 24,
    borderRadius: 15,
    backgroundColor: "#181818",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    top: 8,
  }
})