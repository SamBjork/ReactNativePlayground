import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1.5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logotextview}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginview}>
        <AppButton
          title="Login"
          onPress={() => console.log("Tapped again")}
        ></AppButton>
        <AppButton title="Register" color={"secondary"} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  logotextview: {
    alignItems: "center",
    top: 40,
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  loginview: {
    flex: 1,
    justifyContent: "flex-end",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
