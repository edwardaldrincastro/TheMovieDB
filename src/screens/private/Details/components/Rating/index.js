import React, { Component } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import Star from "./Star";
import RateButton from "./RateButton";
import { OpenSansText } from "../../../../../components";
import { DEVICE_WIDTH } from "../../../../../common/helpers/dimensions";
import FastImage from "react-native-fast-image";
import { postRating, deleteRating } from "../../helper";



export default class Rating extends Component {
  state = {
    rating: [false, false, false, false, false, false, false, false, false, false],
    isRated: false
  }

  componentDidMount() {
    const { handleModal, movieRating } = this.props;
    this.setRating(movieRating);
  }

  setRating = (movieRating) => {
    const ratings = [...this.state.rating];
    if (movieRating) {
      ratings.map((data, index) => {
        if (index <= movieRating) {
          ratings[index] = true;
        } else {
          ratings[index] = false;
        }
      })
      this.setState({ rating: ratings, isRated: true })
    } else {
      ratings.map((data, index) => {
        ratings[index] = false;

      })
      this.setState({ rating: ratings, isRated: false })
    }
  }

  countRating = () => {
    const { rating } = this.state;
    let rate = 0;
    rating.forEach((element) => {
      element ? rate += 1 : null
    })
    return rate;
  }

  handleStar = (selected) => {
    const ratings = [...this.state.rating];
    if (!ratings[selected]) {
      const result = ratings.filter((element, index) => index <= selected);
      result.forEach((element, index) => {
        ratings[index] = true;
      })
    } else {
      const result = ratings.filter((element, index) => index > selected);
      result.forEach((element, index) => {
        ratings[selected + index + 1] = false;
      })
    }
    this.setState({ rating: ratings, isRated: false })
  }

  closeModal = async (handleRating, handleModal, id) => {
    const myRating = this.countRating();
    const { isRated } = this.state;
    if (isRated) {
      if (myRating !== 0) {
        const deleteResponse = await deleteRating(id);
        this.setRating(null);
        this.setState({ isRated: false });
        handleRating(null);
        handleModal();

      } else {
        const postResponse = await postRating(id, myRating);
        this.setState({ isRated: true });
        handleRating(myRating);
        handleModal();
      }
    } else {
      if (myRating === 0) {
        const deleteResponse = await deleteRating();
        handleRating(myRating);
        handleModal();

      } else {
        const postResponse = await postRating(id, myRating);
        this.setState({ isRated: true });
        handleRating(myRating);
        handleModal();
      }
    }
  }

  handleCancel = (handleModal, movieRating) => {
    this.setRating(movieRating);
    handleModal();
  }

  render() {
    const { rating, isRated } = this.state;
    const { handleModal, handleRating, item, modalVisible, movieRating } = this.props;
    const { id, poster_path, vote_count, vote_average } = item;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.handleCancel(handleModal, movieRating)
        }}>
        <View style={styles.modal}>
          <View style={styles.container}>
            <FastImage
              style={{ width: 180, height: 270, alignSelf: 'center', marginTop: 35 }}
              resizeMode="cover"
              source={{
                uri: `https://image.tmdb.org/t/p/w500${poster_path}`
              }} />
            <OpenSansText bold style={styles.title}>How was the movie?</OpenSansText>
            <OpenSansText style={styles.subtitle}>{`${vote_average} Star from ${vote_count} users`}</OpenSansText>
            <View style={styles.bar}>
              <Star selected={rating[0]} onPress={() => this.handleStar(0)} />
              <Star selected={rating[1]} onPress={() => this.handleStar(1)} />
              <Star selected={rating[2]} onPress={() => this.handleStar(2)} />
              <Star selected={rating[3]} onPress={() => this.handleStar(3)} />
              <Star selected={rating[4]} onPress={() => this.handleStar(4)} />
              <Star selected={rating[5]} onPress={() => this.handleStar(5)} />
              <Star selected={rating[6]} onPress={() => this.handleStar(6)} />
              <Star selected={rating[7]} onPress={() => this.handleStar(7)} />
              <Star selected={rating[8]} onPress={() => this.handleStar(8)} />
              <Star selected={rating[9]} onPress={() => this.handleStar(9)} />
            </View>
            <RateButton
              isRated={isRated}
              disabled={this.countRating() == 0 ? true : false}
              onPress={() => this.closeModal(handleRating, handleModal, id)}>
              Submit</RateButton>
          </View>
          <OpenSansText medium style={styles.cancel} onPress={() => this.handleCancel(handleModal, movieRating)}>Cancel</OpenSansText>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: DEVICE_WIDTH - 30,
    backgroundColor: "transparent",
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 10
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(24,24,24,0.97)",
    padding: 30
  },
  bar: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 70
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    marginTop: 30,
  },
  subtitle: {
    color: "#FFF",
    fontSize: 14,
  },
  close: {
    transform: [
      { translateY: 10 },
      { translateX: 10 },
    ],
  },
  cancel: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 20
  },
})