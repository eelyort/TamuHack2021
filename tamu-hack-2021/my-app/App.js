import React, { Component } from "react";
import AppLoading from 'expo-app-loading';
import { Container, Text, Header, Content, Accordion } from "native-base";
import { StatusBar } from "react-native";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    );
  }
}

