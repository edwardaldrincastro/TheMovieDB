import { API_V1 } from "../api";
import { getItem, removeItem } from "./AsyncStorage";

export default Logout = async ({ navigation }) => {
  const session_id = await getItem("session_id");
  try {
    const response = await API_V1.post(`/authentication/session?api_key=11bf768a6735837597f5578dae182def`,
      {
        session_id: session_id
      }
    )
    if (response.status === 200) {
      removeItem("session_id");
      navigation.navigate("PublicStack");
    }
  }
  catch (error) {
    return error;
  }
}