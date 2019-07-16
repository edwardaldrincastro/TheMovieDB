import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import OpenSansText from "../../../../components/OpenSansText";
import { Logout } from "../helper";

export default Header = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" color="#FFF" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => Logout(navigation)}>
          <Icon name="ios-power" color="#FFF" size={30} />
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
    marginBottom: 15
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
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    letterSpacing: 1,
  }
});