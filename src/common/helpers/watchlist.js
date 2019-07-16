import { API_V1 } from "../api";
import { getItem } from "./AsyncStorage";



export const handleWatchlist = async (movie_id, action) => {
  try {
    const session_id = await getItem("session_id");
    if (session_id) {
      const response = await API_V1.post(`account/{account_id}/watchlist?api_key=11bf768a6735837597f5578dae182def&session_id=${session_id}`, {
        "media_type": "movie",
        "media_id": movie_id,
        "watchlist": action
      })
      if (response.status === 200) {
        return response;
      }
    }
  }
  catch (error) {
    return "false";
  }
}

export const getWatchlist = async (page) => {
  try {
    const session_id = await getItem("session_id")
    const response = await API_V1.get(`/account/{account_id}/watchlist/movies?api_key=11bf768a6735837597f5578dae182def&session_id=${session_id}&page=${page}`)
    if (response.status === 200) {
      return response;
    }
  }
  catch (error) {
    return error;
  }
}