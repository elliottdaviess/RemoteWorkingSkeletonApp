import React from "react";

import { StyleSheet, Platform, Image, Text, View } from "react-native";

// import the different screens

// import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import BoardScreen from "./components/BoardScreen";
import BoardDetailScreen from "./components/BoardDetailScreen";
import AddBoardScreen from "./components/AddBoardScreen";
import EditBoardScreen from "./components/EditBoardScreen";
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";

const RootStack = createStackNavigator(
  {
    Board: BoardScreen,
    BoardDetails: BoardDetailScreen,
    AddBoard: AddBoardScreen,
    EditBoard: EditBoardScreen,
    Main: Main,
    Loading: Loading,
    SignUp: SignUp,
    Login: Login
  },
  {
    initialRouteName: "Loading",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#777777"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerBackTitle: null
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
