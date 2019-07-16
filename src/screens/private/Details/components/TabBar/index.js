import React from 'react';
import { StyleSheet } from "react-native";
import TabItem from "./TabItem";
import LinearGradient from "react-native-linear-gradient";

export default TabBar = ({ data, movieRating, onPress }) => {
  const { vote_average, vote_count, popularity } = data;
  return (
    <LinearGradient
      colors={["#18181800", '#181818D9']}
      style={styles.bar}>
      <TabItem icon="md-star" color="#FDD026" label={`${vote_average}/10`} sublabel={vote_count} />
      <TabItem icon="md-star" color={movieRating ? "#FDD026" : "#E2E2E2"} label={movieRating ? `${movieRating}/10` : "Rate"} sublabel="Your Rating" onPress={onPress} />
      <TabItem icon="md-trending-up" color="#64CB38" label={popularity} sublabel="Popularity" />
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  bar: {
    height: 70,
    width: "100%",
    flexDirection: 'row',
    backgroundColor: "rgba(24,24,24,0)",
    borderBottomWidth: 3,
    borderBottomColor: "#000",
    marginTop: 10
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabLabel: {
    color: "#FFF",
    fontSize: 12
  },

})