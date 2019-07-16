import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const getItem = (key) => {
  try {
    const value = AsyncStorage.getItem(key)
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return e;
  }
}
export const setItem = (key) => {
  try {
    const value = AsyncStorage.setItem(key)
  } catch (e) {
    return e;
  }
}
export const removeItem = (key) => {
  try {
    const value = AsyncStorage.removeItem(key)
  } catch (e) {
    return e;
  }
}