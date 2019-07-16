import React from 'react';
import { View, StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../../common/helpers/dimensions";
import AnimatedView from "../../../../components/AnimatedView";


export default LoadingScreen = () => {

  return (
    <View style={styles.container}>
      <AnimatedView style={[styles.poster, {

      }]}></AnimatedView>
      <View style={styles.detailsContainer}>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH / 2.5, marginTop: 20 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH / 3.33 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH / 2.5, marginBottom: 20 }]}></AnimatedView>

        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30, marginBottom: 20 }]}></AnimatedView>

        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30, marginBottom: 20 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH / 3.33, marginVertical: 20 }]}></AnimatedView>

        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>

        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30, marginTop: 20 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
        <AnimatedView style={[styles.bar, { width: DEVICE_WIDTH - 30 }]}></AnimatedView>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#181818",
    height: 180,
  },
  detailsContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 15
  },
  poster: {
    width: 180,
    height: 270,
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: "#2F2F2F"
  },
  bar: {
    height: 10,
    width: DEVICE_WIDTH - 30,
    backgroundColor: "#2F2F2F",
    marginVertical: 5
  }
})
