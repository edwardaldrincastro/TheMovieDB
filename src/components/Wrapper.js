import React from "react";
import { SafeAreaView, StatusBar } from "react-native";


export default Wrapper = (props) => {
  const background = props.black ? "#000" : "#181818";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <StatusBar barStyle="light-content" />
      {props.children}
    </SafeAreaView>
  )
}
