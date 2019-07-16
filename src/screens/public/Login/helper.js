import { API_V1 } from "../../../common/api";
import AsyncStorage from '@react-native-community/async-storage'

export const handleLogin = async (username, password, navigation) => {
  try {
    const REQUEST_TOKEN = await API_V1.get('authentication/token/new?api_key=11bf768a6735837597f5578dae182def')
    if (REQUEST_TOKEN.status === 200) {
      const VALIDATE_ACCOUNT = await API_V1.post('authentication/token/validate_with_login', {
        api_key: "11bf768a6735837597f5578dae182def",
        username,
        password,
        request_token: REQUEST_TOKEN.data.request_token
      })
      if (VALIDATE_ACCOUNT.status === 200) {
        const REQUEST_SESSION = await API_V1.post('authentication/session/new?api_key=11bf768a6735837597f5578dae182def', {
          request_token: VALIDATE_ACCOUNT.data.request_token
        })
        if (REQUEST_SESSION.status === 200) {
          await AsyncStorage.setItem('session_id', REQUEST_SESSION.data.session_id);
          navigation.navigate('PrivateStack')
          return { status: 200 };
        }

      } else {
        return response;
      }
    }
  }
  catch (error) {
    return { status: 400 };
  }
}