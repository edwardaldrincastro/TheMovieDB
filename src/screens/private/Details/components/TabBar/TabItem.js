import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { OpenSansText } from "../../../../../components";

export default TabItem = ({ icon, color, label, sublabel, onPress }) => {
  return (
    <View style={styles.tab}>
      <TouchableOpacity style={styles.tab} onPress={onPress}>
        <Icon name={icon} color={color} size={26} />
        <OpenSansText style={styles.tabLabel}>{label}</OpenSansText>
        <OpenSansText style={styles.subLabel}>{sublabel}</OpenSansText>
      </TouchableOpacity>
    </View >
  )
}


const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabLabel: {
    color: "#FFF",
    fontSize: 14,
  },
  label: {
    color: "#969696",
    fontSize: 12,
  },
  subLabel: {
    color: "#969696",
    fontSize: 12,
    marginBottom: 10
  },

})