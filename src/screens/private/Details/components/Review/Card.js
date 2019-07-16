import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { OpenSansText } from "../../../../../components";

export default Card = ({ data }) => {

  const [expanded, handleClick] = useState(0);
  const { author, content } = data;
  return (
    <TouchableOpacity onPress={() => handleClick(expanded ? false : !expanded)} style={styles.container}>
      <View style={styles.card}>
        <OpenSansText style={styles.author}>{author}</OpenSansText>
        <OpenSansText style={styles.content} numberOfLines={expanded ? null : 5}>{content}</OpenSansText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#000",
    paddingHorizontal: 15
  },
  card: {
    flex: 1,
    marginVertical: 10,
  },
  author: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
  },
  content: {
    color: "#969696",
    fontSize: 14
  }
})