import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DEVICE_WIDTH } from "../../../../common/helpers/dimensions";

export default WatchlistButton = (props) => {
  const { data, action, onPress } = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Icon name={action ? "md-add" : "md-checkmark"} size={24} color="#FFF" solid {...props} />
        <OpenSansText style={styles.buttonText} bold>{action ? "Add to Watchlist" : "Remove from Watchlist"}</OpenSansText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: DEVICE_WIDTH - 30,
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
    marginLeft: 10
  }
})