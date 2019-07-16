import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from "./components";
import { DEVICE_WIDTH } from "../../../common/helpers/dimensions";
import { getTrendingMovies, searchMovies } from "./helper";
import { OpenSansText, MovieList, Wrapper } from "../../../components";
import debounce from "lodash/debounce";
import { getItem } from "../../../common/helpers/AsyncStorage";
import { LoadingScreen } from "./components";

export class Home extends Component {
  state = {
    trendingMovies: [],
    searchMovies: "",
    searchBar: "",
    myWatchlist: "",
    selected: false,
    isMounted: false,
    page: 0,
    total: 0
  }

  onSelect = data => {
    this.setState(data);
  };

  handleMovies = async () => {
    const { page, trendingMovies } = this.state;
    if (page != trendingMovies.total_pages) {
      const trending = await getTrendingMovies(page + 1);
      let oldList = trendingMovies.results || [];
      let newData = trending.data;
      newData.results = oldList.concat(newData.results)
      this.setState({
        trendingMovies: newData,
        selected: false,
        isMounted: true,
        page: page + 1
      })
    }
  }

  handleSearch = debounce(async (value) => {
    if (value) {
      const movieSearch = await searchMovies(value)
      if (movieSearch) {
        this.setState({ searchMovies: movieSearch })
      }
    } else {
      this.setState({ searchMovies: "" })
    }
  }, 250)

  async componentDidMount() {
    this.handleMovies();
    const session_id = await getItem("session_id");
    console.log(session_id)
  }

  render() {
    const { trendingMovies, searchMovies, isMounted } = this.state;
    const { navigation } = this.props;
    return (
      <Wrapper black>
        <View style={styles.container}>
          <Header navigation={navigation} onChangeText={(value) => this.handleSearch(value)} />
          <OpenSansText style={styles.title} bold>{searchMovies ? "Movies" : "Trending Movies"}</OpenSansText>
          {
            isMounted
              ?
              <MovieList movies={searchMovies ? searchMovies : trendingMovies} loadMore={() => this.handleMovies()} navigation={navigation} onSelect={this.onSelect} />
              :
              <LoadingScreen />
          }
        </View>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#181818"
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    letterSpacing: 1,
    margin: 10
  },
  movieList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10
  },
  poster: {
    width: (DEVICE_WIDTH / 3) - 15,
    borderWidth: 1,
    borderColor: "#fff",
    height: 200,
    marginRight: 10,
    marginBottom: 10
  }
})

export default Home;
