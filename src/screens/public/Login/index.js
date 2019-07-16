import React, { Component } from 'react'
import { View, Image, StyleSheet,ScrollView, Linking } from 'react-native'
import { InputField, Button } from "./components";
import { handleLogin } from "./helper";
import { OpenSansText, Wrapper } from "../../../components";
import { getItem } from "../../../common/helpers/AsyncStorage";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    error: false,
    isSubmitting: false,
  }

  componentDidMount() {
    this.handleVerification();
  }

  handleVerification = async () => {
    const session_id = await getItem("session_id")
    if (session_id) this.props.navigation.navigate("PrivateStack");
  }
  handleSubmit = async (username, password) => {
    if (username != "" && password != "" && !this.state.isSubmitting) {
      this.setState({ isSubmitting: true })
      const response = await handleLogin(username, password, this.props.navigation)
      if (response.status === 400) this.setState({ isSubmitting: false, error: true })
    }
  }
  render() {
    const { username, password, error, isSubmitting } = this.state;
    const { navigation } = this.props;
    const isDisabled = username && password ? false : true;
    return (
      <Wrapper>
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={{ width: 200, height: 200, tintColor: "#00D178" }} resizeMode="contain" source={require('../../../common/assets/tmdb.png')} />
          </View>
          <View style={styles.form}>
            <InputField placeholder="Username" onChangeText={(value) => this.setState({ username: value })} />
            <InputField placeholder="Password" onChangeText={(value) => this.setState({ password: value })} secured />
            {error ? <OpenSansText medium style={styles.error}>Oops! The username and password you entered did not match our records.</OpenSansText> : null}
            <OpenSansText medium onPress={() => Linking.openURL("https://www.themoviedb.org/account/reset-password").catch((err) => console.error('An error occurred', err))} style={styles.forgotPassword}>Forgot Password?</OpenSansText>
            <Button onPress={() => this.handleSubmit(username, password)} isSubmitting={isSubmitting} disabled={isDisabled} />
          </View>
        </View >        
        </ScrollView>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#181818",
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  form: {
    flex: 1,
    paddingHorizontal: 50,
    paddingBottom: 100
  },
  error: {
    color: "#DA4336",
    marginBottom: 10
  },
  forgotPassword: {
    fontSize: 14,
    color: "#969696",
    marginBottom: 15
  }
})

export default Login;
