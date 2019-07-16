import { API_V1 } from "../../../common/api";

export const getTrendingMovies = async (page) => {
  try {
    const response = await API_V1.get(`/trending/movie/day?api_key=11bf768a6735837597f5578dae182def&page=${page}`)
    if (response.status === 200) {
      return response;
    }
  }
  catch (error) {
    return error;
  }
}

export const searchMovies = async (keywords) => {
  try {
    if (keywords) {
      const response = await API_V1.post(`/search/movie?api_key=11bf768a6735837597f5578dae182def&query=${keywords}`)
      console.log("response",response)
      if (response.status === 200) {
        return response.data;
      }
    } else {
      return null;
    }
  }
  catch (error) {
    return error;
  }
}
