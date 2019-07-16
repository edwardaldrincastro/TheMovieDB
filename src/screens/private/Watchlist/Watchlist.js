import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { DEVICE_WIDTH } from "../../../common/helpers/dimensions";
import { OpenSansText, MovieList, Wrapper } from "../../../components";
import { getWatchlist } from "../../../common/helpers/watchlist";
import { Header, LoadingScreen } from "./components";
import { NavigationEvents } from "react-navigation";

export class Watchlist extends Component {
  state = {
    myWatchlist: [],
    deletedMovieId: null,
    isMounted: false,
    page: 0
  }

  componentDidMount() {
    this.handleWatchlist();
  }

  onSelect = data => {
    this.setState(data);
  };

  handleWatchlist = async () => {
    const { page, myWatchlist } = this.state;
    if (page != myWatchlist.total_pages) {
      const watchlist = await getWatchlist(page + 1);
      let oldList = myWatchlist.results || [];
      let newData = watchlist.data;
      newData.results = oldList.concat(newData.results)
      this.setState({
        myWatchlist: newData,
        isMounted: true,
        page: page + 1
      })
    }
  }
  updateList = (deletedMovieId) => {
    const { myWatchlist } = this.state;
    let updatedWatchlist = [];
    if (deletedMovieId) {
      myWatchlist.results.map((data, index) => {
        if (data.id !== deletedMovieId) {
          updatedWatchlist.splice(index, 0, data)
        }
      })
      this.setState((prevState) => {
        return {
          ...prevState,
          myWatchlist: {
            ...prevState.myWatchlist,
            results: updatedWatchlist
          }
        }
      })
    }
  }


  render() {
    const { myWatchlist, deletedMovieId, isMounted } = this.state;
    const { navigation } = this.props;
    return (
      <Wrapper black>
        <View style={styles.container}>
          <Header navigation={navigation} title="My Watchlist" />
          <OpenSansText style={styles.title} bold>{"My Watchlist"}</OpenSansText>
          {
            isMounted
              ?
              <MovieList movies={myWatchlist} watchlist={myWatchlist} loadMore={() => this.handleWatchlist()} navigation={navigation} onSelect={this.onSelect} fromWatchlist />
              :
              <LoadingScreen />
          }
          <NavigationEvents
            onDidFocus={payload => this.updateList(deletedMovieId)}
          />
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
    marginHorizontal: 10,
    marginBottom: 10,
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

export default Watchlist;
