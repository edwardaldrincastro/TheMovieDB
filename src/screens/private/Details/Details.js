import React, { Component, Fragment } from 'react'
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { getGenre } from "../../../common/helpers/genre";
import FastImage from "react-native-fast-image";
import { DEVICE_HEIGHT } from "../../../common/helpers/dimensions";
import { getLanguage, getMovieReviews, getRating } from "./helper";
import { ReviewComponent, TabBar, WatchlistButton, Rating, LoadingScreen } from "./components";
import { OpenSansText, CloseButton, Wrapper } from "../../../components";
import { handleWatchlist, getWatchlist } from "../../../common/helpers/watchlist";
import { getItem } from "../../../common/helpers/AsyncStorage";

let selectedGenre = [];

export class Details extends Component {

  state = {
    movieReview: "",
    myWatchlist: [],
    movieRating: "",
    action: true,
    isRating: false,
    modalVisible: false,
    onSelect: false,
    deletedMovieId: "",
    isMounted: false,
    page: 1
  }

  watchlist = {

  }

  componentDidMount() {
    const params = this.props.navigation.state.params;
    this.handleDetails(params);
  }
  componentDidUpdate() {
  }

  getMovieRating = async (movie_id) => {
    const session_id = await getItem("session_id");
    const { data } = await getRating(session_id)
    let movieRating = "";
    data.results.forEach((data, index) => {
      if (data.id === movie_id) {
        return movieRating = data.rating;
      };
    })
    return movieRating;
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  handleAllWatchlist = async (movie_id) => {
    let page = 1;
    let myList = [];
    let oldList = [];
    let newList;
    const getList = await getWatchlist(page);
    const totalPages = getList.data.total_pages
    oldList = getList.data.results
    do {
      page += 1;
      newList = await getWatchlist(page);
      newList.data.results = oldList.concat(newList.data.results)
    }
    while (totalPages > page);
    return newList.data;

  }

  checkMyList = async (movie_id, watchlist) => {
    let myList = [];
    let page = 1;
    let totalPage = watchlist.total_pages;
    watchlist.results.map((item, index) => {
      myList.push(item.id)
    })
    return myList.includes(movie_id) ? true : false;
  }

  handleDetails = async (params) => {
    const { data, watchlist, fromWatchlist } = params;
    const { item } = data;
    let myList;
    const myGenre = await this.handleGenre(item);
    const movieReview = await this.handleReview(item);
    if (!fromWatchlist) myList = await this.handleAllWatchlist();
    const newList = fromWatchlist ? watchlist : myList;
    const isInMyList = await this.checkMyList(item.id, newList);
    const movieRating = await this.getMovieRating(item.id)
    this.setState({
      selected_genres: myGenre,
      movieReview: movieReview,
      myWatchlist: newList,
      action: !isInMyList,
      movieRating: movieRating,
      isMounted: true,
      page: 1
    })
  }

  handleMylist = async (movie_id, action) => {
    const response = await handleWatchlist(movie_id, action);
    this.setState({
      onSelect: true,
      action: !action,
      deletedMovieId: movie_id
    })

  }
  handleGenre = async (item) => {
    let myGenre = await getGenre(item.genre_ids)
    selectedGenre = [];
    myGenre.map((data) => {
      selectedGenre.push(data.name);
    })
    return myGenre;
  }

  handleReview = async (item) => {
    const { data } = await getMovieReviews(item.id);
    return data.results;
  }

  handleRating = (rating) => {
    if (rating !== 0) this.setState({ movieRating: rating, })
  }

  handleGoBack = () => {
    const { navigation } = this.props;
    const { onSelect, deletedMovieId } = this.state;
    navigation.goBack();
    navigation.state.params.onSelect({ selected: onSelect, deletedMovieId: deletedMovieId });
  }

  render() {
    const { item } = this.props.navigation.state.params.data;
    const { movieReview, movieRating, modalVisible, action, isMounted } = this.state;
    const genres = selectedGenre ? selectedGenre.toString().replace(/,/g, ", ") : "Genre";
    const releaseDate = item.release_date.substring(0, 4);
    const language = getLanguage(item.original_language);
    return (
      <Fragment>
        {isMounted ?
          <Wrapper>
            <View style={styles.container}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                  style={{ width: "100%", minHeight: DEVICE_HEIGHT / 1.5, justifyContent: 'space-between' }}
                  blurRadius={4}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  }}>
                  <View style={styles.overlay}></View>

                  <FastImage
                    style={{ width: 180, height: 270, alignSelf: 'center', marginTop: 50 }}
                    resizeMode="cover"
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    }} />
                  <View style={styles.detailsContainer}>
                    <OpenSansText style={styles.title} bold>{item.title}</OpenSansText>
                    <View style={{ flexDirection: "row" }}>
                      <OpenSansText style={styles.subtitle}>{releaseDate}</OpenSansText>
                      <OpenSansText style={[styles.subtitle, { marginLeft: 5 }]}>{language}</OpenSansText>
                    </View>
                    <OpenSansText style={styles.subtitle}>{genres}</OpenSansText>
                    <OpenSansText style={styles.overview}>{item.overview}</OpenSansText>
                  </View>

                  <WatchlistButton action={action} onPress={() => this.handleMylist(item.id, action)} />
                  <TabBar data={item} movieRating={movieRating} onPress={() => this.setModalVisible(!modalVisible)} />
                </ImageBackground>
                <ReviewComponent data={movieReview} />
              </ScrollView>
              <CloseButton onPress={() => this.handleGoBack()} />
              <Rating item={item} movieRating={movieRating} handleModal={() => this.setModalVisible(!modalVisible)} handleRating={(myRating) => this.handleRating(myRating, item.id)} modalVisible={modalVisible} />
            </View >
          </Wrapper>
          :
          <Wrapper>
            <LoadingScreen />
          </Wrapper>
        }
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#181818",
    height: 180,
  },
  detailsContainer: {
    marginTop: 20
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    marginTop: 10,
    marginLeft: 15,
  },
  subtitle: {
    fontSize: 12,
    color: "#969696",
    marginHorizontal: 15
  },
  overview: {
    fontSize: 14,
    color: "#FFF",
    marginVertical: 10,
    marginHorizontal: 15
  },
  overlay: {
    backgroundColor: "#181818",
    width: "100%",
    height: DEVICE_HEIGHT,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.80
  },
})

export default Details;
