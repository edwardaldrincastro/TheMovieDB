import { iso_languages } from "../../../common/constants/iso_languages";
import { API_V1 } from "../../../common/api";
import { getItem } from "../../../common/helpers/AsyncStorage";

export const getLanguage = (code) => {
  return iso_languages[code].name;
}

export const getMovieReviews = async (movie_id) => {
  try {
    const response = await API_V1.get(`/movie/${movie_id}/reviews?api_key=11bf768a6735837597f5578dae182def`)
    if (response.status === 200) {
      return response;
    }
  }
  catch (error) {
    return error;
  }
}

export const postRating = async (movie_id, value) => {
  try {
    const session_id = await getItem("session_id");
    const response = await API_V1.post(`/movie/${movie_id}/rating?api_key=11bf768a6735837597f5578dae182def&session_id=${session_id}`, { value: value })
    if (response.status === 200) {
      return response;
    }
  }
  catch (error) {
    return error;
  }
}

export const deleteRating = async (movie_id) => {
  try {    
    const session_id = await getItem("session_id");
    const response = await API_V1.delete(`/movie/${movie_id}/rating?api_key=11bf768a6735837597f5578dae182def&session_id=${session_id}`)
    if (response.status === 200) {
      return response;
    }
  }
  catch (error) {
    return error;
  }
}


export const getRating = async (movie_id) => {
  try {
    const session_id = await getItem("session_id");
    const response = await API_V1.get(`account/{account_id}/rated/movies?api_key=11bf768a6735837597f5578dae182def&session_id=${session_id}`)
    if (response.status === 200) {
      return response;
    }
  }
  catch (error) {
    return error;
  }
}
