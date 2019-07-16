import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Poster from "./Poster";
import { DEVICE_WIDTH } from "../../common/helpers/dimensions";

export default MovieList = ({ movies, watchlist, navigation, onSelect, fromWatchlist, loadMore }) => {
  return (
    <View style={styles.movieList}>
      <FlatList
        data={movies.results}
        numColumns={3}
        renderItem={(data) =>
          <Poster
            data={data}
            watchlist={watchlist}
            navigation={navigation}
            onSelect={onSelect}
            fromWatchlist={fromWatchlist} />
        }
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={18}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  movieList: {
    flex: 1,
    marginLeft: DEVICE_WIDTH / 33.99999999999992
  },
})