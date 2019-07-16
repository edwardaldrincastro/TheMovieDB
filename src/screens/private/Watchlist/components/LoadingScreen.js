import React from 'react';
import { FlatList, View, StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../../common/helpers/dimensions";
import AnimatedView from "../../../../components/AnimatedView";

export default LoadingScreen = () => {

  return (
    <View style={styles.movieList}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        numColumns={3}
        renderItem={(data) =>
          <AnimatedView style={styles.poster}></AnimatedView>
        }
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 5, }}
        columnWrapperStyle={{ justifyContent: 'space-around', }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  poster: {
    width: DEVICE_WIDTH / 3.4,
    height: 180.1432,
    marginRight: 0,
    marginBottom: 10,
    backgroundColor: "#2F2F2F"
  },
  movieList: {
    flex: 1,
    marginHorizontal: 5
  },
})
