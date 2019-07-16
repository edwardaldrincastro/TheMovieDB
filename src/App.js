import { createSwitchNavigator,createAppContainer } from 'react-navigation';


import PublicStack from "./screens/public/Login";
import PrivateStack from "./screens/private";

const AppNavigator = createSwitchNavigator(
  {
    PublicStack,
    PrivateStack
  },
  {
    initialRouteName: 'PublicStack'
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;