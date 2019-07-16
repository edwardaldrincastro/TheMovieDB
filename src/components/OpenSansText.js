import React from "react";
import { Text } from "react-native";

export default OpenSansText = (props) => {
  const { heavy, bold, light, medium, italic } = props;
  let fontWeight;

  if (bold) {
    fontWeight = "OpenSans-Bold";
  } else if (light) {
    fontWeight = "OpenSans-Light";
  } else if (medium) {
    fontWeight = "OpenSans-SemiBold";
  } else if (heavy) {
    fontWeight = "OpenSans-ExtraBold";
  } else if (italic) {
    fontWeight = "OpenSans-Italic";
  } else {
    fontWeight = "OpenSans-Regular";
  }
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: fontWeight }]}>
      {props.children}
    </Text >
  )
}