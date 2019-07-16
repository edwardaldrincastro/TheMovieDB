import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default Star = (props) => {
  const { selected, onPress } = props;
  const color = selected ? "#FDD026" : "#E2E2E2";
  return (
    <Icon name="md-star" color={color} size={35} onPress={onPress} style={{ margin: 3 }} />
  )
}