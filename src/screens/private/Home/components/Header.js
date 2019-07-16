import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default Header = ({ navigation, onChangeText, onSelect }) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image source={require("../../../../common/assets/tmdb.png")} resizeMode="contain" style={styles.logo} />
      </View>
      <View style={styles.center}>
        <View style={styles.searchBar}>
          <Icon name="md-search" color="#404040" size={20} />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Search"
            placeholderTextColor="#404040"
            style={styles.searchField} />
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => navigation.navigate("Watchlist", { onSelect: onSelect })}>
          <Icon name="md-menu" color="#404040" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#000",
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 50,
    tintColor: "#00D178"
  },
  left: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000"
  },
  right: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    flex: 1,
  },
  searchBar: {
    height: 40,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#181818",
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: 10
  },
  searchField: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
    fontFamily: "OpenSans-Regular"
  }
});