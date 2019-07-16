import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import { OpenSansText } from "../../../../../components";

export default ReviewComponent = ({ data }) => {
  return (
    <View style={styles.reviewContainer}>
      <OpenSansText style={styles.review} bold>{`Reviews (${data.length})`}</OpenSansText>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({ item }) => { return <Card data={item} /> }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: data ? 20 : 0 }}
        ListEmptyComponent={<OpenSansText style={styles.message}>No review available</OpenSansText>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  reviewContainer: {
    paddingVertical: 10
  },
  review: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 15,
    letterSpacing: 1
  },
  message: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "center"
  }
})