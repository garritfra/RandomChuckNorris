import React from "react";
import { StyleSheet, Text, View, Vibration, Button, Image } from "react-native";
import chuck from "fetch-a-chuck";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { joke: "Click me!" };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.joke}
          onPress={() => chuck().then(joke => this.setState({ joke: joke }))}
        >
          {this.state.joke}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: { position: "absolute" },
  joke: {
    margin: "10%",
    fontSize: 30
  }
});
