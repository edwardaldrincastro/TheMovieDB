import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DEVICE_WIDTH } from "../../common/helpers/dimensions";
import FastImage from "react-native-fast-image";

export const getMovieDetails = ({ data, watchlist, navigation, onSelect, fromWatchlist }) => {
  navigation.navigate("Details", { data: data, watchlist: watchlist, navigationState: navigation.state, onSelect: onSelect, fromWatchlist: fromWatchlist })
}

export default Poster = (props) => {
  const { data } = props;
  return (
    <TouchableOpacity onPress={() => getMovieDetails(props)}>
      <View style={styles.poster}>
        <FastImage
          style={{ width: "100%", height: "100%" }}
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data.item.poster_path}`,
            priority: FastImage.priority.normal
          }}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  poster: {
    // width: "100%",
    // height: "100%",
    // marginRight: 0,
    // marginBottom: 10,
    backgroundColor: "#2F2F2F",
    // alignSelf: "flex-start",
    width: DEVICE_WIDTH / 3.4,
    height: 180.1432,
    marginRight: DEVICE_WIDTH / 33.99999999999992,
    marginBottom: DEVICE_WIDTH / 33.99999999999992,
  }
})