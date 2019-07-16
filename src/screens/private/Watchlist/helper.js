import React from "react";
import { API_V1 } from "../../../common/api";
import AsyncStorage from "@react-native-community/async-storage";


export const Logout = async (navigation) => {
  try {
    const session_id = await AsyncStorage.getItem("session_id")
    const response = await API_V1.delete(`authentication/session?api_key=11bf768a6735837597f5578dae182def`, {
      data: { session_id: session_id }
    })
    if (response.status === 200) {
      await AsyncStorage.removeItem('session_id');
      navigation.navigate('PublicStack')
      return response;
    }
  }
  catch (error) {
    return error;
  }
}
