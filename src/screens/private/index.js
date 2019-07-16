import { createStackNavigator } from "react-navigation";

import Home from "./Home/Home";
import Details from "./Details/Details";
import Watchlist from "./Watchlist/Watchlist";

export default createStackNavigator({
  Home: Home,
  Details: Details,
  Watchlist: Watchlist,
},
{
  headerMode: "none"
});